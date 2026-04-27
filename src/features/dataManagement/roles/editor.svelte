<script lang="ts">
	import {
		Form,
		FormInput,
		FormSelect,
		PageLoader,
		type DatatableEditorFormProps
	} from '@rkosafo/cai.components';
	import { onMount } from 'svelte';
	import z from 'zod';
	import { readReports } from '../reports/svc';
	import { readDashboards } from '../dashboards/svc';
	import { readPermissions } from './svc';

	let { data, readonly, onChange }: DatatableEditorFormProps = $props();

	let initialValues = $state({
		name: data?.name || '',
		notes: data?.notes || '',
		active: data?.active || true,
		permissions: data?.permissions || ([] as string[]),
		dashboards: data?.dashboards || ([] as number[]),
		reports: data?.reports || ([] as number[])
	});

	let permissions = $state<{ value: string; label: string }[]>([]);
	let reports = $state<{ value: number; label: string }[]>([]);
	let dashboards = $state<{ value: number; label: string }[]>([]);
	let busy = $state(true);

	const schema = z.object({
		name: z.string().nonempty('Required'),
		notes: z.string().optional(),
		active: z.boolean(),
		permissions: z.array(z.string()),
		reports: z.array(z.number()).optional(),
		dashboards: z.array(z.number()).optional()
	});

	onMount(async () => {
		try {
			const [permissionsRes, dashboardsRes, reportsRes] = await Promise.all([
				readPermissions(),
				readDashboards(1, 1000),
				readReports(true, 1, 1000)
			]);
			if (permissionsRes.success) {
				permissions = permissionsRes.data.map((x: any) => ({
					value: x,
					label: x
				}));
				// console.log({ permissions });
			} else {
				// showError(permissionsRes.message);
			}

			if (dashboardsRes.success) {
				dashboards =
					dashboardsRes.data.items!.map((x: any) => ({
						value: x.id,
						label: x.name
					})) || [];
			} else {
				// showError(dashboardsRes.message);
			}

			if (reportsRes.success) {
				const data =
					reportsRes.data.items && reportsRes.data.items.length > 0 ? reportsRes.data.items : [];

				reports = data?.map((x) => ({ value: x.id, label: x.name })) || [];
			} else {
				// showError(reportsRes.message);
			}
		} catch (err: any) {
			// console.log(err);
			// showError(err.message || 'Failed to load data');
		} finally {
			busy = false;
		}
	});
</script>

{#if busy}
	<div class="h-96 w-full"><PageLoader size={50} /></div>
{:else}
	<Form {schema} {initialValues} {onChange} class="space-y-3">
		<FormInput name="name" required label="Name" {readonly} />
		<FormSelect
			name="permissions"
			label="Permissions"
			required
			multiple={true}
			disabled={readonly}
			options={permissions}
		/>
		<FormSelect
			name="dashboards"
			label="Dashboards"
			multiple
			disabled={readonly}
			options={dashboards}
		/>
		<FormSelect name="reports" label="Reports" multiple disabled={readonly} options={reports} />
		<FormInput name="notes" label="Notes" {readonly} />
	</Form>
{/if}
