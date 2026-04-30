import { MembersStore, UpdateMemberStatusStore, type MemberFilterInput, type MemberSortInput, type UpdateMemberStatusInput } from '$houdini';
import { callResult, getPageInfo, gqlError, queryResult } from '$lib/shared';

export async function readMembers(
	page: number = 1,
	pageSize: number = 10,
	filter: MemberFilterInput = {},
	order: MemberSortInput[] = [{ updatedOn: 'DESC' }]
) {
	try {
		const ret = await new MembersStore().fetch({
			variables: { ...getPageInfo(page, pageSize), filter: filter, order }
		});
		return queryResult(ret, ret.data?.members);
	} catch (error) {
		return gqlError(error);
	}
}

export async function readMembersFilter(
	page: number = 1,
	pageSize: number = 10,
	memberId?: number | null,
	filter: MemberFilterInput = {},
	order: MemberSortInput[] = [{ updatedOn: 'DESC' }]
) {
	try {
		// Clone the filter to avoid mutating the original object
		const finalFilter: MemberFilterInput = { ...filter };

		// If parentId is provided, add it to the filter using the 'eq' operator
		if (memberId) {
			finalFilter.id = { eq: memberId };
		}

		const ret = await new MembersStore().fetch({
			variables: {
				...getPageInfo(page, pageSize),
				filter: finalFilter,
				order
			}
		});
		return queryResult(ret, ret.data?.members);
	} catch (error) {
		return gqlError(error);
	}
}

export async function updateMemberStatus(input: UpdateMemberStatusInput) {
	try {
		const ret = await new UpdateMemberStatusStore().mutate({ input });
		return callResult(ret, ret.data?.updateMemberStatus.callResult as any);
	} catch (error) {
		return gqlError(error);
	}
}