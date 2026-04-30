import { dashboardDataStore } from "../plugins/houdini-svelte/stores/dashboardData";
import { MembersStore } from "../plugins/houdini-svelte/stores/Members";
import { UpdateMemberStatusStore } from "../plugins/houdini-svelte/stores/UpdateMemberStatus";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query dashboardData($startDate: DateTime!, $endDate: DateTime!) {\n\t\n\n\n    membersByRegion(startDate: $startDate, endDate: $endDate) {\n\t\tchild\n        parent\n\t\tvalue\n\t}\n\n    membershipShare(startDate: $startDate, endDate: $endDate) {\n\t\tname\n\t\tvalue\n\t}\n\n    ntaMembersOverTime(startDate: $startDate, endDate: $endDate) {\n\t\tchild\n        parent\n\t\tvalue\n\t}\n\n    sesnetMembersOverTime(startDate: $startDate, endDate: $endDate) {\n\t\tchild\n        parent\n\t\tvalue\n\t}\n\ttotalNTAMembers(startDate: $startDate, endDate: $endDate)\n    totalSesnetMembers(startDate: $startDate, endDate: $endDate)\n\tpendingApprovals(startDate: $startDate, endDate: $endDate)\n\trejectedApplications(startDate: $startDate, endDate: $endDate)\n\t\n}\n"
): dashboardDataStore;

export function graphql(
    str: "query Members($skip: Int, $take: Int, $filter: MemberFilterInput, $order: [MemberSortInput!]) {\n\tmembers(skip: $skip, take: $take, where: $filter, order: $order) {\n\t\tpageInfo {\n\t\t\thasNextPage\n\t\t\thasPreviousPage\n\t\t}\n\t\ttotalCount\n\t\titems {\n\t\t\tadditionalInformation\n\t\t\taddress {\n\t\t\t\trootElement\n\t\t\t}\n\t\t\tcategory\n\t\t\tcommencementYear\n\t\t\tcreatedBy\n\t\t\temployeeDetails {\n\t\t\t\trootElement\n\t\t\t}\n\t\t\tghanaCardNumber\n\t\t\tcreatedOn\n\t\t\tdescription\n\t\t\temail\n\t\t\tid\n\t\t\tmembershipDeclaration {\n\t\t\t\trootElement\n\t\t\t}\n\n\t\t\tname\n\t\t\toperationalArea\n\t\t\torganization\n\t\t\tphoneNumber\n\t\t\tproductMaterialCategory\n\t\t\treason\n\t\t\tredgNo\n\t\t\tregisteredBy {\n\t\t\t\trootElement\n\t\t\t}\n\t\t\trevision\n\t\t\tstatus\n\t\t\tupdatedBy\n\t\t\tupdatedOn\n\t\t}\n\t}\n}\n"
): MembersStore;

export function graphql(
    str: "mutation UpdateMemberStatus($input: UpdateMemberStatusInput) {\n\tupdateMemberStatus(input: $input) {\n\t\tcallResult {\n\t\t\tsuccess\n\t\t\tmessage\n\t\t\tcode\n\t\t}\n\t}\n}"
): UpdateMemberStatusStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;