import { MembersStore } from "../plugins/houdini-svelte/stores/Members";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query Members($skip: Int, $take: Int, $filter: MemberFilterInput, $order: [MemberSortInput!]) {\r\n\tmembers(skip: $skip, take: $take, where: $filter, order: $order) {\r\n\t\tpageInfo {\r\n\t\t\thasNextPage\r\n\t\t\thasPreviousPage\r\n\t\t}\r\n\t\ttotalCount\r\n\t\titems {\r\n\t\t\tadditionalInformation\r\n\t\t\taddress\r\n\t\t\tcategory\r\n\t\t\tcommencementYear\r\n\t\t\tcreatedBy\r\n\t\t\temployeeDetails\r\n\t\t\tghanaCardNumber\r\n\t\t\tcreatedOn\r\n\t\t\tdescription\r\n\t\t\temail\r\n\t\t\tid\r\n\t\t\tmembershipDeclaration\r\n\t\t\tname\r\n\t\t\toperationalArea\r\n\t\t\torganization\r\n\t\t\tphoneNumber\r\n\t\t\tproductMaterialCategory\r\n\t\t\treason\r\n\t\t\tredgNo\r\n\t\t\tregisteredBy\r\n\t\t\trevision\r\n\t\t\tstatus\r\n\t\t\tupdatedBy\r\n\t\t\tupdatedOn\r\n\t\t}\r\n\t}\r\n}\r\n"
): MembersStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;