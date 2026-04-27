<script lang="ts" module>
	const tableColumns: TableColumn[] = [
		{
			header: 'Name',
			accessor: 'name',
			plugins: {
				sort: { disable: true }
			}
		},
		{
			header: 'Viewer',
			accessor: 'viewer',
			plugins: {
				sort: { disable: true }
			}
		},
		{
			header: 'Description',
			accessor: (row: any) => row.description ?? '...',
			plugins: {
				sort: { disable: true }
			}
		},
		{
			header: 'Status',
			accessor: (row: any) => (row.active ? 'ACTIVE' : 'DISABLED'),
			plugins: {
				sort: { disable: true }
			}
		}
	];

	function read(skip?: number, take?: number, defn?: TableFilter) {
		return readDashboards(skip, take);
	}

	function deleteEntry(params: any) {
		return deleteDashboard(params);
	}

	function updateEntry(params: any) {
		return updateDashboard(params);
	}
</script>

<script lang="ts">
	import {
		Box,
		Datatable,
		type DatatableEditorFormProps,
		type TableColumn,
		type TableFilter
	} from '@rkosafo/cai.components';
	import { createDashboard, deleteDashboard, readDashboards, updateDashboard } from './svc';
	import Editor from './editor.svelte';
</script>

<Box bgWhite>
	<Datatable
		{tableColumns}
		{read}
		createEntry={createDashboard}
		{deleteEntry}
		{updateEntry}
		showActions
		showEdit
		showDelete
		modalSize="xl"
	>
		{#snippet editor({ recordId, data, onChange, readonly }: DatatableEditorFormProps)}
			<Editor {data} {readonly} {onChange} {recordId} />
		{/snippet}
	</Datatable>
</Box>
