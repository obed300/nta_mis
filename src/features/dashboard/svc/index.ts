// import {
// 	EmployeesSummaryStore,
// 	ReadMyDashboardsStore,
// 	ValidationSummaryStore,
// 	WorkDoneByRegionStore
// } from '$houdini';
// import { showError } from '$lib/utils';
// import { gqlError, queryResult } from '$svc/shared';
// import type { CrudResult } from '@rkosafo/cai.components';

import { dashboardDataStore } from "$houdini";
import { showError } from "$lib/utils";
import type { CrudResult } from "@rkosafo/cai.components";

// // Types
// // Types for individual sections from API
// export interface AffordabilityItem {
// 	name: string; // e.g., "affordability"
// 	value: number;
// }

// export interface AverageSalaryItem {
// 	name: string; // e.g., "averageSalary"
// 	value: number;
// }

// export interface SalaryGrowthItem {
// 	name: string; // e.g., "salaryGrowth"
// 	value: number;
// }

// export interface DeductionBreakdownItem {
// 	name: string; // e.g., "Credit Card"
// 	value: number;
// }

// export interface DeductionsCountItem {
// 	name: string; // e.g., "totalDeductions"
// 	value: number;
// }

// export interface AffordabilityTrendItem {
// 	name: string; // e.g., "October"
// 	value: number;
// }

// export interface SalaryAndDeductionsOverTimeItem {
// 	parent: string; // e.g., "October"
// 	child: string; //
// 	value: number;
// }

// // Combined API response type
// export interface DashboardAPIData {
// 	affordability: AffordabilityItem[];
// 	averageSalary: AverageSalaryItem[];
// 	salaryGrowth: SalaryGrowthItem[];
// 	breakdownByDeduction: DeductionBreakdownItem[];
// 	deductionsCount: DeductionsCountItem[];
// 	affordabilityTrend: AffordabilityTrendItem[];
// 	salaryAndDeductionsOverTime: SalaryAndDeductionsOverTimeItem[];
// }

// export interface unitActivitiesOverTime {
// 	child: string;
// 	parent: string;
// 	value: number;
// }

// export interface ValidationStatus {
// 	name: string;
// 	value: number;
// }

// export interface DashboardData {
// 	validationStatusBreakdown: ValidationStatus[];
// 	unitActivitiesOverTime: unitActivitiesOverTime[];
// 	totalValidations: number;
// 	totalPendingValidations: number;
// 	totalPendingCertification: number;
// }

// function generateMonthsFromRange(start: string, end: string): string[] {
// 	const months = [];
// 	const startDate = new Date(start);
// 	const endDate = new Date(end);

// 	let current = new Date(startDate);
// 	current.setDate(1); // Start from first day of month

// 	while (current <= endDate) {
// 		months.push(current.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
// 		current.setMonth(current.getMonth() + 1);
// 	}

// 	return months;
// }

// export interface IUnit {
// 	id: number;
// 	name: string;
// 	processed: number;
// 	pending: number;
// 	authorizer: string;
// 	approver: string;
// }

// export async function readMyDashboards() {
// 	try {
// 		const ret = await new ReadMyDashboardsStore().fetch();
// 		return queryResult(ret, ret.data?.myDashboards);
// 	} catch (error) {
// 		return gqlError(error);
// 	}
// }

// export function getUnits(skip: number = 0, take: number = 10, filter: any = {}) {
// 	let units: IUnit[] = [
// 		{
// 			id: 1,
// 			name: 'Greater Accra Regional Office',
// 			processed: 320,
// 			pending: 45,
// 			authorizer: 'Kojo Mensah',
// 			approver: 'Ama Owusu'
// 		},
// 		{
// 			id: 2,
// 			name: 'Ashanti Regional Office',
// 			processed: 280,
// 			pending: 60,
// 			authorizer: 'Kwame Asante',
// 			approver: 'Abena Serwaa'
// 		},
// 		{
// 			id: 3,
// 			name: 'Western Regional Office',
// 			processed: 150,
// 			pending: 30,
// 			authorizer: 'Yaw Boateng',
// 			approver: 'Efua Bediako'
// 		},
// 		{
// 			id: 4,
// 			name: 'Eastern Regional Office',
// 			processed: 200,
// 			pending: 40,
// 			authorizer: 'Kojo Owusu',
// 			approver: 'Akosua Mensah'
// 		},
// 		{
// 			id: 5,
// 			name: 'Northern Regional Office',
// 			processed: 180,
// 			pending: 25,
// 			authorizer: 'Abdul Karim',
// 			approver: 'Hajia Mohammed'
// 		}
// 	];

// 	// Apply search filter
// 	if (filter?.search) {
// 		const s = filter.search.toLowerCase();
// 		units = units.filter((u) => u.name.toLowerCase().includes(s));
// 	}

// 	// Pagination
// 	const paged = units.slice(skip, skip + take);

// 	return Promise.resolve({
// 		success: true,
// 		message: '',
// 		data: {
// 			totalCount: units.length,
// 			pageInfo: { hasNextPage: skip + take < units.length },
// 			items: paged
// 		}
// 	});
// }

export async function fetchDashboardData(start: Date, end: Date): Promise<CrudResult<any>> {
	try {
		const dashboardStore = new dashboardDataStore();
		

		const dashboardResult = await dashboardStore.fetch({
			variables: { startDate: start, endDate: end }
		});

		

		if (dashboardResult.errors?.length) {
			const msg = dashboardResult.errors[0].message;
			showError(msg);
			return { success: false, message: msg, data: null };
		}

		

		return {
			success: true,
			message: '',
			data: {
				membersByRegion: dashboardResult.data?.membersByRegion ?? [],
                membershipShare: dashboardResult.data?.membershipShare ?? [],
                ntaMembersOverTime: dashboardResult.data?.ntaMembersOverTime ?? [],
                sesnetMembersOverTime: dashboardResult.data?.sesnetMembersOverTime ?? [],
                totalNTAMembers: dashboardResult.data?.totalNTAMembers ?? 0,
                totalSesnetMembers: dashboardResult.data?.totalSesnetMembers ?? 0,
                pendingApprovals: dashboardResult.data?.pendingApprovals ?? 0,
                rejectedApplications: dashboardResult.data?.rejectedApplications ?? 0,
				
			}
		};
	} catch (error: any) {
		const msg = error?.message ?? 'Failed to fetch dashboard data';
		showError(msg);

		return {
			success: false,
			message: msg,
			data: null
		};
	}
}
