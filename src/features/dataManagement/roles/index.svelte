<script lang="ts" module>
	const tableColumns: TableColumn[] = [
		{
			header: 'Name',
			id: 'name',
			accessor: (row: Roles) => row.name
		},
		{
			header: 'Notes',
			id: 'notes',
			accessor: (row: Roles) => row.notes
		},
		{
			header: 'Permissions',
			id: 'permissions',
			accessor: (row: Roles) => row?.permissions?.length,
			plugins: {
				sort: { disable: true }
			}
		}
	];

	function read(skip?: number, take?: number, defn?: TableFilter) {
		return readRoles(skip, take);
	}

	function deleteEntry(params: any) {
		return deleteRole(params);
	}

	function updateEntry(params: any) {
		return updateRole(params);
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
	import { createRole, deleteRole, readRoles, updateRole, type Roles } from './svc';
	import Editor from './editor.svelte';
</script>

<Box bgWhite>
	<Datatable
		{tableColumns}
		{read}
		createEntry={createRole}
		{deleteEntry}
		{updateEntry}
		showActions
		showEdit
		showDelete
		modalSize="2xl"
	>
		{#snippet editor({ recordId, data, onChange, readonly }: DatatableEditorFormProps)}
			<Editor {data} {readonly} {onChange} {recordId} />
		{/snippet}
	</Datatable>
</Box>
