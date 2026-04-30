export default {
    "name": "Members",
    "kind": "HoudiniQuery",
    "hash": "b77a7793ed2ca3e217d9088aa4017343076a59cc0bc395e6c2b59d1db6871001",

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
`,

    "rootType": "Query",
    "stripVariables": [],

    "selection": {
        "fields": {
            "members": {
                "type": "MembersCollectionSegment",
                "keyRaw": "members(order: $order, skip: $skip, take: $take, where: $filter)",
                "nullable": true,

                "selection": {
                    "fields": {
                        "pageInfo": {
                            "type": "CollectionSegmentInfo",
                            "keyRaw": "pageInfo",

                            "selection": {
                                "fields": {
                                    "hasNextPage": {
                                        "type": "Boolean",
                                        "keyRaw": "hasNextPage",
                                        "visible": true
                                    },

                                    "hasPreviousPage": {
                                        "type": "Boolean",
                                        "keyRaw": "hasPreviousPage",
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        },

                        "totalCount": {
                            "type": "Int",
                            "keyRaw": "totalCount",
                            "visible": true
                        },

                        "items": {
                            "type": "Member",
                            "keyRaw": "items",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "additionalInformation": {
                                        "type": "String",
                                        "keyRaw": "additionalInformation",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "address": {
                                        "type": "JsonDocument",
                                        "keyRaw": "address",

                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON",
                                                    "keyRaw": "rootElement",
                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "category": {
                                        "type": "String",
                                        "keyRaw": "category",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "commencementYear": {
                                        "type": "String",
                                        "keyRaw": "commencementYear",
                                        "visible": true
                                    },

                                    "createdBy": {
                                        "type": "String",
                                        "keyRaw": "createdBy",
                                        "visible": true
                                    },

                                    "employeeDetails": {
                                        "type": "JsonDocument",
                                        "keyRaw": "employeeDetails",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON",
                                                    "keyRaw": "rootElement",
                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "ghanaCardNumber": {
                                        "type": "String",
                                        "keyRaw": "ghanaCardNumber",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "createdOn": {
                                        "type": "DateTime",
                                        "keyRaw": "createdOn",
                                        "visible": true
                                    },

                                    "description": {
                                        "type": "String",
                                        "keyRaw": "description",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "email": {
                                        "type": "String",
                                        "keyRaw": "email",
                                        "visible": true
                                    },

                                    "id": {
                                        "type": "Long",
                                        "keyRaw": "id",
                                        "visible": true
                                    },

                                    "membershipDeclaration": {
                                        "type": "JsonDocument",
                                        "keyRaw": "membershipDeclaration",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON",
                                                    "keyRaw": "rootElement",
                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "name": {
                                        "type": "String",
                                        "keyRaw": "name",
                                        "visible": true
                                    },

                                    "operationalArea": {
                                        "type": "String",
                                        "keyRaw": "operationalArea",
                                        "visible": true
                                    },

                                    "organization": {
                                        "type": "String",
                                        "keyRaw": "organization",
                                        "visible": true
                                    },

                                    "phoneNumber": {
                                        "type": "String",
                                        "keyRaw": "phoneNumber",
                                        "visible": true
                                    },

                                    "productMaterialCategory": {
                                        "type": "String",
                                        "keyRaw": "productMaterialCategory",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "reason": {
                                        "type": "String",
                                        "keyRaw": "reason",
                                        "nullable": true,
                                        "visible": true
                                    },

                                    "redgNo": {
                                        "type": "String",
                                        "keyRaw": "redgNo",
                                        "visible": true
                                    },

                                    "registeredBy": {
                                        "type": "JsonDocument",
                                        "keyRaw": "registeredBy",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "rootElement": {
                                                    "type": "JSON",
                                                    "keyRaw": "rootElement",
                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "revision": {
                                        "type": "Int",
                                        "keyRaw": "revision",
                                        "visible": true
                                    },

                                    "status": {
                                        "type": "MembershipStatus",
                                        "keyRaw": "status",
                                        "visible": true
                                    },

                                    "updatedBy": {
                                        "type": "String",
                                        "keyRaw": "updatedBy",
                                        "visible": true
                                    },

                                    "updatedOn": {
                                        "type": "DateTime",
                                        "keyRaw": "updatedOn",
                                        "nullable": true,
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        }
                    }
                },

                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "input": {
        "fields": {
            "skip": "Int",
            "take": "Int",
            "filter": "MemberFilterInput",
            "order": "MemberSortInput"
        },

        "types": {
            "StringOperationFilterInput": {
                "and": "StringOperationFilterInput",
                "or": "StringOperationFilterInput",
                "eq": "String",
                "neq": "String",
                "contains": "String",
                "ncontains": "String",
                "in": "String",
                "nin": "String",
                "startsWith": "String",
                "nstartsWith": "String",
                "endsWith": "String",
                "nendsWith": "String"
            },

            "ListStringOperationFilterInput": {
                "all": "StringOperationFilterInput",
                "none": "StringOperationFilterInput",
                "some": "StringOperationFilterInput",
                "any": "Boolean"
            },

            "JsonValueKindOperationFilterInput": {
                "eq": "JsonValueKind",
                "neq": "JsonValueKind",
                "in": "JsonValueKind",
                "nin": "JsonValueKind"
            },

            "JsonElementFilterInput": {
                "and": "JsonElementFilterInput",
                "or": "JsonElementFilterInput",
                "valueKind": "JsonValueKindOperationFilterInput"
            },

            "JsonDocumentFilterInput": {
                "and": "JsonDocumentFilterInput",
                "or": "JsonDocumentFilterInput",
                "rootElement": "JsonElementFilterInput"
            },

            "MembershipStatusOperationFilterInput": {
                "eq": "MembershipStatus",
                "neq": "MembershipStatus",
                "in": "MembershipStatus",
                "nin": "MembershipStatus"
            },

            "DateTimeOperationFilterInput": {
                "eq": "DateTime",
                "neq": "DateTime",
                "in": "DateTime",
                "nin": "DateTime",
                "gt": "DateTime",
                "ngt": "DateTime",
                "gte": "DateTime",
                "ngte": "DateTime",
                "lt": "DateTime",
                "nlt": "DateTime",
                "lte": "DateTime",
                "nlte": "DateTime"
            },

            "IntOperationFilterInput": {
                "eq": "Int",
                "neq": "Int",
                "in": "Int",
                "nin": "Int",
                "gt": "Int",
                "ngt": "Int",
                "gte": "Int",
                "ngte": "Int",
                "lt": "Int",
                "nlt": "Int",
                "lte": "Int",
                "nlte": "Int"
            },

            "LongOperationFilterInput": {
                "eq": "Long",
                "neq": "Long",
                "in": "Long",
                "nin": "Long",
                "gt": "Long",
                "ngt": "Long",
                "gte": "Long",
                "ngte": "Long",
                "lt": "Long",
                "nlt": "Long",
                "lte": "Long",
                "nlte": "Long"
            },

            "MemberFilterInput": {
                "and": "MemberFilterInput",
                "or": "MemberFilterInput",
                "name": "StringOperationFilterInput",
                "registerAs": "StringOperationFilterInput",
                "username": "StringOperationFilterInput",
                "password": "StringOperationFilterInput",
                "password2": "StringOperationFilterInput",
                "organization": "StringOperationFilterInput",
                "scopeOfServices": "ListStringOperationFilterInput",
                "phoneNumber": "StringOperationFilterInput",
                "ghanaCardNumber": "StringOperationFilterInput",
                "email": "StringOperationFilterInput",
                "address": "JsonDocumentFilterInput",
                "employeeDetails": "JsonDocumentFilterInput",
                "operationalArea": "StringOperationFilterInput",
                "commencementYear": "StringOperationFilterInput",
                "redgNo": "StringOperationFilterInput",
                "category": "StringOperationFilterInput",
                "additionalInformation": "StringOperationFilterInput",
                "productMaterialCategory": "StringOperationFilterInput",
                "description": "StringOperationFilterInput",
                "imageUrls": "ListStringOperationFilterInput",
                "membershipDeclaration": "JsonDocumentFilterInput",
                "registeredBy": "JsonDocumentFilterInput",
                "status": "MembershipStatusOperationFilterInput",
                "reason": "StringOperationFilterInput",
                "statusUpdatedAt": "DateTimeOperationFilterInput",
                "createdBy": "StringOperationFilterInput",
                "createdOn": "DateTimeOperationFilterInput",
                "updatedBy": "StringOperationFilterInput",
                "updatedOn": "DateTimeOperationFilterInput",
                "revision": "IntOperationFilterInput",
                "id": "LongOperationFilterInput"
            },

            "JsonDocumentSortInput": {
                "rootElement": "SortEnumType"
            },

            "MemberSortInput": {
                "name": "SortEnumType",
                "registerAs": "SortEnumType",
                "username": "SortEnumType",
                "password": "SortEnumType",
                "password2": "SortEnumType",
                "organization": "SortEnumType",
                "phoneNumber": "SortEnumType",
                "ghanaCardNumber": "SortEnumType",
                "email": "SortEnumType",
                "address": "JsonDocumentSortInput",
                "employeeDetails": "JsonDocumentSortInput",
                "operationalArea": "SortEnumType",
                "commencementYear": "SortEnumType",
                "redgNo": "SortEnumType",
                "category": "SortEnumType",
                "additionalInformation": "SortEnumType",
                "productMaterialCategory": "SortEnumType",
                "description": "SortEnumType",
                "membershipDeclaration": "JsonDocumentSortInput",
                "registeredBy": "JsonDocumentSortInput",
                "status": "SortEnumType",
                "reason": "SortEnumType",
                "statusUpdatedAt": "SortEnumType",
                "createdBy": "SortEnumType",
                "createdOn": "SortEnumType",
                "updatedBy": "SortEnumType",
                "updatedOn": "SortEnumType",
                "revision": "SortEnumType",
                "id": "SortEnumType"
            }
        },

        "defaults": {},
        "runtimeScalars": {}
    },

    "policy": "NetworkOnly",
    "partial": false
};

"HoudiniHash=871d26e9c97a984625c1646e88d796f1cba91c0af296a0636d7ca3fece451589";