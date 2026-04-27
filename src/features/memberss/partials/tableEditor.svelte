<script lang="ts">
	import { readMembers } from '$features/members/svc';
	import type { MemberFilterInput } from '$houdini';

	import {
		Datatable,
		Box,
		type TableColumn,
		type TableActionList,
		type CrudResult,
		type TableFilter,
		refetchDatatable
	} from '@rkosafo/cai.components';

	let { onTabAdd } = $props();
	let refreshKey = $state(0);

	// 1. Reactive Columns
	const columns: TableColumn[] = [
		{ header: 'ID', accessor: 'id' },
		{ header: 'Name', accessor: 'name' },
		{ header: 'Email', accessor: 'email' },
		{ header: 'Phone Number', accessor: 'phoneNumber' },
		{ header: 'Organization', accessor: 'organization' },
		{ header: 'Operational Area', accessor: 'operationalArea' },
		// { header: 'Category', accessor: 'category' },
		// { header: 'Product Material Category', accessor: 'productMaterialCategory' },
		{ header: 'Registration No.', accessor: 'redgNo' },
		{ header: 'Commencement Year', accessor: 'commencementYear' },
		// { header: 'Membership Declaration', accessor: 'membershipDeclaration' },
		{ header: 'Status', accessor: 'status' }
		// { header: 'Reason', accessor: 'reason' },
		// { header: 'Additional Information', accessor: 'additionalInformation' },

		// { header: 'Description', accessor: 'description' }
	];

	// 2. Reactive Actions

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

	function onActionClicked({ name, row }: { name: string; row: any }) {
		console.log('Action clicked', name, row);
	}

	function handleRowClicked(val: any) {
		if (onTabAdd) onTabAdd(val);
	}
</script>

<Box bgWhite shadow otherClasses="h-full overflow-y-hidden">
	{#key refreshKey}
		<Datatable
			tableColumns={columns}
			{read}
			showActions={false}
			showDelete
			{onActionClicked}
			rowClickable
			onRowClicked={handleRowClicked}
			showAdd={false}
			showEdit={false}
			showModalButtons={false}
			bgWhite
		/>
	{/key}
</Box>
