/** Defines when a policy shall be executed. */
export const ApplyPolicy = {
    /**
     * Before the resolver was executed.
    */
    "BEFORE_RESOLVER": "BEFORE_RESOLVER",

    /**
     * After the resolver was executed.
    */
    "AFTER_RESOLVER": "AFTER_RESOLVER",

    /**
     * The policy is applied in the validation step before the execution.
    */
    "VALIDATION": "VALIDATION"
};

export const CampaignEvent = {
    "CREATED": "CREATED",
    "EXECUTED": "EXECUTED",
    "SUSPENDED": "SUSPENDED",
    "EDITED": "EDITED"
};

export const CampaignFrequency = {
    "ONCE": "ONCE",
    "DAILY": "DAILY",
    "WEEKLY": "WEEKLY",
    "MONTHLY": "MONTHLY",
    "YEARLY": "YEARLY"
};

export const EventType = {
    "INFORMATION": "INFORMATION",
    "WARNING": "WARNING",
    "ERROR": "ERROR"
};

export const JsonValueKind = {
    "UNDEFINED": "UNDEFINED",
    "OBJECT": "OBJECT",
    "ARRAY": "ARRAY",
    "STRING": "STRING",
    "NUMBER": "NUMBER",
    "TRUE": "TRUE",
    "FALSE": "FALSE",
    "NULL": "NULL"
};

export const MembershipStatus = {
    "PENDING": "PENDING",
    "APPROVED": "APPROVED",
    "REJECTED": "REJECTED"
};

export const NotificationEntity = {
    "DOCUMENT": "DOCUMENT"
};

export const OutputFormat = {
    "PDF": "PDF",
    "JPEG": "JPEG",
    "EXCEL": "EXCEL",
    "HTML": "HTML",
    "CSV": "CSV"
};

export const ReportRendererType = {
    "DESIGNED_BASED": "DESIGNED_BASED",
    "QUERY_BASED": "QUERY_BASED"
};

export const ServiceEvent = {
    "IN_PROGRESS": "IN_PROGRESS"
};

export const SortEnumType = {
    "ASC": "ASC",
    "DESC": "DESC"
};

export const UserActivityType = {
    "ACCOUNT_CREATED": "ACCOUNT_CREATED",
    "CREATE": "CREATE",
    "UPDATE": "UPDATE",
    "DELETE": "DELETE",
    "READ": "READ"
};

export const UserEventType = {
    "NOTIFICATIONS_UPDATED": "NOTIFICATIONS_UPDATED"
};

export const UserType = {
    "STAFF": "STAFF",
    "STUDENT": "STUDENT",
    "CONSULTANT": "CONSULTANT",
    "HOUSE_OFFICER": "HOUSE_OFFICER",
    "RESIDENT": "RESIDENT"
};

export const DedupeMatchMode = {
    "Variables": "Variables",
    "Operation": "Operation",
    "None": "None"
};