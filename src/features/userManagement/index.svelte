<script lang="ts" module>
	interface User {}
	function read(skip?: number, take?: number, defn?: TableFilter): Promise<PaginatedResult<User>> {
		console.log(defn);

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					success: true,
					message: '',
					data: {
						pageInfo: { hasNextPage: false, hasPreviousPage: false },
						totalCount: 3,
						items: [
							{
								id: 1,
								name: 'Alice',
								email: 'alice@example.com',
								role: 'Admin',
								status: 'Active',
								dob: '1990-05-12'
							},
							{
								id: 2,
								name: 'Bob',
								email: 'bob@example.com',
								role: 'User',
								status: 'Inactive',
								dob: '1988-11-23'
							},
							{
								id: 3,
								name: 'Charlie',
								email: 'charlie@example.com',
								role: 'User',
								status: 'Active',
								dob: '1995-07-04'
							}
						]
					}
				});
			}, 1000);
		});
	}

	function create(params: any): Promise<CrudResult<any>> {
		console.log({ params });
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					success: true,
					message: 'Successfully created record'
				});
			}, 700);
		});
	}
	function update(params: any): Promise<CrudResult<any>> {
		console.log({ params });
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					success: true,
					message: 'Successfully updated record'
				});
			}, 700);
		});
	}

	function doDelete(id: any): Promise<CrudResult<any>> {
		console.log({ id });
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					success: true,
					message: 'Successfully deleted record'
				});
			}, 700);
		});
	}

	const columns: TableColumn[] = [
		{ header: 'ID', accessor: 'id' },
		{ header: 'Name', accessor: 'name' },
		{ header: 'Email', accessor: 'email' },
		{ header: 'Role', accessor: 'role' },
		{ header: 'Status', accessor: 'status' }
	];
</script>

<script lang="ts">
	import {
		Datatable,
		Box,
		type PaginatedResult,
		type TableFilter,
		type DatatableEditorFormProps,
		type CrudResult,
		type TableColumn
	} from '@rkosafo/cai.components';
	import Editor from './editor.svelte';
</script>

<Box bgWhite>
	<Datatable
		updateHeading="Update User"
		addNewHeading="Add User"
		addButtonLabel="Add New User"
		tableColumns={columns}
		{read}
		createEntry={create}
		updateEntry={update}
		deleteEntry={doDelete}
		showActions
		showDelete
		showEdit
		modalSize="xl"
	>
		{#snippet editor({ recordId, data, onChange, readonly }: DatatableEditorFormProps)}
			<Editor {data} {readonly} {onChange} {recordId} />
		{/snippet}
	</Datatable>
</Box>
