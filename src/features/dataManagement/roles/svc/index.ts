import type { CrudResult, PaginatedResult } from '@rkosafo/cai.components';

export interface Roles {
	id: number;
	name: string;
	active: boolean;
	permissions: string[];
	notes: string;
	dashboards: number[];
	reports: number[];
}

export function readRoles(
	page: number = 1,
	pageSize: number = 10,
	filter: any = {},
	order: any[] = []
): Promise<PaginatedResult<Roles>> {
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
							id: 13,
							name: 'Risk and Compliance Officer',
							active: true,
							permissions: [
								'View Members',
								'View Transactions',
								'View Audit Trails',
								'View Reports',
								'View Transactions History'
							],
							notes: 'Have view-only access to all member data and all transactions',
							dashboards: [1, 2],
							reports: [17]
						}
					]
				}
			});
		}, 1000);
	});
}

export function createRole(params: any): Promise<CrudResult<any>> {
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
export function updateRole(params: any): Promise<CrudResult<any>> {
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

export function deleteRole(id: any): Promise<CrudResult<any>> {
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

export function readPermissions() {
	return {
		success: true,
		message: '',
		data: [
			'View Members',
			'View Transactions',
			'View Audit Trails',
			'View Reports',
			'View Transactions History'
		]
	};
}
