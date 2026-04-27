import type { CrudResult, PaginatedResult } from '@rkosafo/cai.components';

export interface Reports {
	id: number;
	name: string;
	description: string;
	formDefinition: string;
	active: boolean;
	category: string;
	renderer: string;
	parameters: string;
}

export function readReports(
	active: boolean,
	page: number = 1,
	pageSize: number = 10,
	filter: any = {},
	order: any[] = []
): Promise<PaginatedResult<Reports>> {
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
							id: 17,
							name: 'Enquiry Resolution',
							description: 'Enquiry Resolution Report by count',
							formDefinition:
								'[{"type":"vstack","props":{"classes":"flex flex-col gap-4"},"children":[{"type":"grid","props":{"classes":"grid grid-cols-1 md:grid-cols-2 gap-4"},"children":[{"type":"datepicker","props":{"name":"requestStartDate","label":"Request Start Date","type":null},"children":[]},{"type":"datepicker","props":{"name":"requestEndDate","label":"Request End Date","type":null},"children":[]}]},{"type":"grid","props":{"classes":"grid grid-cols-1 md:grid-cols-2 gap-4"},"children":[{"type":"datepicker","props":{"name":"updateStartDate","label":"Update Start Date","type":null},"children":[]},{"type":"datepicker","props":{"name":"updateEndDate","label":"Update End Date","type":null},"children":[]}]}]}]',
							parameters:
								'[{"name":"requestStartDate","type":"System.DateTime"},{"name":"requestEndDate","type":"System.DateTime"},{"name":"updateStartDate","type":"System.DateTime"},{"name":"updateEndDate","type":"System.DateTime"}]',
							active: true,
							category: 'Marketing',
							renderer: 'DESIGNED_BASED'
						}
					]
				}
			});
		}, 1000);
	});
}

export function createReport(params: any): Promise<CrudResult<any>> {
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
export function updateReport(params: any): Promise<CrudResult<any>> {
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

export function deleteReport(id: any): Promise<CrudResult<any>> {
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
