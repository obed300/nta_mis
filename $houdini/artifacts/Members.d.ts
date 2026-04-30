import type { SortEnumType } from "$houdini/graphql/enums";
import type { JsonValueKind } from "$houdini/graphql/enums";
import { MembershipStatus } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";

export type Members = {
    readonly "input": Members$input;
    readonly "result": Members$result | undefined;
};

export type Members$result = {
    readonly members: {
        /**
         * Information to aid in pagination.
        */
        readonly pageInfo: {
            /**
             * Indicates whether more items exist following the set defined by the clients arguments.
            */
            readonly hasNextPage: boolean;
            /**
             * Indicates whether more items exist prior the set defined by the clients arguments.
            */
            readonly hasPreviousPage: boolean;
        };
        readonly totalCount: number;
        /**
         * A flattened list of the items.
        */
        readonly items: ({
            readonly additionalInformation: string | null;
            readonly address: {
                readonly rootElement: any;
            };
            readonly category: string | null;
            readonly commencementYear: string;
            readonly createdBy: string;
            readonly employeeDetails: {
                readonly rootElement: any;
            } | null;
            readonly ghanaCardNumber: string | null;
            readonly createdOn: Date;
            readonly description: string | null;
            readonly email: string;
            readonly id: number;
            readonly membershipDeclaration: {
                readonly rootElement: any;
            } | null;
            readonly name: string;
            readonly operationalArea: string;
            readonly organization: string;
            readonly phoneNumber: string;
            readonly productMaterialCategory: string | null;
            readonly reason: string | null;
            readonly redgNo: string;
            readonly registeredBy: {
                readonly rootElement: any;
            } | null;
            readonly revision: number;
            readonly status: ValueOf<typeof MembershipStatus>;
            readonly updatedBy: string;
            readonly updatedOn: Date | null;
        })[] | null;
    } | null;
};

type StringOperationFilterInput = {
    and?: (StringOperationFilterInput)[] | null | undefined;
    or?: (StringOperationFilterInput)[] | null | undefined;
    eq?: string | null | undefined;
    neq?: string | null | undefined;
    contains?: string | null | undefined;
    ncontains?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    nin?: (string | null | undefined)[] | null | undefined;
    startsWith?: string | null | undefined;
    nstartsWith?: string | null | undefined;
    endsWith?: string | null | undefined;
    nendsWith?: string | null | undefined;
};

type ListStringOperationFilterInput = {
    all?: StringOperationFilterInput | null | undefined;
    none?: StringOperationFilterInput | null | undefined;
    some?: StringOperationFilterInput | null | undefined;
    any?: boolean | null | undefined;
};

type JsonValueKindOperationFilterInput = {
    eq?: ValueOf<typeof JsonValueKind> | null | undefined;
    neq?: ValueOf<typeof JsonValueKind> | null | undefined;
    in?: (ValueOf<typeof JsonValueKind>)[] | null | undefined;
    nin?: (ValueOf<typeof JsonValueKind>)[] | null | undefined;
};

type JsonElementFilterInput = {
    and?: (JsonElementFilterInput)[] | null | undefined;
    or?: (JsonElementFilterInput)[] | null | undefined;
    valueKind?: JsonValueKindOperationFilterInput | null | undefined;
};

type JsonDocumentFilterInput = {
    and?: (JsonDocumentFilterInput)[] | null | undefined;
    or?: (JsonDocumentFilterInput)[] | null | undefined;
    rootElement?: JsonElementFilterInput | null | undefined;
};

type MembershipStatusOperationFilterInput = {
    eq?: ValueOf<typeof MembershipStatus> | null | undefined;
    neq?: ValueOf<typeof MembershipStatus> | null | undefined;
    in?: (ValueOf<typeof MembershipStatus>)[] | null | undefined;
    nin?: (ValueOf<typeof MembershipStatus>)[] | null | undefined;
};

type DateTimeOperationFilterInput = {
    eq?: Date | null | undefined;
    neq?: Date | null | undefined;
    in?: (Date | null | undefined)[] | null | undefined;
    nin?: (Date | null | undefined)[] | null | undefined;
    gt?: Date | null | undefined;
    ngt?: Date | null | undefined;
    gte?: Date | null | undefined;
    ngte?: Date | null | undefined;
    lt?: Date | null | undefined;
    nlt?: Date | null | undefined;
    lte?: Date | null | undefined;
    nlte?: Date | null | undefined;
};

type IntOperationFilterInput = {
    eq?: number | null | undefined;
    neq?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    nin?: (number | null | undefined)[] | null | undefined;
    gt?: number | null | undefined;
    ngt?: number | null | undefined;
    gte?: number | null | undefined;
    ngte?: number | null | undefined;
    lt?: number | null | undefined;
    nlt?: number | null | undefined;
    lte?: number | null | undefined;
    nlte?: number | null | undefined;
};

