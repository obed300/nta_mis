import type { Record } from "./public/record";
import { Members$result, Members$input } from "../artifacts/Members";
import { MembersStore } from "../plugins/houdini-svelte/stores/Members";
import { dashboardData$result, dashboardData$input } from "../artifacts/dashboardData";
import { dashboardDataStore } from "../plugins/houdini-svelte/stores/dashboardData";
import type { UserActivityType } from "$houdini/graphql/enums";
import type { EventType } from "$houdini/graphql/enums";
import type { ServiceEvent } from "$houdini/graphql/enums";
import type { OutputFormat } from "$houdini/graphql/enums";
import type { ReportRendererType } from "$houdini/graphql/enums";
import type { NotificationEntity } from "$houdini/graphql/enums";
import type { UserType } from "$houdini/graphql/enums";
import type { MembershipStatus } from "$houdini/graphql/enums";
import type { SortEnumType } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { JsonValueKind } from "$houdini/graphql/enums";

type GetReportParametersFromFileInput = {
    reportFile: File;
};

type GetReportParametersInput = {
    definition: string;
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

type BooleanOperationFilterInput = {
    eq?: boolean | null | undefined;
    neq?: boolean | null | undefined;
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

type DashboardFilterInput = {
    and?: (DashboardFilterInput)[] | null | undefined;
    or?: (DashboardFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    viewer?: StringOperationFilterInput | null | undefined;
    formDefinition?: JsonDocumentFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
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

type DashboardSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    description?: ValueOf<typeof SortEnumType> | null | undefined;
    viewer?: ValueOf<typeof SortEnumType> | null | undefined;
    formDefinition?: JsonDocumentSortInput | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type ContactUsFilterInput = {
    and?: (ContactUsFilterInput)[] | null | undefined;
    or?: (ContactUsFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    subject?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    isRead?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type ContactUsSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    subject?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    isRead?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type ListStringOperationFilterInput = {
    all?: StringOperationFilterInput | null | undefined;
    none?: StringOperationFilterInput | null | undefined;
    some?: StringOperationFilterInput | null | undefined;
    any?: boolean | null | undefined;
};

type MembershipStatusOperationFilterInput = {
    eq?: ValueOf<typeof MembershipStatus> | null | undefined;
    neq?: ValueOf<typeof MembershipStatus> | null | undefined;
    in?: (ValueOf<typeof MembershipStatus>)[] | null | undefined;
    nin?: (ValueOf<typeof MembershipStatus>)[] | null | undefined;
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

type DepartmentSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type UserStatusSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    isActive?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type RoleSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type UserSortInput = {
    firstName?: ValueOf<typeof SortEnumType> | null | undefined;
    surname?: ValueOf<typeof SortEnumType> | null | undefined;
    staffNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    departmentId?: ValueOf<typeof SortEnumType> | null | undefined;
    department?: DepartmentSortInput | null | undefined;
    contactNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    statusId?: ValueOf<typeof SortEnumType> | null | undefined;
    status?: UserStatusSortInput | null | undefined;
    roleId?: ValueOf<typeof SortEnumType> | null | undefined;
    role?: RoleSortInput | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    username?: ValueOf<typeof SortEnumType> | null | undefined;
    type?: ValueOf<typeof SortEnumType> | null | undefined;
    activeDashboardId?: ValueOf<typeof SortEnumType> | null | undefined;
    activeDashboard?: DashboardSortInput | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type NotificationEntrySortInput = {
    userId?: ValueOf<typeof SortEnumType> | null | undefined;
    user?: UserSortInput | null | undefined;
    entity?: ValueOf<typeof SortEnumType> | null | undefined;
    entityId?: ValueOf<typeof SortEnumType> | null | undefined;
    title?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    date?: ValueOf<typeof SortEnumType> | null | undefined;
    dateRead?: ValueOf<typeof SortEnumType> | null | undefined;
    isRead?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type DepartmentFilterInput = {
    and?: (DepartmentFilterInput)[] | null | undefined;
    or?: (DepartmentFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type UserStatusFilterInput = {
    and?: (UserStatusFilterInput)[] | null | undefined;
    or?: (UserStatusFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    isActive?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type ListLongOperationFilterInput = {
    all?: LongOperationFilterInput | null | undefined;
    none?: LongOperationFilterInput | null | undefined;
    some?: LongOperationFilterInput | null | undefined;
    any?: boolean | null | undefined;
};

type RoleFilterInput = {
    and?: (RoleFilterInput)[] | null | undefined;
    or?: (RoleFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    permissions?: ListStringOperationFilterInput | null | undefined;
    dashboards?: ListLongOperationFilterInput | null | undefined;
    reports?: ListLongOperationFilterInput | null | undefined;
    edifyCountries?: ListLongOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type UserTypeOperationFilterInput = {
    eq?: ValueOf<typeof UserType> | null | undefined;
    neq?: ValueOf<typeof UserType> | null | undefined;
    in?: (ValueOf<typeof UserType>)[] | null | undefined;
    nin?: (ValueOf<typeof UserType>)[] | null | undefined;
};

type UserFilterInput = {
    and?: (UserFilterInput)[] | null | undefined;
    or?: (UserFilterInput)[] | null | undefined;
    firstName?: StringOperationFilterInput | null | undefined;
    surname?: StringOperationFilterInput | null | undefined;
    staffNumber?: StringOperationFilterInput | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    departmentId?: LongOperationFilterInput | null | undefined;
    department?: DepartmentFilterInput | null | undefined;
    contactNumber?: StringOperationFilterInput | null | undefined;
    statusId?: LongOperationFilterInput | null | undefined;
    status?: UserStatusFilterInput | null | undefined;
    roleId?: LongOperationFilterInput | null | undefined;
    role?: RoleFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    username?: StringOperationFilterInput | null | undefined;
    type?: UserTypeOperationFilterInput | null | undefined;
    activeDashboardId?: LongOperationFilterInput | null | undefined;
    activeDashboard?: DashboardFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type NotificationEntityOperationFilterInput = {
    eq?: ValueOf<typeof NotificationEntity> | null | undefined;
    neq?: ValueOf<typeof NotificationEntity> | null | undefined;
    in?: (ValueOf<typeof NotificationEntity>)[] | null | undefined;
    nin?: (ValueOf<typeof NotificationEntity>)[] | null | undefined;
};

type NotificationEntryFilterInput = {
    and?: (NotificationEntryFilterInput)[] | null | undefined;
    or?: (NotificationEntryFilterInput)[] | null | undefined;
    userId?: LongOperationFilterInput | null | undefined;
    user?: UserFilterInput | null | undefined;
    entity?: NotificationEntityOperationFilterInput | null | undefined;
    entityId?: LongOperationFilterInput | null | undefined;
    title?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    date?: DateTimeOperationFilterInput | null | undefined;
    dateRead?: DateTimeOperationFilterInput | null | undefined;
    isRead?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type ReadReportsInput = {
    isActive?: boolean | null | undefined;
};

type ReportRendererTypeOperationFilterInput = {
    eq?: ValueOf<typeof ReportRendererType> | null | undefined;
    neq?: ValueOf<typeof ReportRendererType> | null | undefined;
    in?: (ValueOf<typeof ReportRendererType>)[] | null | undefined;
    nin?: (ValueOf<typeof ReportRendererType>)[] | null | undefined;
};

type ReportDefinitionFilterInput = {
    and?: (ReportDefinitionFilterInput)[] | null | undefined;
    or?: (ReportDefinitionFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    reportDefinition?: StringOperationFilterInput | null | undefined;
    formDefinition?: StringOperationFilterInput | null | undefined;
    parameters?: StringOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    renderer?: ReportRendererTypeOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type ReportDefinitionSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    description?: ValueOf<typeof SortEnumType> | null | undefined;
    reportDefinition?: ValueOf<typeof SortEnumType> | null | undefined;
    formDefinition?: ValueOf<typeof SortEnumType> | null | undefined;
    parameters?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    renderer?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type GenerateReportInput = {
    reportId: number;
    userId?: number | null | undefined;
    filter?: any | null | undefined;
    outputFormat: ValueOf<typeof OutputFormat>;
    runInBackground: boolean;
};

type ServiceFeedSortInput = {
    service?: ValueOf<typeof SortEnumType> | null | undefined;
    activity?: ValueOf<typeof SortEnumType> | null | undefined;
    type?: ValueOf<typeof SortEnumType> | null | undefined;
    title?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type ServiceEventOperationFilterInput = {
    eq?: ValueOf<typeof ServiceEvent> | null | undefined;
    neq?: ValueOf<typeof ServiceEvent> | null | undefined;
    in?: (ValueOf<typeof ServiceEvent>)[] | null | undefined;
    nin?: (ValueOf<typeof ServiceEvent>)[] | null | undefined;
};

type EventTypeOperationFilterInput = {
    eq?: ValueOf<typeof EventType> | null | undefined;
    neq?: ValueOf<typeof EventType> | null | undefined;
    in?: (ValueOf<typeof EventType>)[] | null | undefined;
    nin?: (ValueOf<typeof EventType>)[] | null | undefined;
};

type ServiceFeedFilterInput = {
    and?: (ServiceFeedFilterInput)[] | null | undefined;
    or?: (ServiceFeedFilterInput)[] | null | undefined;
    service?: StringOperationFilterInput | null | undefined;
    activity?: ServiceEventOperationFilterInput | null | undefined;
    type?: EventTypeOperationFilterInput | null | undefined;
    title?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type SmsTemplateFilterInput = {
    and?: (SmsTemplateFilterInput)[] | null | undefined;
    or?: (SmsTemplateFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    isSystemTemplate?: BooleanOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type SmsTemplateSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    isSystemTemplate?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type EmailTemplateFilterInput = {
    and?: (EmailTemplateFilterInput)[] | null | undefined;
    or?: (EmailTemplateFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    subject?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    isSystemTemplate?: BooleanOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type EmailTemplateSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    subject?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    isSystemTemplate?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type ArticleTemplateFilterInput = {
    and?: (ArticleTemplateFilterInput)[] | null | undefined;
    or?: (ArticleTemplateFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    content?: StringOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    isSystemTemplate?: BooleanOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type ArticleTemplateSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    content?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    isSystemTemplate?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type UserActivityTypeOperationFilterInput = {
    eq?: ValueOf<typeof UserActivityType> | null | undefined;
    neq?: ValueOf<typeof UserActivityType> | null | undefined;
    in?: (ValueOf<typeof UserActivityType>)[] | null | undefined;
    nin?: (ValueOf<typeof UserActivityType>)[] | null | undefined;
};

type UserFeedFilterInput = {
    and?: (UserFeedFilterInput)[] | null | undefined;
    or?: (UserFeedFilterInput)[] | null | undefined;
    userId?: LongOperationFilterInput | null | undefined;
    user?: UserFilterInput | null | undefined;
    activity?: UserActivityTypeOperationFilterInput | null | undefined;
    type?: EventTypeOperationFilterInput | null | undefined;
    title?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    entityId?: LongOperationFilterInput | null | undefined;
    entityType?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type UserFeedSortInput = {
    userId?: ValueOf<typeof SortEnumType> | null | undefined;
    user?: UserSortInput | null | undefined;
    activity?: ValueOf<typeof SortEnumType> | null | undefined;
    type?: ValueOf<typeof SortEnumType> | null | undefined;
    title?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    entityId?: ValueOf<typeof SortEnumType> | null | undefined;
    entityType?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        ActivateArticleTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ActivateDashboardPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ActivateEmailTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ActivateSmsTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArticleTemplate: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                content: {
                    type: string;
                    args: never;
                };
                category: {
                    type: string;
                    args: never;
                };
                isSystemTemplate: {
                    type: boolean;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ArticleTemplatesByCategoryCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "ArticleTemplate">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ArticleTemplatesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "ArticleTemplate">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CallResult: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
                message: {
                    type: string | null;
                    args: never;
                };
                code: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CallResultOfListOfReportParameter: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
                message: {
                    type: string | null;
                    args: never;
                };
                result: {
                    type: ((Record<CacheTypeDef, "ReportParameter"> | null))[] | null;
                    args: never;
                };
                code: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CallResultOfMe: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
                message: {
                    type: string | null;
                    args: never;
                };
                result: {
                    type: Record<CacheTypeDef, "Me"> | null;
                    args: never;
                };
                code: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CallResultOfString: {
            idFields: never;
            fields: {
                success: {
                    type: boolean;
                    args: never;
                };
                message: {
                    type: string | null;
                    args: never;
                };
                result: {
                    type: string | null;
                    args: never;
                };
                code: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CollectionSegmentInfo: {
            idFields: never;
            fields: {
                hasNextPage: {
                    type: boolean;
                    args: never;
                };
                hasPreviousPage: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactUs: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                subject: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                isRead: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ContactUsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "ContactUs">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateArticleTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateContactUsPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateDashboardPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateDepartmentPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateEmailTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateMemberPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateReportPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateRolePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateSmsTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateUserPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateUserStatusPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Dashboard: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                viewer: {
                    type: string;
                    args: never;
                };
                formDefinition: {
                    type: Record<CacheTypeDef, "JsonDocument"> | null;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        DashboardIntEntry: {
            idFields: never;
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                value: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        DashboardIntEntry2: {
            idFields: never;
            fields: {
                parent: {
                    type: string;
                    args: never;
                };
                child: {
                    type: string;
                    args: never;
                };
                value: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        DashboardsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Dashboard">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        DeactivateArticleTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeactivateDashboardPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeactivateEmailTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeactivateSmsTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteArticleTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteContactUsPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteDashboardPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteDepartmentPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteEmailTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteMemberPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteReportPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteRolePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteSmsTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteUserPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteUserStatusPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Department: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailTemplate: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                subject: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                category: {
                    type: string;
                    args: never;
                };
                isSystemTemplate: {
                    type: boolean;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailTemplatesByCategoryCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EmailTemplate">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailTemplatesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EmailTemplate">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        GeneralError: {
            idFields: never;
            fields: {
                message: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        JsonDocument: {
            idFields: never;
            fields: {
                rootElement: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        LockUserPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        MarkEmailAsReadPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        MarkEmailAsUnreadPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        MarkNotificationsAsReadPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Me: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number;
                    args: never;
                };
                role: {
                    type: string;
                    args: never;
                };
                roleId: {
                    type: number;
                    args: never;
                };
                department: {
                    type: string;
                    args: never;
                };
                departmentId: {
                    type: number;
                    args: never;
                };
                permissions: {
                    type: (string)[];
                    args: never;
                };
                type: {
                    type: UserType;
                    args: never;
                };
                activeDashboardId: {
                    type: number | null;
                    args: never;
                };
                firstName: {
                    type: string;
                    args: never;
                };
                lastName: {
                    type: string;
                    args: never;
                };
                middleNames: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        Member: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                registerAs: {
                    type: string | null;
                    args: never;
                };
                username: {
                    type: string | null;
                    args: never;
                };
                password: {
                    type: string | null;
                    args: never;
                };
                password2: {
                    type: string | null;
                    args: never;
                };
                organization: {
                    type: string;
                    args: never;
                };
                scopeOfServices: {
                    type: (string)[] | null;
                    args: never;
                };
                phoneNumber: {
                    type: string;
                    args: never;
                };
                ghanaCardNumber: {
                    type: string | null;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                address: {
                    type: Record<CacheTypeDef, "JsonDocument">;
                    args: never;
                };
                employeeDetails: {
                    type: Record<CacheTypeDef, "JsonDocument"> | null;
                    args: never;
                };
                operationalArea: {
                    type: string;
                    args: never;
                };
                commencementYear: {
                    type: string;
                    args: never;
                };
                redgNo: {
                    type: string;
                    args: never;
                };
                category: {
                    type: string | null;
                    args: never;
                };
                additionalInformation: {
                    type: string | null;
                    args: never;
                };
                productMaterialCategory: {
                    type: string | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                imageUrls: {
                    type: (string)[] | null;
                    args: never;
                };
                membershipDeclaration: {
                    type: Record<CacheTypeDef, "JsonDocument"> | null;
                    args: never;
                };
                registeredBy: {
                    type: Record<CacheTypeDef, "JsonDocument"> | null;
                    args: never;
                };
                status: {
                    type: MembershipStatus;
                    args: never;
                };
                reason: {
                    type: string | null;
                    args: never;
                };
                statusUpdatedAt: {
                    type: Date | null;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        MembersCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Member">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        NotificationEntry: {
            idFields: {
                id: number;
            };
            fields: {
                userId: {
                    type: number;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "User">;
                    args: never;
                };
                entity: {
                    type: NotificationEntity;
                    args: never;
                };
                entityId: {
                    type: number | null;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                date: {
                    type: Date;
                    args: never;
                };
                dateRead: {
                    type: Date | null;
                    args: never;
                };
                isRead: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        NotificationGroupValue: {
            idFields: never;
            fields: {
                entity: {
                    type: NotificationEntity;
                    args: never;
                };
                count: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        NotificationsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "NotificationEntry">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                myReports: {
                    type: ((Record<CacheTypeDef, "Report"> | null))[] | null;
                    args: never;
                };
                reportParametersFromFile: {
                    type: Record<CacheTypeDef, "CallResultOfListOfReportParameter"> | null;
                    args: {
                        input?: GetReportParametersFromFileInput | null | undefined;
                    };
                };
                reportParameters: {
                    type: Record<CacheTypeDef, "CallResultOfListOfReportParameter"> | null;
                    args: {
                        input?: GetReportParametersInput | null | undefined;
                    };
                };
                dashboards: {
                    type: Record<CacheTypeDef, "DashboardsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: DashboardFilterInput | null | undefined;
                        order?: (DashboardSortInput)[] | null | undefined;
                    };
                };
                myDashboards: {
                    type: (Record<CacheTypeDef, "Dashboard">)[];
                    args: never;
                };
                contactUs: {
                    type: Record<CacheTypeDef, "ContactUsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: ContactUsFilterInput | null | undefined;
                        order?: (ContactUsSortInput)[] | null | undefined;
                    };
                };
                members: {
                    type: Record<CacheTypeDef, "MembersCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: MemberFilterInput | null | undefined;
                        order?: (MemberSortInput)[] | null | undefined;
                    };
                };
                memberCategories: {
                    type: (string)[];
                    args: never;
                };
                productMaterialCategories: {
                    type: (string)[];
                    args: never;
                };
                registerAs: {
                    type: (string)[];
                    args: never;
                };
                scopeOfServices: {
                    type: (string)[];
                    args: never;
                };
                totalNTAMembers: {
                    type: number;
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                totalSesnetMembers: {
                    type: number;
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                pendingApprovals: {
                    type: number;
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                rejectedApplications: {
                    type: number;
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                sesnetMembersOverTime: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry2">)[];
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                ntaMembersOverTime: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry2">)[];
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                membersByRegion: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry2">)[];
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                membershipShare: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        startDate: Date;
                        endDate: Date;
                    };
                };
                notifications: {
                    type: Record<CacheTypeDef, "NotificationsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        order?: (NotificationEntrySortInput)[] | null | undefined;
                        where?: NotificationEntryFilterInput | null | undefined;
                    };
                };
                notificationCount: {
                    type: number;
                    args: never;
                };
                notificationGroupCount: {
                    type: (Record<CacheTypeDef, "NotificationGroupValue">)[];
                    args: never;
                };
                readReports: {
                    type: Record<CacheTypeDef, "ReadReportsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        input: ReadReportsInput;
                        where?: ReportDefinitionFilterInput | null | undefined;
                        order?: (ReportDefinitionSortInput)[] | null | undefined;
                    };
                };
                prepareReport: {
                    type: Record<CacheTypeDef, "CallResultOfString">;
                    args: {
                        input: GenerateReportInput;
                    };
                };
                serviceFeeds: {
                    type: Record<CacheTypeDef, "ServiceFeedsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        order?: (ServiceFeedSortInput)[] | null | undefined;
                        where?: ServiceFeedFilterInput | null | undefined;
                    };
                };
                services: {
                    type: (Record<CacheTypeDef, "ServiceInfo">)[];
                    args: never;
                };
                serviceNames: {
                    type: (string)[];
                    args: never;
                };
                smsTemplates: {
                    type: Record<CacheTypeDef, "SmsTemplatesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: SmsTemplateFilterInput | null | undefined;
                        order?: (SmsTemplateSortInput)[] | null | undefined;
                    };
                };
                emailTemplates: {
                    type: Record<CacheTypeDef, "EmailTemplatesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: EmailTemplateFilterInput | null | undefined;
                        order?: (EmailTemplateSortInput)[] | null | undefined;
                    };
                };
                articleTemplates: {
                    type: Record<CacheTypeDef, "ArticleTemplatesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: ArticleTemplateFilterInput | null | undefined;
                        order?: (ArticleTemplateSortInput)[] | null | undefined;
                    };
                };
                smsCategories: {
                    type: (string)[];
                    args: never;
                };
                smsTemplatesByCategory: {
                    type: Record<CacheTypeDef, "SmsTemplatesByCategoryCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        category: string;
                        where?: SmsTemplateFilterInput | null | undefined;
                        order?: (SmsTemplateSortInput)[] | null | undefined;
                    };
                };
                emailCategories: {
                    type: (string)[];
                    args: never;
                };
                emailTemplatesByCategory: {
                    type: Record<CacheTypeDef, "EmailTemplatesByCategoryCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        category: string;
                        where?: EmailTemplateFilterInput | null | undefined;
                        order?: (EmailTemplateSortInput)[] | null | undefined;
                    };
                };
                articleCategories: {
                    type: (string)[];
                    args: never;
                };
                articleTemplatesByCategory: {
                    type: Record<CacheTypeDef, "ArticleTemplatesByCategoryCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        category: string;
                        where?: ArticleTemplateFilterInput | null | undefined;
                        order?: (ArticleTemplateSortInput)[] | null | undefined;
                    };
                };
                users: {
                    type: Record<CacheTypeDef, "UsersCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: UserFilterInput | null | undefined;
                        order?: (UserSortInput)[] | null | undefined;
                    };
                };
                roles: {
                    type: Record<CacheTypeDef, "RolesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: RoleFilterInput | null | undefined;
                        order?: (RoleSortInput)[] | null | undefined;
                    };
                };
                userStatuses: {
                    type: Record<CacheTypeDef, "UserStatusesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: UserStatusFilterInput | null | undefined;
                        order?: (UserStatusSortInput)[] | null | undefined;
                    };
                };
                userFeeds: {
                    type: Record<CacheTypeDef, "UserFeedsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: UserFeedFilterInput | null | undefined;
                        order?: (UserFeedSortInput)[] | null | undefined;
                    };
                };
                permissions: {
                    type: (string)[];
                    args: never;
                };
                me: {
                    type: Record<CacheTypeDef, "CallResultOfMe">;
                    args: never;
                };
                currentUser: {
                    type: Record<CacheTypeDef, "User"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        QueueNewEventRegistrationSmsPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        QueueNewSignupSmsPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        QueueTestSmsPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ReadReportsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "ReportDefinition">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        Report: {
            idFields: {
                id: number;
            };
            fields: {
                id: {
                    type: number;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                filterForm: {
                    type: string;
                    args: never;
                };
                isActive: {
                    type: boolean;
                    args: never;
                };
                category: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        ReportDefinition: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                reportDefinition: {
                    type: string;
                    args: never;
                };
                formDefinition: {
                    type: string;
                    args: never;
                };
                parameters: {
                    type: string;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                category: {
                    type: string;
                    args: never;
                };
                renderer: {
                    type: ReportRendererType;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ReportParameter: {
            idFields: never;
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                type: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        RestartServicePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Role: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                permissions: {
                    type: (string)[];
                    args: never;
                };
                dashboards: {
                    type: (number)[];
                    args: never;
                };
                reports: {
                    type: (number)[];
                    args: never;
                };
                edifyCountries: {
                    type: (number)[];
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        RolesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Role">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SaveReportPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ServiceFeed: {
            idFields: {
                id: number;
            };
            fields: {
                service: {
                    type: string;
                    args: never;
                };
                activity: {
                    type: ServiceEvent;
                    args: never;
                };
                type: {
                    type: EventType;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ServiceFeedsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "ServiceFeed">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        ServiceInfo: {
            idFields: never;
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                code: {
                    type: string;
                    args: never;
                };
                icon: {
                    type: string;
                    args: never;
                };
                isService: {
                    type: boolean;
                    args: never;
                };
            };
            fragments: [];
        };
        SetActiveDashboardPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        SmsTemplate: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                category: {
                    type: string;
                    args: never;
                };
                isSystemTemplate: {
                    type: boolean;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SmsTemplatesByCategoryCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "SmsTemplate">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SmsTemplatesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "SmsTemplate">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        UnlockUserPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateArticleTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateContactUsPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateDashboardPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateDepartmentPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateEmailTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateMemberPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateMemberStatusPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateReportPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateRolePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateSmsTemplatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateUserPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateUserStatusPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        User: {
            idFields: {
                id: number;
            };
            fields: {
                isTruelyActive: {
                    type: boolean;
                    args: never;
                };
                firstName: {
                    type: string;
                    args: never;
                };
                surname: {
                    type: string;
                    args: never;
                };
                staffNumber: {
                    type: string;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                departmentId: {
                    type: number;
                    args: never;
                };
                department: {
                    type: Record<CacheTypeDef, "Department">;
                    args: never;
                };
                contactNumber: {
                    type: string;
                    args: never;
                };
                statusId: {
                    type: number;
                    args: never;
                };
                status: {
                    type: Record<CacheTypeDef, "UserStatus">;
                    args: never;
                };
                roleId: {
                    type: number;
                    args: never;
                };
                role: {
                    type: Record<CacheTypeDef, "Role">;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                username: {
                    type: string;
                    args: never;
                };
                type: {
                    type: UserType;
                    args: never;
                };
                activeDashboardId: {
                    type: number | null;
                    args: never;
                };
                activeDashboard: {
                    type: Record<CacheTypeDef, "Dashboard"> | null;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        UserEvent: {
            idFields: never;
            fields: {
                evt: {
                    type: UserEventType;
                    args: never;
                };
            };
            fragments: [];
        };
        UserFeed: {
            idFields: {
                id: number;
            };
            fields: {
                userId: {
                    type: number;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "User">;
                    args: never;
                };
                activity: {
                    type: UserActivityType;
                    args: never;
                };
                type: {
                    type: EventType;
                    args: never;
                };
                title: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                entityId: {
                    type: number | null;
                    args: never;
                };
                entityType: {
                    type: string | null;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        UserFeedsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "UserFeed">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        UserStatus: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                isActive: {
                    type: boolean;
                    args: never;
                };
                createdBy: {
                    type: string;
                    args: never;
                };
                createdOn: {
                    type: Date;
                    args: never;
                };
                updatedBy: {
                    type: string;
                    args: never;
                };
                updatedOn: {
                    type: Date | null;
                    args: never;
                };
                revision: {
                    type: number;
                    args: never;
                };
                id: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        UserStatusesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "UserStatus">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        UsersCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "User">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[dashboardDataStore, dashboardData$result, dashboardData$input], [MembersStore, Members$result, Members$input]];
};