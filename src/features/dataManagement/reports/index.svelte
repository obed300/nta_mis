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
			header: 'Description',
			accessor: (row: any) => row.description || '-',
			plugins: {
				sort: { disable: true }
			}
		},
		{
			header: 'Category',
			accessor: (row: any) => row.category || '-',
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
		return readReports(true,skip, take);
	}

	function deleteEntry(params: any) {
		return deleteReport(params);
	}

	function updateEntry(params: any) {
		return updateReport(params);
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
	import { createReport, deleteReport, readReports, updateReport } from './svc';
	import Editor from './editor.svelte';
</script>

<Box bgWhite>
	<Datatable
		{tableColumns}
		{read}
		createEntry={createReport}
		{deleteEntry}
		{updateEntry}
		showActions
		showEdit
		showDelete
		modalSize="3xl"
	>
		{#snippet editor({ recordId, data, onChange, readonly }: DatatableEditorFormProps)}
			<Editor {data} {readonly} {onChange} {recordId} />
		{/snippet}
	</Datatable>
</Box>
