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
		return readUserStatuses(skip, take);
	}

	function deleteEntry(params: any) {
		return deleteUserStatus(params);
	}

	function updateEntry(params: any) {
		return updateUserStatus(params);
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
	import { createUserStatus, deleteUserStatus, readUserStatuses, updateUserStatus } from './svc';
	import Editor from './editor.svelte';
</script>

<Box bgWhite>
	<Datatable
		{tableColumns}
		{read}
		createEntry={createUserStatus}
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
