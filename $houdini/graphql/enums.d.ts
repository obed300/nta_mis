
type ValuesOf<T> = T[keyof T]
	
/** Defines when a policy shall be executed. */
export declare const ApplyPolicy: {
    /** Before the resolver was executed. */
    readonly BEFORE_RESOLVER: "BEFORE_RESOLVER";
    /** After the resolver was executed. */
    readonly AFTER_RESOLVER: "AFTER_RESOLVER";
    /** The policy is applied in the validation step before the execution. */
    readonly VALIDATION: "VALIDATION";
}

/** Defines when a policy shall be executed. */
export type ApplyPolicy$options = ValuesOf<typeof ApplyPolicy>
 
export declare const DedupeMatchMode: {
    readonly Variables: "Variables";
    readonly Operation: "Operation";
    readonly None: "None";
}

export type DedupeMatchMode$options = ValuesOf<typeof DedupeMatchMode>
 
export declare const EventType: {
    readonly INFORMATION: "INFORMATION";
    readonly WARNING: "WARNING";
    readonly ERROR: "ERROR";
}

export type EventType$options = ValuesOf<typeof EventType>
 
export declare const JsonValueKind: {
    readonly UNDEFINED: "UNDEFINED";
    readonly OBJECT: "OBJECT";
    readonly ARRAY: "ARRAY";
    readonly STRING: "STRING";
    readonly NUMBER: "NUMBER";
    readonly TRUE: "TRUE";
    readonly FALSE: "FALSE";
    readonly NULL: "NULL";
}

export type JsonValueKind$options = ValuesOf<typeof JsonValueKind>
 
export declare const MembershipStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
}

export type MembershipStatus$options = ValuesOf<typeof MembershipStatus>
 
export declare const NotificationEntity: {
    readonly DOCUMENT: "DOCUMENT";
}

export type NotificationEntity$options = ValuesOf<typeof NotificationEntity>
 
export declare const OutputFormat: {
    readonly PDF: "PDF";
    readonly JPEG: "JPEG";
    readonly EXCEL: "EXCEL";
    readonly HTML: "HTML";
    readonly CSV: "CSV";
}

export type OutputFormat$options = ValuesOf<typeof OutputFormat>
 
export declare const ReportRendererType: {
    readonly DESIGNED_BASED: "DESIGNED_BASED";
    readonly QUERY_BASED: "QUERY_BASED";
}

export type ReportRendererType$options = ValuesOf<typeof ReportRendererType>
 
export declare const ServiceEvent: {
    readonly IN_PROGRESS: "IN_PROGRESS";
}

export type ServiceEvent$options = ValuesOf<typeof ServiceEvent>
 
export declare const SortEnumType: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
}

export type SortEnumType$options = ValuesOf<typeof SortEnumType>
 
export declare const UserActivityType: {
    readonly ACCOUNT_CREATED: "ACCOUNT_CREATED";
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly READ: "READ";
}

export type UserActivityType$options = ValuesOf<typeof UserActivityType>
 
export declare const UserEventType: {
    readonly NOTIFICATIONS_UPDATED: "NOTIFICATIONS_UPDATED";
}

export type UserEventType$options = ValuesOf<typeof UserEventType>
 
export declare const UserType: {
    readonly STAFF: "STAFF";
    readonly STUDENT: "STUDENT";
    readonly CONSULTANT: "CONSULTANT";
    readonly HOUSE_OFFICER: "HOUSE_OFFICER";
    readonly RESIDENT: "RESIDENT";
}

export type UserType$options = ValuesOf<typeof UserType>
 