type LongOperationFilterInput = {
    eq?: number | null | undefined;
    neq?: number | null | undefined;
    in?: (number | null | undefined)[] | null | undefined;
    nin?: (number | null | undefined)[] | null | undefined;
    gt?: number | null | undefined;
    ngt?: number | null | undefined;
    gte?: number | null | undefined;
    ngte?: number | null | undefined;
    lt?: number | null | undefined;
    nlt?: number | null | undefined;
    lte?: number | null | undefined;
    nlte?: number | null | undefined;
};

type MemberFilterInput = {
    and?: (MemberFilterInput)[] | null | undefined;
    or?: (MemberFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    registerAs?: StringOperationFilterInput | null | undefined;
    username?: StringOperationFilterInput | null | undefined;
    password?: StringOperationFilterInput | null | undefined;
    password2?: StringOperationFilterInput | null | undefined;
    organization?: StringOperationFilterInput | null | undefined;
    scopeOfServices?: ListStringOperationFilterInput | null | undefined;
    phoneNumber?: StringOperationFilterInput | null | undefined;
    ghanaCardNumber?: StringOperationFilterInput | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    address?: JsonDocumentFilterInput | null | undefined;
    employeeDetails?: JsonDocumentFilterInput | null | undefined;
    operationalArea?: StringOperationFilterInput | null | undefined;
    commencementYear?: StringOperationFilterInput | null | undefined;
    redgNo?: StringOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    additionalInformation?: StringOperationFilterInput | null | undefined;
    productMaterialCategory?: StringOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    imageUrls?: ListStringOperationFilterInput | null | undefined;
    membershipDeclaration?: JsonDocumentFilterInput | null | undefined;
    registeredBy?: JsonDocumentFilterInput | null | undefined;
    status?: MembershipStatusOperationFilterInput | null | undefined;
    reason?: StringOperationFilterInput | null | undefined;
    statusUpdatedAt?: DateTimeOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type JsonDocumentSortInput = {
    rootElement?: ValueOf<typeof SortEnumType> | null | undefined;
};

type MemberSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    registerAs?: ValueOf<typeof SortEnumType> | null | undefined;
    username?: ValueOf<typeof SortEnumType> | null | undefined;
    password?: ValueOf<typeof SortEnumType> | null | undefined;
    password2?: ValueOf<typeof SortEnumType> | null | undefined;
    organization?: ValueOf<typeof SortEnumType> | null | undefined;
    phoneNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    ghanaCardNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    address?: JsonDocumentSortInput | null | undefined;
    employeeDetails?: JsonDocumentSortInput | null | undefined;
    operationalArea?: ValueOf<typeof SortEnumType> | null | undefined;
    commencementYear?: ValueOf<typeof SortEnumType> | null | undefined;
    redgNo?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    additionalInformation?: ValueOf<typeof SortEnumType> | null | undefined;
    productMaterialCategory?: ValueOf<typeof SortEnumType> | null | undefined;
    description?: ValueOf<typeof SortEnumType> | null | undefined;
    membershipDeclaration?: JsonDocumentSortInput | null | undefined;
    registeredBy?: JsonDocumentSortInput | null | undefined;
    status?: ValueOf<typeof SortEnumType> | null | undefined;
    reason?: ValueOf<typeof SortEnumType> | null | undefined;
    statusUpdatedAt?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

export type Members$input = {
    skip?: number | null | undefined;
    take?: number | null | undefined;
    filter?: MemberFilterInput | null | undefined;
    order?: (MemberSortInput)[] | null | undefined;
};

export type Members$artifact = {
    "name": "Members";
    "kind": "HoudiniQuery";
    "hash": "b77a7793ed2ca3e217d9088aa4017343076a59cc0bc395e6c2b59d1db6871001";
    "raw": `query Members($skip: Int, $take: Int, $filter: MemberFilterInput, $order: [MemberSortInput!]) {
  members(skip: $skip, take: $take, where: $filter, order: $order) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
    items {
      additionalInformation
      address {
        rootElement
      }
      category
      commencementYear
      createdBy
      employeeDetails {
        rootElement
      }
      ghanaCardNumber
      createdOn
      description
      email
      id
      membershipDeclaration {
        rootElement
      }
      name
      operationalArea
      organization
      phoneNumber
      productMaterialCategory
      reason
      redgNo
      registeredBy {
        rootElement
      }
      revision
      status
      updatedBy
      updatedOn
    }
  }
}
`;
    "rootType": "Query";
    "stripVariables": [];
    "selection": {
        "fields": {
            "members": {
                "type": "MembersCollectionSegment";
                "keyRaw": "members(order: $order, skip: $skip, take: $take, where: $filter)";
                "nullable": true;
                "selection": {
                    "fields": {
                        "pageInfo": {
                            "type": "CollectionSegmentInfo";
                            "keyRaw": "pageInfo";
                            "selection": {
                                "fields": {
                                    "hasNextPage": {
                                        "type": "Boolean";
                                        "keyRaw": "hasNextPage";
                                        "visible": true;
                                    };
                                    "hasPreviousPage": {
                                        "type": "Boolean";
                                        "keyRaw": "hasPreviousPage";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "totalCount": {
                            "type": "Int";
                            "keyRaw": "totalCount";
                            "visible": true;
                        };
                        "items": {
                            "type": "Member";
                            "keyRaw": "items";
                            "nullable": true;
                            "selection": {
                                "fields": {
                                    "additionalInformation": {
                                        "type": "String";
                                        "keyRaw": "additionalInformation";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "address": {
                                        "type": "JsonDocument";
                                        "keyRaw": "address";
                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON";
                                                    "keyRaw": "rootElement";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "category": {
                                        "type": "String";
                                        "keyRaw": "category";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "commencementYear": {
                                        "type": "String";
                                        "keyRaw": "commencementYear";
                                        "visible": true;
                                    };
                                    "createdBy": {
                                        "type": "String";
                                        "keyRaw": "createdBy";
                                        "visible": true;
                                    };
                                    "employeeDetails": {
                                        "type": "JsonDocument";
                                        "keyRaw": "employeeDetails";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON";
                                                    "keyRaw": "rootElement";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "ghanaCardNumber": {
                                        "type": "String";
                                        "keyRaw": "ghanaCardNumber";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "createdOn": {
                                        "type": "DateTime";
                                        "keyRaw": "createdOn";
                                        "visible": true;
                                    };
                                    "description": {
                                        "type": "String";
                                        "keyRaw": "description";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "email": {
                                        "type": "String";
                                        "keyRaw": "email";
                                        "visible": true;
                                    };
                                    "id": {
                                        "type": "Long";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                    "membershipDeclaration": {
                                        "type": "JsonDocument";
                                        "keyRaw": "membershipDeclaration";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON";
                                                    "keyRaw": "rootElement";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "name": {
                                        "type": "String";
                                        "keyRaw": "name";
                                        "visible": true;
                                    };
                                    "operationalArea": {
                                        "type": "String";
                                        "keyRaw": "operationalArea";
                                        "visible": true;
                                    };
                                    "organization": {
                                        "type": "String";
                                        "keyRaw": "organization";
                                        "visible": true;
                                    };
                                    "phoneNumber": {
                                        "type": "String";
                                        "keyRaw": "phoneNumber";
                                        "visible": true;
                                    };
                                    "productMaterialCategory": {
                                        "type": "String";
                                        "keyRaw": "productMaterialCategory";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "reason": {
                                        "type": "String";
                                        "keyRaw": "reason";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "redgNo": {
                                        "type": "String";
                                        "keyRaw": "redgNo";
                                        "visible": true;
                                    };
                                    "registeredBy": {
                                        "type": "JsonDocument";
                                        "keyRaw": "registeredBy";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON";
                                                    "keyRaw": "rootElement";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "revision": {
                                        "type": "Int";
                                        "keyRaw": "revision";
                                        "visible": true;
                                    };
                                    "status": {
                                        "type": "MembershipStatus";
                                        "keyRaw": "status";
                                        "visible": true;
                                    };
                                    "updatedBy": {
                                        "type": "String";
                                        "keyRaw": "updatedBy";
                                        "visible": true;
                                    };
                                    "updatedOn": {
                                        "type": "DateTime";
                                        "keyRaw": "updatedOn";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "input": {
        "fields": {
            "skip": "Int";
            "take": "Int";
            "filter": "MemberFilterInput";
            "order": "MemberSortInput";
        };
        "types": {
            "StringOperationFilterInput": {
                "and": "StringOperationFilterInput";
                "or": "StringOperationFilterInput";
                "eq": "String";
                "neq": "String";
                "contains": "String";
                "ncontains": "String";
                "in": "String";
                "nin": "String";
                "startsWith": "String";
                "nstartsWith": "String";
                "endsWith": "String";
                "nendsWith": "String";
            };
            "ListStringOperationFilterInput": {
                "all": "StringOperationFilterInput";
                "none": "StringOperationFilterInput";
                "some": "StringOperationFilterInput";
                "any": "Boolean";
            };
            "JsonValueKindOperationFilterInput": {
                "eq": "JsonValueKind";
                "neq": "JsonValueKind";
                "in": "JsonValueKind";
                "nin": "JsonValueKind";
            };
            "JsonElementFilterInput": {
                "and": "JsonElementFilterInput";
                "or": "JsonElementFilterInput";
                "valueKind": "JsonValueKindOperationFilterInput";
            };
            "JsonDocumentFilterInput": {
                "and": "JsonDocumentFilterInput";
                "or": "JsonDocumentFilterInput";
                "rootElement": "JsonElementFilterInput";
            };
            "MembershipStatusOperationFilterInput": {
                "eq": "MembershipStatus";
                "neq": "MembershipStatus";
                "in": "MembershipStatus";
                "nin": "MembershipStatus";
            };
            "DateTimeOperationFilterInput": {
                "eq": "DateTime";
                "neq": "DateTime";
                "in": "DateTime";
                "nin": "DateTime";
                "gt": "DateTime";
                "ngt": "DateTime";
                "gte": "DateTime";
                "ngte": "DateTime";
                "lt": "DateTime";
                "nlt": "DateTime";
                "lte": "DateTime";
                "nlte": "DateTime";
            };
            "IntOperationFilterInput": {
                "eq": "Int";
                "neq": "Int";
                "in": "Int";
                "nin": "Int";
                "gt": "Int";
                "ngt": "Int";
                "gte": "Int";
                "ngte": "Int";
                "lt": "Int";
                "nlt": "Int";
                "lte": "Int";
                "nlte": "Int";
            };
            "LongOperationFilterInput": {
                "eq": "Long";
                "neq": "Long";
                "in": "Long";
                "nin": "Long";
                "gt": "Long";
                "ngt": "Long";
                "gte": "Long";
                "ngte": "Long";
                "lt": "Long";
                "nlt": "Long";
                "lte": "Long";
                "nlte": "Long";
            };
            "MemberFilterInput": {
                "and": "MemberFilterInput";
                "or": "MemberFilterInput";
                "name": "StringOperationFilterInput";
                "registerAs": "StringOperationFilterInput";
                "username": "StringOperationFilterInput";
                "password": "StringOperationFilterInput";
                "password2": "StringOperationFilterInput";
                "organization": "StringOperationFilterInput";
                "scopeOfServices": "ListStringOperationFilterInput";
                "phoneNumber": "StringOperationFilterInput";
                "ghanaCardNumber": "StringOperationFilterInput";
                "email": "StringOperationFilterInput";
                "address": "JsonDocumentFilterInput";
                "employeeDetails": "JsonDocumentFilterInput";
                "operationalArea": "StringOperationFilterInput";
                "commencementYear": "StringOperationFilterInput";
                "redgNo": "StringOperationFilterInput";
                "category": "StringOperationFilterInput";
                "additionalInformation": "StringOperationFilterInput";
                "productMaterialCategory": "StringOperationFilterInput";
                "description": "StringOperationFilterInput";
                "imageUrls": "ListStringOperationFilterInput";
                "membershipDeclaration": "JsonDocumentFilterInput";
                "registeredBy": "JsonDocumentFilterInput";
                "status": "MembershipStatusOperationFilterInput";
                "reason": "StringOperationFilterInput";
                "statusUpdatedAt": "DateTimeOperationFilterInput";
                "createdBy": "StringOperationFilterInput";
                "createdOn": "DateTimeOperationFilterInput";
                "updatedBy": "StringOperationFilterInput";
                "updatedOn": "DateTimeOperationFilterInput";
                "revision": "IntOperationFilterInput";
                "id": "LongOperationFilterInput";
            };
            "JsonDocumentSortInput": {
                "rootElement": "SortEnumType";
            };
            "MemberSortInput": {
                "name": "SortEnumType";
                "registerAs": "SortEnumType";
                "username": "SortEnumType";
                "password": "SortEnumType";
                "password2": "SortEnumType";
                "organization": "SortEnumType";
                "phoneNumber": "SortEnumType";
                "ghanaCardNumber": "SortEnumType";
                "email": "SortEnumType";
                "address": "JsonDocumentSortInput";
                "employeeDetails": "JsonDocumentSortInput";
                "operationalArea": "SortEnumType";
                "commencementYear": "SortEnumType";
                "redgNo": "SortEnumType";
                "category": "SortEnumType";
                "additionalInformation": "SortEnumType";
                "productMaterialCategory": "SortEnumType";
                "description": "SortEnumType";
                "membershipDeclaration": "JsonDocumentSortInput";
                "registeredBy": "JsonDocumentSortInput";
                "status": "SortEnumType";
                "reason": "SortEnumType";
                "statusUpdatedAt": "SortEnumType";
                "createdBy": "SortEnumType";
                "createdOn": "SortEnumType";
                "updatedBy": "SortEnumType";
                "updatedOn": "SortEnumType";
                "revision": "SortEnumType";
                "id": "SortEnumType";
            };
        };
        "defaults": {};
        "runtimeScalars": {};
    };
    "policy": "NetworkOnly";
    "partial": false;
};