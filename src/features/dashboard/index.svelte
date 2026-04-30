<script lang="ts" module>
	import dayjs from 'dayjs';
	import DefaultDashboard from './partial/defaultDashboard.svelte';

	const currentDate = dayjs();

	// Keep the mapper simple for the ComponentCanvas to work
	const map: Record<string, any> = {
		defaultDashboard: DefaultDashboard
	};

	function textToComponent(typeName: string): any {
		return map[typeName] || DefaultDashboard;
	}

	export function initMappers() {
		addComponentMapper(textToComponent);
	}

	export function clearMappers() {
		removeComponentMapper(textToComponent);
	}

	interface ActiveDates {
		startDate: Date | null;
		endDate: Date | null;
	}

	// Dates are usually required by the dashboard children
	export let activeDates = $state<{
		value: ActiveDates;
		setDates: (val: ActiveDates) => void;
		getValuesAsDate: () => { startDate: Date; endDate: Date };
		getValuesAsString: () => { startDate: string; endDate: string };
	}>({
		value: {
			startDate: currentDate.startOf('month').toDate(),
			endDate: currentDate.toDate()
		},
		setDates(val) {
			this.value = val;
		},
		getValuesAsDate() {
			return {
				startDate: this.value.startDate!,
				endDate: this.value.endDate!
			};
		},
		getValuesAsString() {
			return {
				startDate: dayjs(this.value.startDate).format('YYYY-MM-DD'),
				endDate: dayjs(this.value.endDate).format('YYYY-MM-DD')
			};
		}
	});
</script>

<script lang="ts">
	import {
		addComponentMapper,
		Checkbox,
		ComponentCanvas,
		Datepicker,
		loadFromLocalStorage,
		removeComponentMapper,
		saveToLocalStorage,
		type IComponentDescriptor
	} from '@rkosafo/cai.components';
	import { nanoid } from 'nanoid';
	import { onDestroy, onMount } from 'svelte';

	initMappers();

	const dashbboardFilterKey = 'epayPayrollPayslip.Portal';
	let elements = $state<IComponentDescriptor[]>([]);
	let rememberThis = $state(false);

	// Load saved filter preferences
	{
		const saved = loadFromLocalStorage<{ startDate: Date; endDate: Date; rememberThis: boolean }>(
			dashbboardFilterKey
		);
		if (saved?.rememberThis) {
			activeDates.setDates({
				startDate: new Date(saved.startDate),
				endDate: new Date(saved.endDate)
			});
			rememberThis = true;
		}
	}

	function handleDateChange(v: any) {
		const { from, to } = v;
		activeDates.setDates({ startDate: from, endDate: to });
	}

	function handleCheck(e: Event) {
		const value = (e.target as HTMLInputElement).checked;
		rememberThis = value;

		if (value) {
			saveToLocalStorage(dashbboardFilterKey, {
				startDate: activeDates.getValuesAsDate().startDate,
				endDate: activeDates.getValuesAsDate().endDate,
				rememberThis: true
			});
		} else {
			localStorage.removeItem(dashbboardFilterKey);
		}
	}

	onMount(() => {
		// Only add the default dashboard
		elements = [
			{
				id: nanoid(),
				type: 'defaultDashboard',
				collapsed: false,
				collapsible: false,
				title: 'Dashboard'
			}
		];
	});

	onDestroy(() => {
		clearMappers();
	});
</script>

<div class="flex h-full w-full flex-col gap-2 p-5">
	<fieldset class="rounded border border-orange-200 bg-orange-50/40 px-4 py-2">
		<legend class="bg-orange-300 px-4 py-[3px] text-sm text-white">Filters</legend>
		<div class="flex flex-col gap-2 md:flex-row lg:items-center lg:justify-between">
			<div class="max-w-4xl grow">
				<div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
					<Datepicker
						range
						placeholder="Select date range"
						onselect={handleDateChange}
						rangeFrom={activeDates.getValuesAsDate().startDate}
						rangeTo={activeDates.getValuesAsDate().endDate}
					/>
					<div class="flex items-center pt-1.5">
						<Checkbox checked={rememberThis} onchange={handleCheck} />
						<span class="ml-2">Remember date range</span>
					</div>
				</div>
			</div>
		</div>
	</fieldset>

	<div class="grow overflow-y-auto">
		<ComponentCanvas children={elements} close={() => {}} toggleCollapse={() => {}} />
	</div>
</div>