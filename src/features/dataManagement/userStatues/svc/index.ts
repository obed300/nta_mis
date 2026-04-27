import type { CrudResult, PaginatedResult } from '@rkosafo/cai.components';

export interface UserStatuses {
	id: number;
	name: string;
	isActive: boolean;
	notes: string;
}

export function readUserStatuses(
	page: number = 1,
	pageSize: number = 10,
	filter: any = {},
	order: any[] = []
): Promise<PaginatedResult<UserStatuses>> {
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
							name: 'Active',
							isActive: true,
							notes: ''
						},
						{
							id: 2,
							name: 'Suspended',
							isActive: true,
							notes: ''
						}
					]
				}
			});
		}, 1000);
	});
}

export function createUserStatus(params: any): Promise<CrudResult<any>> {
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
export function updateUserStatus(params: any): Promise<CrudResult<any>> {
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

export function deleteUserStatus(id: any): Promise<CrudResult<any>> {
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
