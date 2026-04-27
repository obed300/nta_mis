import type { CrudResult, PaginatedResult } from '@rkosafo/cai.components';

export interface Departments {
	id: number;
	name: string;
	isActive: boolean;
	notes: string;
}

export function readDepartments(
	page: number = 1,
	pageSize: number = 10,
	filter: any = {},
	order: any[] = []
): Promise<PaginatedResult<Departments>> {
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
							name: 'Department 1',
							isActive: true,
							notes: ''
						},
						{
							id: 2,
							name: 'Department 2',
							isActive: true,
							notes: ''
						}
					]
				}
			});
		}, 1000);
	});
}

export function createDepartment(params: any): Promise<CrudResult<any>> {
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
export function updateDepartment(params: any): Promise<CrudResult<any>> {
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

export function deleteDepartment(id: any): Promise<CrudResult<any>> {
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
