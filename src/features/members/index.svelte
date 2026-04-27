<script lang="ts" module>
	interface User {}
	async function read(skip?: number, take?: number, defn?: TableFilter) {
		const search = defn?.search;
		let filterOptions = {} as MemberFilterInput;

		if (search) {
			filterOptions = {
				or: [{ name: { contains: search } }, { email: { contains: search } }]
			};
		}

		return readMembers(skip, take, filterOptions);
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
		{ header: 'Phone Number', accessor: 'phoneNumber' },
		{ header: 'Organization', accessor: 'organization' },
		{ header: 'Operational Area', accessor: 'operationalArea' },
		{ header: 'Category', accessor: 'category' },
		{ header: 'Product Material Category', accessor: 'productMaterialCategory' },
		{ header: 'Registration No.', accessor: 'redgNo' },
		{ header: 'Commencement Year', accessor: 'commencementYear' },
		{ header: 'Membership Declaration', accessor: 'membershipDeclaration' },
		{ header: 'Status', accessor: 'status' },
		{ header: 'Reason', accessor: 'reason' },
		{ header: 'Additional Information', accessor: 'additionalInformation' },

		{ header: 'Description', accessor: 'description' }
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
	import { readMembers } from './svc';
	import type { MemberFilterInput } from '$houdini';
</script>

<Box bgWhite>
	<Datatable
		updateHeading="Update User"
		addNewHeading="Add User"
		addButtonLabel="Add New User"
		tableColumns={columns}
		{read}
		showActions
		showAdd={false}
		showDelete
		showEdit
		modalSize="xl"
	>
		{#snippet editor({ recordId, data, onChange, readonly }: DatatableEditorFormProps)}
			<Editor {data} {readonly} {onChange} {recordId} />
		{/snippet}
	</Datatable>
</Box>
