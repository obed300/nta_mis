<!-- MembershipDashboard.svelte -->
<script lang="ts" module>
	export function formatNumber(value: number | undefined): string {
		return (value || 0).toLocaleString('en-US');
	}
</script>

<script lang="ts">
	import Card from '$cmps/Card.svelte';
	import EChart from '$cmps/EChart.svelte';

	import { activeDates } from '../index.svelte';
	import { PageLoader, toast } from '@rkosafo/cai.components';
	import { slide } from 'svelte/transition';
	import { fetchDashboardData } from '../svc';

	let isLoading = $state(false);
	let dashboardsData = $state<any>(null);

	// Derived date range from the global store
	let startDate = $derived(activeDates?.getValuesAsDate()?.startDate);
	let endDate = $derived(activeDates?.getValuesAsDate()?.endDate);

	async function loadData(start: Date, end: Date) {
		if (!start || !end) return;
		try {
			isLoading = true;
			const res = await fetchDashboardData(start, end);
			if (!res.success) {
				toast.error(res?.message || 'Failed to fetch data');
				return;
			}
			// Accessing the nested dashboardsData property from your JSON structure
			dashboardsData = res?.data;

			console.log(dashboardsData);
		} catch (err: any) {
			console.error('Fetch Error:', err);
			toast.error('An error occurred while loading dashboard data');
			dashboardsData = null;
		} finally {
			isLoading = false;
		}
	}

	// -------------------- Data Transformation Helpers --------------------

	// 1. Bar Chart: Members by Region
	const regionOptions = $derived.by(() => {
		const regions = [
			...new Set(dashboardsData?.membersByRegion?.map((d: any) => d.child))
		] as string[];

		const sessnetData = regions.map(
			(r) =>
				dashboardsData?.membersByRegion?.find((d: any) => d.child === r && d.parent === 'SESNET')
					?.value || 0
		);
		const ntaData = regions.map(
			(r) =>
				dashboardsData?.membersByRegion?.find((d: any) => d.child === r && d.parent === 'NTA')
					?.value || 0
		);

		return {
			title: { text: 'Members by Region', left: 'center' },
			tooltip: { trigger: 'axis' },
			legend: { top: '10%', data: ['SESSNET', 'NTA'] },
			xAxis: { type: 'category', data: regions },
			yAxis: { type: 'value' },
			series: [
				{ name: 'SESSNET', type: 'bar', data: sessnetData, itemStyle: { color: '#3b82f6' } },
				{ name: 'NTA', type: 'bar', data: ntaData, itemStyle: { color: '#10b981' } }
			]
		};
	});

	// 2. Line Chart: Trends Over Time
	const trendOptions = $derived.by(() => {
		// Map months from both datasets to get a unique list of time points
		const timePoints = [
			...new Set([
				...(dashboardsData?.sesnetMembersOverTime?.map((d: any) => `${d.child}/${d.parent}`) || []),
				...(dashboardsData?.ntaMembersOverTime?.map((d: any) => `${d.child}/${d.parent}`) || [])
			])
		].sort();

		const sessnetTrend = timePoints.map((t) => {
			const [m, y] = t.split('/');
			return (
				dashboardsData?.sesnetMembersOverTime?.find((d: any) => d.child === m && d.parent === y)
					?.value || 0
			);
		});

		const ntaTrend = timePoints.map((t) => {
			const [m, y] = t.split('/');
			return (
				dashboardsData?.ntaMembersOverTime?.find((d: any) => d.child === m && d.parent === y)
					?.value || 0
			);
		});

		return {
			title: { text: 'Registration Trends', left: 'center' },
			tooltip: { trigger: 'axis' },
			legend: { top: '10%' },
			xAxis: { type: 'category', data: timePoints },
			yAxis: { type: 'value' },
			series: [
				{
					name: 'SESSNET',
					type: 'line',
					smooth: true,
					data: sessnetTrend,
					itemStyle: { color: '#3b82f6' }
				},
				{ name: 'NTA', type: 'line', smooth: true, data: ntaTrend, itemStyle: { color: '#10b981' } }
			]
		};
	});

	// 3. Pie Chart: Membership Share
	const distributionOptions = $derived({
		title: { text: 'Overall Membership Share', left: 'center' },
		tooltip: { trigger: 'item' },
		legend: { bottom: '0%', left: 'center' },
		series: [
			{
				type: 'pie',
				radius: ['40%', '70%'],
				data:
					dashboardsData?.membershipShare?.map((d: any) => ({
						name: d.name === 'SESNET' ? 'SESSNET' : d.name,
						value: d.value,
						itemStyle: { color: d.name === 'SESNET' ? '#3b82f6' : '#10b981' }
					})) || []
			}
		]
	});

	$effect(() => {
		loadData(startDate, endDate);
	});
</script>

<div class="container mx-auto h-full p-5">
	{#if isLoading}
		<div class="flex h-64 items-center justify-center">
			<PageLoader />
		</div>
	{:else if dashboardsData}
		<div in:slide>
			<!-- -------------------- Summary Cards -------------------- -->
			<div class="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card
					title="SESSNET Members"
					value={formatNumber(dashboardsData.totalSesnetMembers)}
					icon="mdi:account-group"
					color="blue"
					desc="Total approved SESSNET members"
				/>
				<Card
					title="NTA Members"
					value={formatNumber(dashboardsData.totalNTAMembers)}
					icon="mdi:water-pump"
					color="green"
					desc="Total National Toilet Assoc. members"
				/>
				<!-- Note: These fields weren't in your specific JSON example, 
                     I'm keeping them as 0 or mapping them if they exist in the full res -->
				<Card
					title="Pending Approvals"
					value={formatNumber(dashboardsData.pendingApprovals || 0)}
					icon="mdi:account-clock-outline"
					color="orange"
					desc="Registrations awaiting review"
				/>
				<Card
					title="Rejected Apps"
					value={formatNumber(dashboardsData.rejectedApplications || 0)}
					icon="mdi:account-cancel-outline"
					color="red"
					desc="Applications declined"
				/>
			</div>

			<!-- -------------------- Charts Area -------------------- -->
			<div class="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
				<EChart chartOptions={trendOptions} />
			</div>

			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
				<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
					<EChart chartOptions={regionOptions} />
				</div>
				<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
					<EChart chartOptions={distributionOptions} />
				</div>
			</div>
		</div>
	{:else}
		<div class="flex h-64 items-center justify-center text-gray-500">
			No data available for the selected period.
		</div>
	{/if}
</div>

<style>
	:global(.chart) {
		min-height: 380px;
		width: 100%;
	}
</style>
