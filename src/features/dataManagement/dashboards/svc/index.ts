import type { CrudResult, PaginatedResult } from '@rkosafo/cai.components';

export interface Dashboards {
	id: number;
	name: string;
	active: boolean;
	descriptions: string;
	viewer: string;
}

export function readDashboards(
	page: number = 1,
	pageSize: number = 10,
	filter: any = {},
	order: any[] = []
): Promise<PaginatedResult<Dashboards>> {
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
							name: 'Dashboard 1',
							active: true,
							descriptions: '',
							viewer: 'dashboard'
						},
						{
							id: 2,
							name: 'Dashboard 2',
							active: true,
							descriptions: '',
							viewer: 'dashboard2'
						}
					]
				}
			});
		}, 1000);
	});
}

export function createDashboard(params: any): Promise<CrudResult<any>> {
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
export function updateDashboard(params: any): Promise<CrudResult<any>> {
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

export function deleteDashboard(id: any): Promise<CrudResult<any>> {
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
