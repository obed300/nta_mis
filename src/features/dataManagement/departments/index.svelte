<script lang="ts" module>
	const tableColumns: TableColumn[] = [
		{
			header: 'Name',
			plugins: {
				sort: { disable: true }
			},
			accessor: (row: any) => row.name
		},
		{
			header: 'Notes',
			plugins: {
				sort: { disable: true }
			},
			accessor: (row: any) => row.notes ?? 'N/A'
		}
	];

	function read(skip?: number, take?: number, defn?: TableFilter) {
		return readDepartments(skip, take);
	}

	function deleteEntry(params: any) {
		return deleteDepartment(params);
	}

	function updateEntry(params: any) {
		return updateDepartment(params);
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
	import { createDepartment, deleteDepartment, readDepartments, updateDepartment } from './svc';
	import Editor from './editor.svelte';
</script>

<Box bgWhite>
	<Datatable
		{tableColumns}
		{read}
		createEntry={createDepartment}
		{deleteEntry}
		{updateEntry}
		showActions
		showEdit
		showDelete
		modalSize="lg"
	>
		{#snippet editor({ recordId, data, onChange, readonly }: DatatableEditorFormProps)}
			<Editor {data} {readonly} {onChange} {recordId} />
		{/snippet}
	</Datatable>
</Box>
