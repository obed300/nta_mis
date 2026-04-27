import type { Record } from "./public/record";
import { Members$result, Members$input } from "../artifacts/Members";
import { MembersStore } from "../plugins/houdini-svelte/stores/Members";
import type { UserActivityType } from "$houdini/graphql/enums";
import type { ServiceEvent } from "$houdini/graphql/enums";
import type { OutputFormat } from "$houdini/graphql/enums";
import type { ReportRendererType } from "$houdini/graphql/enums";
import type { NotificationEntity } from "$houdini/graphql/enums";
import type { UserType } from "$houdini/graphql/enums";
import type { MembershipStatus } from "$houdini/graphql/enums";
import type { JsonValueKind } from "$houdini/graphql/enums";
import type { EventType } from "$houdini/graphql/enums";
import type { CampaignEvent } from "$houdini/graphql/enums";
import type { CampaignFrequency } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { SortEnumType } from "$houdini/graphql/enums";

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

type EdifyCountryFilterInput = {
    and?: (EdifyCountryFilterInput)[] | null | undefined;
    or?: (EdifyCountryFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    flagUrl?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    countryId?: LongOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type CountryFilterInput = {
    and?: (CountryFilterInput)[] | null | undefined;
    or?: (CountryFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type RegionFilterInput = {
    and?: (RegionFilterInput)[] | null | undefined;
    or?: (RegionFilterInput)[] | null | undefined;
    countryId?: LongOperationFilterInput | null | undefined;
    country?: CountryFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type DistrictFilterInput = {
    and?: (DistrictFilterInput)[] | null | undefined;
    or?: (DistrictFilterInput)[] | null | undefined;
    regionId?: LongOperationFilterInput | null | undefined;
    region?: RegionFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type SchoolFilterInput = {
    and?: (SchoolFilterInput)[] | null | undefined;
    or?: (SchoolFilterInput)[] | null | undefined;
    edifyCountryId?: LongOperationFilterInput | null | undefined;
    edifyCountry?: EdifyCountryFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    logoUrl?: StringOperationFilterInput | null | undefined;
    districtId?: LongOperationFilterInput | null | undefined;
    district?: DistrictFilterInput | null | undefined;
    contactPerson?: StringOperationFilterInput | null | undefined;
    contactPhoneNumber1?: StringOperationFilterInput | null | undefined;
    contactPhoneNumber2?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type OccupationFilterInput = {
    and?: (OccupationFilterInput)[] | null | undefined;
    or?: (OccupationFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type BooleanOperationFilterInput = {
    eq?: boolean | null | undefined;
    neq?: boolean | null | undefined;
};

type AlumniFilterInput = {
    and?: (AlumniFilterInput)[] | null | undefined;
    or?: (AlumniFilterInput)[] | null | undefined;
    firstName?: StringOperationFilterInput | null | undefined;
    otherNames?: StringOperationFilterInput | null | undefined;
    surname?: StringOperationFilterInput | null | undefined;
    dateOfBirth?: StringOperationFilterInput | null | undefined;
    profilePictureUrl?: StringOperationFilterInput | null | undefined;
    phoneNumber1?: StringOperationFilterInput | null | undefined;
    phoneNumber2?: StringOperationFilterInput | null | undefined;
    whatsAppNumber?: StringOperationFilterInput | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    basicSchoolCompletedId?: LongOperationFilterInput | null | undefined;
    basicSchoolCompleted?: SchoolFilterInput | null | undefined;
    yearCompleted?: IntOperationFilterInput | null | undefined;
    currentStatus?: StringOperationFilterInput | null | undefined;
    gender?: StringOperationFilterInput | null | undefined;
    otherStatus?: StringOperationFilterInput | null | undefined;
    occupationId?: LongOperationFilterInput | null | undefined;
    occupation?: OccupationFilterInput | null | undefined;
    currentInstitution?: StringOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    otherCategory?: StringOperationFilterInput | null | undefined;
    programOfStudy?: StringOperationFilterInput | null | undefined;
    currentYear?: StringOperationFilterInput | null | undefined;
    currentPlaceOfWork?: StringOperationFilterInput | null | undefined;
    businessType?: StringOperationFilterInput | null | undefined;
    businessDuration?: StringOperationFilterInput | null | undefined;
    countryId?: LongOperationFilterInput | null | undefined;
    country?: CountryFilterInput | null | undefined;
    regionOfResidenceId?: LongOperationFilterInput | null | undefined;
    regionOfResidence?: RegionFilterInput | null | undefined;
    username?: StringOperationFilterInput | null | undefined;
    password?: StringOperationFilterInput | null | undefined;
    password2?: StringOperationFilterInput | null | undefined;
    isProfileCompleted?: BooleanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type EdifyCountrySortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    flagUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    countryId?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type CountrySortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type RegionSortInput = {
    countryId?: ValueOf<typeof SortEnumType> | null | undefined;
    country?: CountrySortInput | null | undefined;
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type DistrictSortInput = {
    regionId?: ValueOf<typeof SortEnumType> | null | undefined;
    region?: RegionSortInput | null | undefined;
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type SchoolSortInput = {
    edifyCountryId?: ValueOf<typeof SortEnumType> | null | undefined;
    edifyCountry?: EdifyCountrySortInput | null | undefined;
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    logoUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    districtId?: ValueOf<typeof SortEnumType> | null | undefined;
    district?: DistrictSortInput | null | undefined;
    contactPerson?: ValueOf<typeof SortEnumType> | null | undefined;
    contactPhoneNumber1?: ValueOf<typeof SortEnumType> | null | undefined;
    contactPhoneNumber2?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type OccupationSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type AlumniSortInput = {
    firstName?: ValueOf<typeof SortEnumType> | null | undefined;
    otherNames?: ValueOf<typeof SortEnumType> | null | undefined;
    surname?: ValueOf<typeof SortEnumType> | null | undefined;
    dateOfBirth?: ValueOf<typeof SortEnumType> | null | undefined;
    profilePictureUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    phoneNumber1?: ValueOf<typeof SortEnumType> | null | undefined;
    phoneNumber2?: ValueOf<typeof SortEnumType> | null | undefined;
    whatsAppNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    basicSchoolCompletedId?: ValueOf<typeof SortEnumType> | null | undefined;
    basicSchoolCompleted?: SchoolSortInput | null | undefined;
    yearCompleted?: ValueOf<typeof SortEnumType> | null | undefined;
    currentStatus?: ValueOf<typeof SortEnumType> | null | undefined;
    gender?: ValueOf<typeof SortEnumType> | null | undefined;
    otherStatus?: ValueOf<typeof SortEnumType> | null | undefined;
    occupationId?: ValueOf<typeof SortEnumType> | null | undefined;
    occupation?: OccupationSortInput | null | undefined;
    currentInstitution?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    otherCategory?: ValueOf<typeof SortEnumType> | null | undefined;
    programOfStudy?: ValueOf<typeof SortEnumType> | null | undefined;
    currentYear?: ValueOf<typeof SortEnumType> | null | undefined;
    currentPlaceOfWork?: ValueOf<typeof SortEnumType> | null | undefined;
    businessType?: ValueOf<typeof SortEnumType> | null | undefined;
    businessDuration?: ValueOf<typeof SortEnumType> | null | undefined;
    countryId?: ValueOf<typeof SortEnumType> | null | undefined;
    country?: CountrySortInput | null | undefined;
    regionOfResidenceId?: ValueOf<typeof SortEnumType> | null | undefined;
    regionOfResidence?: RegionSortInput | null | undefined;
    username?: ValueOf<typeof SortEnumType> | null | undefined;
    password?: ValueOf<typeof SortEnumType> | null | undefined;
    password2?: ValueOf<typeof SortEnumType> | null | undefined;
    isProfileCompleted?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type LeadershipRoleFilterInput = {
    and?: (LeadershipRoleFilterInput)[] | null | undefined;
    or?: (LeadershipRoleFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type LeadershipRoleSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type LeaderFilterInput = {
    and?: (LeaderFilterInput)[] | null | undefined;
    or?: (LeaderFilterInput)[] | null | undefined;
    memberId?: LongOperationFilterInput | null | undefined;
    member?: AlumniFilterInput | null | undefined;
    position?: StringOperationFilterInput | null | undefined;
    photoUrl?: StringOperationFilterInput | null | undefined;
    startDate?: StringOperationFilterInput | null | undefined;
    endDate?: StringOperationFilterInput | null | undefined;
    article?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type LeaderSortInput = {
    memberId?: ValueOf<typeof SortEnumType> | null | undefined;
    member?: AlumniSortInput | null | undefined;
    position?: ValueOf<typeof SortEnumType> | null | undefined;
    photoUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    startDate?: ValueOf<typeof SortEnumType> | null | undefined;
    endDate?: ValueOf<typeof SortEnumType> | null | undefined;
    article?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type StoryFilterInput = {
    and?: (StoryFilterInput)[] | null | undefined;
    or?: (StoryFilterInput)[] | null | undefined;
    title?: StringOperationFilterInput | null | undefined;
    memberId?: LongOperationFilterInput | null | undefined;
    member?: AlumniFilterInput | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    author?: StringOperationFilterInput | null | undefined;
    photoUrl?: StringOperationFilterInput | null | undefined;
    currentStatus?: StringOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    article?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type StorySortInput = {
    title?: ValueOf<typeof SortEnumType> | null | undefined;
    memberId?: ValueOf<typeof SortEnumType> | null | undefined;
    member?: AlumniSortInput | null | undefined;
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    author?: ValueOf<typeof SortEnumType> | null | undefined;
    photoUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    currentStatus?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    article?: ValueOf<typeof SortEnumType> | null | undefined;
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

type ListLongOperationFilterInput = {
    all?: LongOperationFilterInput | null | undefined;
    none?: LongOperationFilterInput | null | undefined;
    some?: LongOperationFilterInput | null | undefined;
    any?: boolean | null | undefined;
};

type CampaignFrequencyOperationFilterInput = {
    eq?: ValueOf<typeof CampaignFrequency> | null | undefined;
    neq?: ValueOf<typeof CampaignFrequency> | null | undefined;
    in?: (ValueOf<typeof CampaignFrequency>)[] | null | undefined;
    nin?: (ValueOf<typeof CampaignFrequency>)[] | null | undefined;
};

type DateOperationFilterInput = {
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

type TimeSpanOperationFilterInput = {
    eq?: any | null | undefined;
    neq?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    nin?: (any | null | undefined)[] | null | undefined;
    gt?: any | null | undefined;
    ngt?: any | null | undefined;
    gte?: any | null | undefined;
    ngte?: any | null | undefined;
    lt?: any | null | undefined;
    nlt?: any | null | undefined;
    lte?: any | null | undefined;
    nlte?: any | null | undefined;
};

type SmsCampaignFilterInput = {
    and?: (SmsCampaignFilterInput)[] | null | undefined;
    or?: (SmsCampaignFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    phoneNumbers?: ListStringOperationFilterInput | null | undefined;
    schools?: ListLongOperationFilterInput | null | undefined;
    occupations?: ListLongOperationFilterInput | null | undefined;
    regionsOfResidence?: ListLongOperationFilterInput | null | undefined;
    dataFileUrl?: StringOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    frequency?: CampaignFrequencyOperationFilterInput | null | undefined;
    startDate?: DateOperationFilterInput | null | undefined;
    endDate?: DateOperationFilterInput | null | undefined;
    time?: TimeSpanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type SmsCampaignSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    dataFileUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    frequency?: ValueOf<typeof SortEnumType> | null | undefined;
    startDate?: ValueOf<typeof SortEnumType> | null | undefined;
    endDate?: ValueOf<typeof SortEnumType> | null | undefined;
    time?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type CampaignEventOperationFilterInput = {
    eq?: ValueOf<typeof CampaignEvent> | null | undefined;
    neq?: ValueOf<typeof CampaignEvent> | null | undefined;
    in?: (ValueOf<typeof CampaignEvent>)[] | null | undefined;
    nin?: (ValueOf<typeof CampaignEvent>)[] | null | undefined;
};

type EventTypeOperationFilterInput = {
    eq?: ValueOf<typeof EventType> | null | undefined;
    neq?: ValueOf<typeof EventType> | null | undefined;
    in?: (ValueOf<typeof EventType>)[] | null | undefined;
    nin?: (ValueOf<typeof EventType>)[] | null | undefined;
};

type SmsCampaignFeedFilterInput = {
    and?: (SmsCampaignFeedFilterInput)[] | null | undefined;
    or?: (SmsCampaignFeedFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: SmsCampaignFilterInput | null | undefined;
    activity?: CampaignEventOperationFilterInput | null | undefined;
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

type SmsCampaignFeedSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: SmsCampaignSortInput | null | undefined;
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

type SmsCampaignRunFilterInput = {
    and?: (SmsCampaignRunFilterInput)[] | null | undefined;
    or?: (SmsCampaignRunFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: SmsCampaignFilterInput | null | undefined;
    numberOfSmses?: IntOperationFilterInput | null | undefined;
    query?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type SmsCampaignRunSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: SmsCampaignSortInput | null | undefined;
    numberOfSmses?: ValueOf<typeof SortEnumType> | null | undefined;
    query?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type EmailCampaignFilterInput = {
    and?: (EmailCampaignFilterInput)[] | null | undefined;
    or?: (EmailCampaignFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    subject?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    emails?: ListStringOperationFilterInput | null | undefined;
    schools?: ListLongOperationFilterInput | null | undefined;
    occupations?: ListLongOperationFilterInput | null | undefined;
    regionsOfResidence?: ListLongOperationFilterInput | null | undefined;
    dataFileUrl?: StringOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    frequency?: CampaignFrequencyOperationFilterInput | null | undefined;
    startDate?: DateOperationFilterInput | null | undefined;
    endDate?: DateOperationFilterInput | null | undefined;
    time?: TimeSpanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type EmailCampaignSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    subject?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    dataFileUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    frequency?: ValueOf<typeof SortEnumType> | null | undefined;
    startDate?: ValueOf<typeof SortEnumType> | null | undefined;
    endDate?: ValueOf<typeof SortEnumType> | null | undefined;
    time?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type EmailCampaignFeedFilterInput = {
    and?: (EmailCampaignFeedFilterInput)[] | null | undefined;
    or?: (EmailCampaignFeedFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: EmailCampaignFilterInput | null | undefined;
    activity?: CampaignEventOperationFilterInput | null | undefined;
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

type EmailCampaignFeedSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: EmailCampaignSortInput | null | undefined;
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

type EmailCampaignRunFilterInput = {
    and?: (EmailCampaignRunFilterInput)[] | null | undefined;
    or?: (EmailCampaignRunFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: EmailCampaignFilterInput | null | undefined;
    numberOfEmails?: IntOperationFilterInput | null | undefined;
    query?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type EmailCampaignRunSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: EmailCampaignSortInput | null | undefined;
    numberOfEmails?: ValueOf<typeof SortEnumType> | null | undefined;
    query?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type FbCampaignFilterInput = {
    and?: (FbCampaignFilterInput)[] | null | undefined;
    or?: (FbCampaignFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    frequency?: CampaignFrequencyOperationFilterInput | null | undefined;
    startDate?: DateOperationFilterInput | null | undefined;
    endDate?: DateOperationFilterInput | null | undefined;
    time?: TimeSpanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type FbCampaignSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    frequency?: ValueOf<typeof SortEnumType> | null | undefined;
    startDate?: ValueOf<typeof SortEnumType> | null | undefined;
    endDate?: ValueOf<typeof SortEnumType> | null | undefined;
    time?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type FbCampaignFeedFilterInput = {
    and?: (FbCampaignFeedFilterInput)[] | null | undefined;
    or?: (FbCampaignFeedFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: FbCampaignFilterInput | null | undefined;
    activity?: CampaignEventOperationFilterInput | null | undefined;
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

type FbCampaignFeedSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: FbCampaignSortInput | null | undefined;
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

type FbCampaignRunFilterInput = {
    and?: (FbCampaignRunFilterInput)[] | null | undefined;
    or?: (FbCampaignRunFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: FbCampaignFilterInput | null | undefined;
    numberOfViews?: IntOperationFilterInput | null | undefined;
    query?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type FbCampaignRunSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: FbCampaignSortInput | null | undefined;
    numberOfViews?: ValueOf<typeof SortEnumType> | null | undefined;
    query?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type TwitterCampaignFilterInput = {
    and?: (TwitterCampaignFilterInput)[] | null | undefined;
    or?: (TwitterCampaignFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    message?: StringOperationFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    frequency?: CampaignFrequencyOperationFilterInput | null | undefined;
    startDate?: DateOperationFilterInput | null | undefined;
    endDate?: DateOperationFilterInput | null | undefined;
    time?: TimeSpanOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type TwitterCampaignSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    message?: ValueOf<typeof SortEnumType> | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    frequency?: ValueOf<typeof SortEnumType> | null | undefined;
    startDate?: ValueOf<typeof SortEnumType> | null | undefined;
    endDate?: ValueOf<typeof SortEnumType> | null | undefined;
    time?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type TwitterCampaignFeedFilterInput = {
    and?: (TwitterCampaignFeedFilterInput)[] | null | undefined;
    or?: (TwitterCampaignFeedFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: TwitterCampaignFilterInput | null | undefined;
    activity?: CampaignEventOperationFilterInput | null | undefined;
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

type TwitterCampaignFeedSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: TwitterCampaignSortInput | null | undefined;
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

type TwitterCampaignRunFilterInput = {
    and?: (TwitterCampaignRunFilterInput)[] | null | undefined;
    or?: (TwitterCampaignRunFilterInput)[] | null | undefined;
    campaignId?: LongOperationFilterInput | null | undefined;
    campaign?: TwitterCampaignFilterInput | null | undefined;
    numberOfViews?: IntOperationFilterInput | null | undefined;
    query?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type TwitterCampaignRunSortInput = {
    campaignId?: ValueOf<typeof SortEnumType> | null | undefined;
    campaign?: TwitterCampaignSortInput | null | undefined;
    numberOfViews?: ValueOf<typeof SortEnumType> | null | undefined;
    query?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
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

type DepartmentFilterInput = {
    and?: (DepartmentFilterInput)[] | null | undefined;
    or?: (DepartmentFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    edifyCountryId?: LongOperationFilterInput | null | undefined;
    edifyCountry?: EdifyCountryFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type DepartmentSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    edifyCountryId?: ValueOf<typeof SortEnumType> | null | undefined;
    edifyCountry?: EdifyCountrySortInput | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type NewsEntryFilterInput = {
    and?: (NewsEntryFilterInput)[] | null | undefined;
    or?: (NewsEntryFilterInput)[] | null | undefined;
    label?: StringOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    image?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type NewsEntrySortInput = {
    label?: ValueOf<typeof SortEnumType> | null | undefined;
    description?: ValueOf<typeof SortEnumType> | null | undefined;
    image?: ValueOf<typeof SortEnumType> | null | undefined;
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

type AlumniEventTypeFilterInput = {
    and?: (AlumniEventTypeFilterInput)[] | null | undefined;
    or?: (AlumniEventTypeFilterInput)[] | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    notes?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type AlumniEventTypeSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    notes?: ValueOf<typeof SortEnumType> | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
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

type AlumniEventFilterInput = {
    and?: (AlumniEventFilterInput)[] | null | undefined;
    or?: (AlumniEventFilterInput)[] | null | undefined;
    typeId?: LongOperationFilterInput | null | undefined;
    type?: AlumniEventTypeFilterInput | null | undefined;
    name?: StringOperationFilterInput | null | undefined;
    startDate?: DateTimeOperationFilterInput | null | undefined;
    endDate?: DateTimeOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    location?: StringOperationFilterInput | null | undefined;
    imageUrl?: StringOperationFilterInput | null | undefined;
    article?: StringOperationFilterInput | null | undefined;
    publish?: BooleanOperationFilterInput | null | undefined;
    datePublished?: DateTimeOperationFilterInput | null | undefined;
    permitSignup?: BooleanOperationFilterInput | null | undefined;
    signupStarts?: DateTimeOperationFilterInput | null | undefined;
    signupEnds?: DateTimeOperationFilterInput | null | undefined;
    assessmentStarts?: DateTimeOperationFilterInput | null | undefined;
    duration?: StringOperationFilterInput | null | undefined;
    smsTemplateId?: LongOperationFilterInput | null | undefined;
    smsTemplate?: SmsTemplateFilterInput | null | undefined;
    countryId?: LongOperationFilterInput | null | undefined;
    country?: EdifyCountryFilterInput | null | undefined;
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

type AlumniEventSortInput = {
    typeId?: ValueOf<typeof SortEnumType> | null | undefined;
    type?: AlumniEventTypeSortInput | null | undefined;
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    startDate?: ValueOf<typeof SortEnumType> | null | undefined;
    endDate?: ValueOf<typeof SortEnumType> | null | undefined;
    description?: ValueOf<typeof SortEnumType> | null | undefined;
    location?: ValueOf<typeof SortEnumType> | null | undefined;
    imageUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    article?: ValueOf<typeof SortEnumType> | null | undefined;
    publish?: ValueOf<typeof SortEnumType> | null | undefined;
    datePublished?: ValueOf<typeof SortEnumType> | null | undefined;
    permitSignup?: ValueOf<typeof SortEnumType> | null | undefined;
    signupStarts?: ValueOf<typeof SortEnumType> | null | undefined;
    signupEnds?: ValueOf<typeof SortEnumType> | null | undefined;
    assessmentStarts?: ValueOf<typeof SortEnumType> | null | undefined;
    duration?: ValueOf<typeof SortEnumType> | null | undefined;
    smsTemplateId?: ValueOf<typeof SortEnumType> | null | undefined;
    smsTemplate?: SmsTemplateSortInput | null | undefined;
    countryId?: ValueOf<typeof SortEnumType> | null | undefined;
    country?: EdifyCountrySortInput | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
};

type EventRegistrationFilterInput = {
    and?: (EventRegistrationFilterInput)[] | null | undefined;
    or?: (EventRegistrationFilterInput)[] | null | undefined;
    eventId?: LongOperationFilterInput | null | undefined;
    alumniId?: LongOperationFilterInput | null | undefined;
    status?: StringOperationFilterInput | null | undefined;
    duration?: StringOperationFilterInput | null | undefined;
    cvUrl?: StringOperationFilterInput | null | undefined;
    files?: StringOperationFilterInput | null | undefined;
    registrationData?: StringOperationFilterInput | null | undefined;
    assessmentData?: StringOperationFilterInput | null | undefined;
    reviewData?: StringOperationFilterInput | null | undefined;
    dateRegistered?: DateTimeOperationFilterInput | null | undefined;
    attended?: BooleanOperationFilterInput | null | undefined;
    eventEntry?: AlumniEventFilterInput | null | undefined;
    alumni?: AlumniFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type EventRegistrationSortInput = {
    eventId?: ValueOf<typeof SortEnumType> | null | undefined;
    alumniId?: ValueOf<typeof SortEnumType> | null | undefined;
    status?: ValueOf<typeof SortEnumType> | null | undefined;
    duration?: ValueOf<typeof SortEnumType> | null | undefined;
    cvUrl?: ValueOf<typeof SortEnumType> | null | undefined;
    files?: ValueOf<typeof SortEnumType> | null | undefined;
    registrationData?: ValueOf<typeof SortEnumType> | null | undefined;
    assessmentData?: ValueOf<typeof SortEnumType> | null | undefined;
    reviewData?: ValueOf<typeof SortEnumType> | null | undefined;
    dateRegistered?: ValueOf<typeof SortEnumType> | null | undefined;
    attended?: ValueOf<typeof SortEnumType> | null | undefined;
    eventEntry?: AlumniEventSortInput | null | undefined;
    alumni?: AlumniSortInput | null | undefined;
    createdBy?: ValueOf<typeof SortEnumType> | null | undefined;
    createdOn?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedBy?: ValueOf<typeof SortEnumType> | null | undefined;
    updatedOn?: ValueOf<typeof SortEnumType> | null | undefined;
    revision?: ValueOf<typeof SortEnumType> | null | undefined;
    id?: ValueOf<typeof SortEnumType> | null | undefined;
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
    username?: StringOperationFilterInput | null | undefined;
    password?: StringOperationFilterInput | null | undefined;
    password2?: StringOperationFilterInput | null | undefined;
    organization?: StringOperationFilterInput | null | undefined;
    phoneNumber?: StringOperationFilterInput | null | undefined;
    ghanaCardNumber?: StringOperationFilterInput | null | undefined;
    email?: StringOperationFilterInput | null | undefined;
    address?: StringOperationFilterInput | null | undefined;
    employeeDetails?: StringOperationFilterInput | null | undefined;
    operationalArea?: StringOperationFilterInput | null | undefined;
    commencementYear?: StringOperationFilterInput | null | undefined;
    redgNo?: StringOperationFilterInput | null | undefined;
    category?: StringOperationFilterInput | null | undefined;
    additionalInformation?: StringOperationFilterInput | null | undefined;
    productMaterialCategory?: StringOperationFilterInput | null | undefined;
    description?: StringOperationFilterInput | null | undefined;
    membershipDeclaration?: StringOperationFilterInput | null | undefined;
    registeredBy?: StringOperationFilterInput | null | undefined;
    status?: MembershipStatusOperationFilterInput | null | undefined;
    reason?: StringOperationFilterInput | null | undefined;
    createdBy?: StringOperationFilterInput | null | undefined;
    createdOn?: DateTimeOperationFilterInput | null | undefined;
    updatedBy?: StringOperationFilterInput | null | undefined;
    updatedOn?: DateTimeOperationFilterInput | null | undefined;
    revision?: IntOperationFilterInput | null | undefined;
    id?: LongOperationFilterInput | null | undefined;
};

type MemberSortInput = {
    name?: ValueOf<typeof SortEnumType> | null | undefined;
    username?: ValueOf<typeof SortEnumType> | null | undefined;
    password?: ValueOf<typeof SortEnumType> | null | undefined;
    password2?: ValueOf<typeof SortEnumType> | null | undefined;
    organization?: ValueOf<typeof SortEnumType> | null | undefined;
    phoneNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    ghanaCardNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    email?: ValueOf<typeof SortEnumType> | null | undefined;
    address?: ValueOf<typeof SortEnumType> | null | undefined;
    employeeDetails?: ValueOf<typeof SortEnumType> | null | undefined;
    operationalArea?: ValueOf<typeof SortEnumType> | null | undefined;
    commencementYear?: ValueOf<typeof SortEnumType> | null | undefined;
    redgNo?: ValueOf<typeof SortEnumType> | null | undefined;
    category?: ValueOf<typeof SortEnumType> | null | undefined;
    additionalInformation?: ValueOf<typeof SortEnumType> | null | undefined;
    productMaterialCategory?: ValueOf<typeof SortEnumType> | null | undefined;
    description?: ValueOf<typeof SortEnumType> | null | undefined;
    membershipDeclaration?: ValueOf<typeof SortEnumType> | null | undefined;
    registeredBy?: ValueOf<typeof SortEnumType> | null | undefined;
    status?: ValueOf<typeof SortEnumType> | null | undefined;
    reason?: ValueOf<typeof SortEnumType> | null | undefined;
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
    contactNumber?: ValueOf<typeof SortEnumType> | null | undefined;
    departmentId?: ValueOf<typeof SortEnumType> | null | undefined;
    department?: DepartmentSortInput | null | undefined;
    statusId?: ValueOf<typeof SortEnumType> | null | undefined;
    status?: UserStatusSortInput | null | undefined;
    roleId?: ValueOf<typeof SortEnumType> | null | undefined;
    role?: RoleSortInput | null | undefined;
    active?: ValueOf<typeof SortEnumType> | null | undefined;
    username?: ValueOf<typeof SortEnumType> | null | undefined;
    type?: ValueOf<typeof SortEnumType> | null | undefined;
    activeDashboardId?: ValueOf<typeof SortEnumType> | null | undefined;
    activeDashboard?: DashboardSortInput | null | undefined;
    defaultCountryId?: ValueOf<typeof SortEnumType> | null | undefined;
    defaultCountry?: EdifyCountrySortInput | null | undefined;
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
    contactNumber?: StringOperationFilterInput | null | undefined;
    departmentId?: LongOperationFilterInput | null | undefined;
    department?: DepartmentFilterInput | null | undefined;
    statusId?: LongOperationFilterInput | null | undefined;
    status?: UserStatusFilterInput | null | undefined;
    roleId?: LongOperationFilterInput | null | undefined;
    role?: RoleFilterInput | null | undefined;
    active?: BooleanOperationFilterInput | null | undefined;
    username?: StringOperationFilterInput | null | undefined;
    type?: UserTypeOperationFilterInput | null | undefined;
    activeDashboardId?: LongOperationFilterInput | null | undefined;
    activeDashboard?: DashboardFilterInput | null | undefined;
    countryIds?: ListLongOperationFilterInput | null | undefined;
    defaultCountryId?: LongOperationFilterInput | null | undefined;
    defaultCountry?: EdifyCountryFilterInput | null | undefined;
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
        Alumni: {
            idFields: {
                id: number;
            };
            fields: {
                firstName: {
                    type: string;
                    args: never;
                };
                otherNames: {
                    type: string;
                    args: never;
                };
                surname: {
                    type: string;
                    args: never;
                };
                dateOfBirth: {
                    type: string | null;
                    args: never;
                };
                profilePictureUrl: {
                    type: string | null;
                    args: never;
                };
                phoneNumber1: {
                    type: string;
                    args: never;
                };
                phoneNumber2: {
                    type: string;
                    args: never;
                };
                whatsAppNumber: {
                    type: string;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                basicSchoolCompletedId: {
                    type: number;
                    args: never;
                };
                basicSchoolCompleted: {
                    type: Record<CacheTypeDef, "School">;
                    args: never;
                };
                yearCompleted: {
                    type: number;
                    args: never;
                };
                currentStatus: {
                    type: string | null;
                    args: never;
                };
                gender: {
                    type: string | null;
                    args: never;
                };
                otherStatus: {
                    type: string | null;
                    args: never;
                };
                occupationId: {
                    type: number | null;
                    args: never;
                };
                occupation: {
                    type: Record<CacheTypeDef, "Occupation"> | null;
                    args: never;
                };
                currentInstitution: {
                    type: string | null;
                    args: never;
                };
                category: {
                    type: string | null;
                    args: never;
                };
                otherCategory: {
                    type: string | null;
                    args: never;
                };
                programOfStudy: {
                    type: string | null;
                    args: never;
                };
                currentYear: {
                    type: string | null;
                    args: never;
                };
                currentPlaceOfWork: {
                    type: string | null;
                    args: never;
                };
                businessType: {
                    type: string | null;
                    args: never;
                };
                businessDuration: {
                    type: string | null;
                    args: never;
                };
                countryId: {
                    type: number | null;
                    args: never;
                };
                country: {
                    type: Record<CacheTypeDef, "Country"> | null;
                    args: never;
                };
                regionOfResidenceId: {
                    type: number | null;
                    args: never;
                };
                regionOfResidence: {
                    type: Record<CacheTypeDef, "Region"> | null;
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
                isProfileCompleted: {
                    type: boolean | null;
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
        AlumniEvent: {
            idFields: {
                id: number;
            };
            fields: {
                typeId: {
                    type: number;
                    args: never;
                };
                type: {
                    type: Record<CacheTypeDef, "AlumniEventType">;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                startDate: {
                    type: Date;
                    args: never;
                };
                endDate: {
                    type: Date;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                location: {
                    type: string | null;
                    args: never;
                };
                imageUrl: {
                    type: string | null;
                    args: never;
                };
                article: {
                    type: string | null;
                    args: never;
                };
                publish: {
                    type: boolean;
                    args: never;
                };
                datePublished: {
                    type: Date | null;
                    args: never;
                };
                permitSignup: {
                    type: boolean;
                    args: never;
                };
                signupStarts: {
                    type: Date | null;
                    args: never;
                };
                signupEnds: {
                    type: Date | null;
                    args: never;
                };
                assessmentStarts: {
                    type: Date | null;
                    args: never;
                };
                duration: {
                    type: string | null;
                    args: never;
                };
                smsTemplateId: {
                    type: number | null;
                    args: never;
                };
                smsTemplate: {
                    type: Record<CacheTypeDef, "SmsTemplate"> | null;
                    args: never;
                };
                countryId: {
                    type: number;
                    args: never;
                };
                country: {
                    type: Record<CacheTypeDef, "EdifyCountry">;
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
        AlumniEventType: {
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
        AlumnisCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Alumni">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
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
        CountriesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Country">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        Country: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
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
        CreateAlumniEventPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateAlumniPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
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
        CreateCountryPayload: {
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
        CreateDistrictPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateEdifyCountryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateEmailCampaignPayload: {
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
        CreateEventRegistrationNewPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateEventRegistrationPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateEventTypePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateFbCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateLeaderPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateLeadershipRolePayload: {
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
        CreateNewsEntryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateOccupationPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateRegionPayload: {
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
        CreateSchoolPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateSmsCampaignPayload: {
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
        CreateStoryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        CreateTwitterCampaignPayload: {
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
        DeleteAlumniEventPayload: {
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
        DeleteCountryPayload: {
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
        DeleteDistrictPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteEdifyCountryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteEmailCampaignPayload: {
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
        DeleteEventRegistrationPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteEventTypePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteFbCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteLeaderPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteLeadershipRolePayload: {
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
        DeleteNewsEntryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteOccupationPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteRegionPayload: {
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
        DeleteSchoolPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteSmsCampaignPayload: {
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
        DeleteStoryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DeleteTwitterCampaignPayload: {
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
                edifyCountryId: {
                    type: number;
                    args: never;
                };
                edifyCountry: {
                    type: Record<CacheTypeDef, "EdifyCountry">;
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
        DepartmentsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Department">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        District: {
            idFields: {
                id: number;
            };
            fields: {
                regionId: {
                    type: number | null;
                    args: never;
                };
                region: {
                    type: Record<CacheTypeDef, "Region"> | null;
                    args: never;
                };
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
        DistrictsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "District">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EdifyCountriesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EdifyCountry">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EdifyCountry: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                flagUrl: {
                    type: string | null;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                countryId: {
                    type: number;
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
        EmailCampaign: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
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
                emails: {
                    type: (string)[];
                    args: never;
                };
                schools: {
                    type: (number)[];
                    args: never;
                };
                occupations: {
                    type: (number)[];
                    args: never;
                };
                regionsOfResidence: {
                    type: (number)[];
                    args: never;
                };
                dataFileUrl: {
                    type: string | null;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                frequency: {
                    type: CampaignFrequency;
                    args: never;
                };
                startDate: {
                    type: Date;
                    args: never;
                };
                endDate: {
                    type: Date | null;
                    args: never;
                };
                time: {
                    type: any;
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
        EmailCampaignFeed: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "EmailCampaign">;
                    args: never;
                };
                activity: {
                    type: CampaignEvent;
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
        EmailCampaignFeedsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EmailCampaignFeed">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailCampaignRun: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "EmailCampaign">;
                    args: never;
                };
                numberOfEmails: {
                    type: number;
                    args: never;
                };
                query: {
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
        EmailCampaignRunsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EmailCampaignRun">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailCampaignsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EmailCampaign">)[] | null;
                    args: never;
                };
                totalCount: {
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
        EventEntriesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "AlumniEvent">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        EventRegistration: {
            idFields: {
                id: number;
            };
            fields: {
                eventId: {
                    type: number;
                    args: never;
                };
                alumniId: {
                    type: number;
                    args: never;
                };
                status: {
                    type: string;
                    args: never;
                };
                duration: {
                    type: string | null;
                    args: never;
                };
                cvUrl: {
                    type: string | null;
                    args: never;
                };
                files: {
                    type: string | null;
                    args: never;
                };
                registrationData: {
                    type: string | null;
                    args: never;
                };
                assessmentData: {
                    type: string | null;
                    args: never;
                };
                reviewData: {
                    type: string | null;
                    args: never;
                };
                dateRegistered: {
                    type: Date | null;
                    args: never;
                };
                attended: {
                    type: boolean | null;
                    args: never;
                };
                eventEntry: {
                    type: Record<CacheTypeDef, "AlumniEvent">;
                    args: never;
                };
                alumni: {
                    type: Record<CacheTypeDef, "Alumni">;
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
        EventTypesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "AlumniEventType">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        FbCampaign: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                frequency: {
                    type: CampaignFrequency;
                    args: never;
                };
                startDate: {
                    type: Date;
                    args: never;
                };
                endDate: {
                    type: Date | null;
                    args: never;
                };
                time: {
                    type: any;
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
        FbCampaignFeed: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "FbCampaign">;
                    args: never;
                };
                activity: {
                    type: CampaignEvent;
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
        FbCampaignFeedsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "FbCampaignFeed">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        FbCampaignRun: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "FbCampaign">;
                    args: never;
                };
                numberOfViews: {
                    type: number;
                    args: never;
                };
                query: {
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
        FbCampaignRunsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "FbCampaignRun">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        FbCampaignsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "FbCampaign">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        FetchEventRegistrationsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "EventRegistration">)[] | null;
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
        Leader: {
            idFields: {
                id: number;
            };
            fields: {
                memberId: {
                    type: number;
                    args: never;
                };
                member: {
                    type: Record<CacheTypeDef, "Alumni">;
                    args: never;
                };
                position: {
                    type: string;
                    args: never;
                };
                photoUrl: {
                    type: string | null;
                    args: never;
                };
                startDate: {
                    type: string | null;
                    args: never;
                };
                endDate: {
                    type: string | null;
                    args: never;
                };
                article: {
                    type: string | null;
                    args: never;
                };
                notes: {
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
        LeadersCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Leader">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        LeadershipRole: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                notes: {
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
        LeadershipRolesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "LeadershipRole">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
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
                    type: string;
                    args: never;
                };
                employeeDetails: {
                    type: string | null;
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
                membershipDeclaration: {
                    type: string | null;
                    args: never;
                };
                registeredBy: {
                    type: string | null;
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
        NewsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "NewsEntry">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        NewsEntry: {
            idFields: {
                id: number;
            };
            fields: {
                label: {
                    type: string;
                    args: never;
                };
                description: {
                    type: string;
                    args: never;
                };
                image: {
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
        Occupation: {
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
        OccupationsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Occupation">)[] | null;
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
                alumnis: {
                    type: Record<CacheTypeDef, "AlumnisCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: AlumniFilterInput | null | undefined;
                        order?: (AlumniSortInput)[] | null | undefined;
                    };
                };
                leadershipRoles: {
                    type: Record<CacheTypeDef, "LeadershipRolesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: LeadershipRoleFilterInput | null | undefined;
                        order?: (LeadershipRoleSortInput)[] | null | undefined;
                    };
                };
                leaders: {
                    type: Record<CacheTypeDef, "LeadersCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: LeaderFilterInput | null | undefined;
                        order?: (LeaderSortInput)[] | null | undefined;
                    };
                };
                stories: {
                    type: Record<CacheTypeDef, "StoriesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: StoryFilterInput | null | undefined;
                        order?: (StorySortInput)[] | null | undefined;
                    };
                };
                numberOfStudents: {
                    type: number;
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                numberWithPhoneNumbers: {
                    type: number;
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                numberWithWhatsappNumbers: {
                    type: number;
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                numberWithEmail: {
                    type: number;
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                numberOfSchoolsCovered: {
                    type: number;
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                breakdownByOccupation: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                breakdownByYearCompleted: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                breakdownByBasicSchool: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                breakdownByCountryAndRegion: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry2">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                breakdownByCountry: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                alumniYears: {
                    type: (number)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                attendedEventsCount: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                registeredEventsCount: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                missedEventsCount: {
                    type: (Record<CacheTypeDef, "DashboardIntEntry">)[];
                    args: {
                        edifyCountryId?: number | null | undefined;
                    };
                };
                smsCampaigns: {
                    type: Record<CacheTypeDef, "SmsCampaignsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: SmsCampaignFilterInput | null | undefined;
                        order?: (SmsCampaignSortInput)[] | null | undefined;
                    };
                };
                smsCampaignFeeds: {
                    type: Record<CacheTypeDef, "SmsCampaignFeedsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: SmsCampaignFeedFilterInput | null | undefined;
                        order?: (SmsCampaignFeedSortInput)[] | null | undefined;
                    };
                };
                smsCampaignRuns: {
                    type: Record<CacheTypeDef, "SmsCampaignRunsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: SmsCampaignRunFilterInput | null | undefined;
                        order?: (SmsCampaignRunSortInput)[] | null | undefined;
                    };
                };
                emailCampaigns: {
                    type: Record<CacheTypeDef, "EmailCampaignsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: EmailCampaignFilterInput | null | undefined;
                        order?: (EmailCampaignSortInput)[] | null | undefined;
                    };
                };
                emailCampaignFeeds: {
                    type: Record<CacheTypeDef, "EmailCampaignFeedsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: EmailCampaignFeedFilterInput | null | undefined;
                        order?: (EmailCampaignFeedSortInput)[] | null | undefined;
                    };
                };
                emailCampaignRuns: {
                    type: Record<CacheTypeDef, "EmailCampaignRunsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: EmailCampaignRunFilterInput | null | undefined;
                        order?: (EmailCampaignRunSortInput)[] | null | undefined;
                    };
                };
                fbCampaigns: {
                    type: Record<CacheTypeDef, "FbCampaignsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: FbCampaignFilterInput | null | undefined;
                        order?: (FbCampaignSortInput)[] | null | undefined;
                    };
                };
                fbCampaignFeeds: {
                    type: Record<CacheTypeDef, "FbCampaignFeedsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: FbCampaignFeedFilterInput | null | undefined;
                        order?: (FbCampaignFeedSortInput)[] | null | undefined;
                    };
                };
                fbCampaignRuns: {
                    type: Record<CacheTypeDef, "FbCampaignRunsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: FbCampaignRunFilterInput | null | undefined;
                        order?: (FbCampaignRunSortInput)[] | null | undefined;
                    };
                };
                twitterCampaigns: {
                    type: Record<CacheTypeDef, "TwitterCampaignsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: TwitterCampaignFilterInput | null | undefined;
                        order?: (TwitterCampaignSortInput)[] | null | undefined;
                    };
                };
                twitterCampaignFeeds: {
                    type: Record<CacheTypeDef, "TwitterCampaignFeedsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: TwitterCampaignFeedFilterInput | null | undefined;
                        order?: (TwitterCampaignFeedSortInput)[] | null | undefined;
                    };
                };
                twitterCampaignRuns: {
                    type: Record<CacheTypeDef, "TwitterCampaignRunsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: TwitterCampaignRunFilterInput | null | undefined;
                        order?: (TwitterCampaignRunSortInput)[] | null | undefined;
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
                departments: {
                    type: Record<CacheTypeDef, "DepartmentsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: DepartmentFilterInput | null | undefined;
                        order?: (DepartmentSortInput)[] | null | undefined;
                    };
                };
                schools: {
                    type: Record<CacheTypeDef, "SchoolsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: SchoolFilterInput | null | undefined;
                        order?: (SchoolSortInput)[] | null | undefined;
                    };
                };
                edifyCountries: {
                    type: Record<CacheTypeDef, "EdifyCountriesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: EdifyCountryFilterInput | null | undefined;
                        order?: (EdifyCountrySortInput)[] | null | undefined;
                    };
                };
                occupations: {
                    type: Record<CacheTypeDef, "OccupationsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: OccupationFilterInput | null | undefined;
                        order?: (OccupationSortInput)[] | null | undefined;
                    };
                };
                countries: {
                    type: Record<CacheTypeDef, "CountriesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: CountryFilterInput | null | undefined;
                        order?: (CountrySortInput)[] | null | undefined;
                    };
                };
                regions: {
                    type: Record<CacheTypeDef, "RegionsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: RegionFilterInput | null | undefined;
                        order?: (RegionSortInput)[] | null | undefined;
                    };
                };
                districts: {
                    type: Record<CacheTypeDef, "DistrictsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: DistrictFilterInput | null | undefined;
                        order?: (DistrictSortInput)[] | null | undefined;
                    };
                };
                news: {
                    type: Record<CacheTypeDef, "NewsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: NewsEntryFilterInput | null | undefined;
                        order?: (NewsEntrySortInput)[] | null | undefined;
                    };
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
                eventTypes: {
                    type: Record<CacheTypeDef, "EventTypesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: AlumniEventTypeFilterInput | null | undefined;
                        order?: (AlumniEventTypeSortInput)[] | null | undefined;
                    };
                };
                eventEntries: {
                    type: Record<CacheTypeDef, "EventEntriesCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: AlumniEventFilterInput | null | undefined;
                        order?: (AlumniEventSortInput)[] | null | undefined;
                    };
                };
                fetchEventRegistrations: {
                    type: Record<CacheTypeDef, "FetchEventRegistrationsCollectionSegment"> | null;
                    args: {
                        skip?: number | null | undefined;
                        take?: number | null | undefined;
                        where?: EventRegistrationFilterInput | null | undefined;
                        order?: (EventRegistrationSortInput)[] | null | undefined;
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
        Region: {
            idFields: {
                id: number;
            };
            fields: {
                countryId: {
                    type: number;
                    args: never;
                };
                country: {
                    type: Record<CacheTypeDef, "Country">;
                    args: never;
                };
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
        RegionsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Region">)[] | null;
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
        ResumeEmailCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ResumeFbCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ResumeSmsCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ResumeTwitterCampaignPayload: {
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
        School: {
            idFields: {
                id: number;
            };
            fields: {
                edifyCountryId: {
                    type: number;
                    args: never;
                };
                edifyCountry: {
                    type: Record<CacheTypeDef, "EdifyCountry">;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                logoUrl: {
                    type: string | null;
                    args: never;
                };
                districtId: {
                    type: number | null;
                    args: never;
                };
                district: {
                    type: Record<CacheTypeDef, "District"> | null;
                    args: never;
                };
                contactPerson: {
                    type: string;
                    args: never;
                };
                contactPhoneNumber1: {
                    type: string;
                    args: never;
                };
                contactPhoneNumber2: {
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
        SchoolsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "School">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
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
        SetActiveEdifyCountryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        SmsCampaign: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                phoneNumbers: {
                    type: (string)[];
                    args: never;
                };
                schools: {
                    type: (number)[];
                    args: never;
                };
                occupations: {
                    type: (number)[];
                    args: never;
                };
                regionsOfResidence: {
                    type: (number)[];
                    args: never;
                };
                dataFileUrl: {
                    type: string | null;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                frequency: {
                    type: CampaignFrequency;
                    args: never;
                };
                startDate: {
                    type: Date;
                    args: never;
                };
                endDate: {
                    type: Date | null;
                    args: never;
                };
                time: {
                    type: any;
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
        SmsCampaignFeed: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "SmsCampaign">;
                    args: never;
                };
                activity: {
                    type: CampaignEvent;
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
        SmsCampaignFeedsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "SmsCampaignFeed">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SmsCampaignRun: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "SmsCampaign">;
                    args: never;
                };
                numberOfSmses: {
                    type: number;
                    args: never;
                };
                query: {
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
        SmsCampaignRunsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "SmsCampaignRun">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        SmsCampaignsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "SmsCampaign">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
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
        StoriesCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "Story">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        Story: {
            idFields: {
                id: number;
            };
            fields: {
                title: {
                    type: string;
                    args: never;
                };
                memberId: {
                    type: number;
                    args: never;
                };
                member: {
                    type: Record<CacheTypeDef, "Alumni">;
                    args: never;
                };
                email: {
                    type: string | null;
                    args: never;
                };
                author: {
                    type: string | null;
                    args: never;
                };
                photoUrl: {
                    type: string | null;
                    args: never;
                };
                currentStatus: {
                    type: string | null;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                article: {
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
        SuspendEmailCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        SuspendFbCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        SuspendSmsCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        SuspendTwitterCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        TwitterCampaign: {
            idFields: {
                id: number;
            };
            fields: {
                name: {
                    type: string;
                    args: never;
                };
                message: {
                    type: string;
                    args: never;
                };
                active: {
                    type: boolean;
                    args: never;
                };
                notes: {
                    type: string;
                    args: never;
                };
                frequency: {
                    type: CampaignFrequency;
                    args: never;
                };
                startDate: {
                    type: Date;
                    args: never;
                };
                endDate: {
                    type: Date | null;
                    args: never;
                };
                time: {
                    type: any;
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
        TwitterCampaignFeed: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "TwitterCampaign">;
                    args: never;
                };
                activity: {
                    type: CampaignEvent;
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
        TwitterCampaignFeedsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "TwitterCampaignFeed">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        TwitterCampaignRun: {
            idFields: {
                id: number;
            };
            fields: {
                campaignId: {
                    type: number;
                    args: never;
                };
                campaign: {
                    type: Record<CacheTypeDef, "TwitterCampaign">;
                    args: never;
                };
                numberOfViews: {
                    type: number;
                    args: never;
                };
                query: {
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
        TwitterCampaignRunsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "TwitterCampaignRun">)[] | null;
                    args: never;
                };
                totalCount: {
                    type: number;
                    args: never;
                };
            };
            fragments: [];
        };
        TwitterCampaignsCollectionSegment: {
            idFields: never;
            fields: {
                pageInfo: {
                    type: Record<CacheTypeDef, "CollectionSegmentInfo">;
                    args: never;
                };
                items: {
                    type: (Record<CacheTypeDef, "TwitterCampaign">)[] | null;
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
        UpdateAlumniEventDatePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateAlumniEventPayload: {
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
        UpdateCountryPayload: {
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
        UpdateDistrictPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateEdifyCountryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateEmailCampaignPayload: {
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
        UpdateEventRegistrationPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateEventTypePayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateFbCampaignPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateLeaderPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateLeadershipRolePayload: {
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
        UpdateNewsEntryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateOccupationPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateRegionPayload: {
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
        UpdateSchoolPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateSmsCampaignPayload: {
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
        UpdateStoryPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UpdateTwitterCampaignPayload: {
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
        UploadAlumniPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadEventAttendeesNewPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadEventAttendeesPayload: {
            idFields: never;
            fields: {
                callResult: {
                    type: Record<CacheTypeDef, "CallResult"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadSchoolsPayload: {
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
                contactNumber: {
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
                countryIds: {
                    type: (number)[];
                    args: never;
                };
                defaultCountryId: {
                    type: number | null;
                    args: never;
                };
                defaultCountry: {
                    type: Record<CacheTypeDef, "EdifyCountry"> | null;
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
    queries: [[MembersStore, Members$result, Members$input]];
};