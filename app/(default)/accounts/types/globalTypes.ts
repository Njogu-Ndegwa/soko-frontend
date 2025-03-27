/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccountActions {
  ACTIVATE = "ACTIVATE",
  CREATE = "CREATE",
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
  FREEZE = "FREEZE",
  INBOUND_MESSAGE = "INBOUND_MESSAGE",
  OUTBOUND_MESSAGE = "OUTBOUND_MESSAGE",
  RESOLVE = "RESOLVE",
  SUSPEND = "SUSPEND",
}

export enum AccountStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  SUSPENDED = "SUSPENDED",
}

export enum ActionScope {
  CLIENT = "CLIENT",
  DEVELOPMENT = "DEVELOPMENT",
  GLOBAL = "GLOBAL",
  MANAGEMENT = "MANAGEMENT",
  SYSTEM = "SYSTEM",
}

export enum ActorTypes {
  ACCOUNT = "ACCOUNT",
  DEVICE = "DEVICE",
  EVENT = "EVENT",
  ORGANIZATION = "ORGANIZATION",
  PERSON = "PERSON",
  PLACE = "PLACE",
  SOFTWARE = "SOFTWARE",
}

export enum AssetAccountStages {
  ACCOUNT_ACTIVATED = "ACCOUNT_ACTIVATED",
  ACCOUNT_CLOSED = "ACCOUNT_CLOSED",
  ASSET_ACCOUNT_CREATED = "ASSET_ACCOUNT_CREATED",
  ASSET_UNLOCKED = "ASSET_UNLOCKED",
  ASSET_USER_PAIRED = "ASSET_USER_PAIRED",
  PAYPLAN_COMPLETED = "PAYPLAN_COMPLETED",
  PAYPLAN_LOCKED = "PAYPLAN_LOCKED",
}

export enum CodeTypes {
  DAYSCODE = "DAYSCODE",
  FREECODE = "FREECODE",
  JUMPCODE = "JUMPCODE",
  RESETCODE = "RESETCODE",
  SYNCCODE = "SYNCCODE",
}

export enum IntentsEnum {
  KEYCODE = "KEYCODE",
  PAYMENT = "PAYMENT",
  REFUND = "REFUND",
  RESET = "RESET",
  TENPLUSDAYS = "TENPLUSDAYS",
  THREEXDAYS = "THREEXDAYS",
  TWOXDAYS = "TWOXDAYS",
  UNLOCK = "UNLOCK",
}

export enum MessageCourierEnum {
  LIPAY = "LIPAY",
  TELERIVET = "TELERIVET",
}

export enum PersonTypes {
  AGENT = "AGENT",
  CONTACT = "CONTACT",
  CUSTOMER = "CUSTOMER",
  DEVELOPER = "DEVELOPER",
  EMPLOYEE = "EMPLOYEE",
  LOGIN = "LOGIN",
}

export interface ActivityDto {
  action: string;
  datetime: any;
  amount: number;
  notes: string;
}

export interface AddressDto {
  unit: string;
  street: string;
  city: string;
  srpc: string;
  country: string;
  postcode: string;
  locationAddressDto: AddressLocationDto;
}

export interface AddressLocationDto {
  inputAddressLatitude: number;
  inputAddressLongitude: number;
}

export interface AssetAccountMetaDto {
  name: string;
  value: string;
}

export interface ClientRegisterPersonInput {
  clientPersonType?: PersonTypes | null;
  clientPersonName: string;
  clientPersonDescription?: string | null;
  clientContactPerson: PersonContactDto;
  clientPersonAddress: AddressDto;
  clientId?: string | null;
  gender?: string | null;
  details?: DetailDto[] | null;
}

export interface CreateMessageFromTemplateInput {
  messageGroupId: string;
  messageTemplateId: string;
}

export interface CreatePayPlanInput {
  planName?: string | null;
  planDescription: string;
  useUpfront?: boolean | null;
  planDetails?: PlanDetailDto[] | null;
}

export interface CreditAccountDTO {
  customerId: string;
  currency: string;
  balance: number;
  activities?: ActivityDto[] | null;
  totalAmountPaid?: number | null;
}

export interface DetailDto {
  name: string;
  value: string;
}

export interface PairAssetAccountInput {
  clientId: string;
  userId: string;
  credit: CreditAccountDTO;
  itemId: string;
  paySchedule?: PaymentDTO | null;
  paymentPlan?: PayPlanBaseEntityDto | null;
  meta?: AssetAccountMetaDto[] | null;
}

export interface PayPlanBaseEntityDto {
  planName?: string | null;
  planDescription?: string | null;
  useUpfront?: boolean | null;
  planDetails?: PlanDetailDto[] | null;
}

export interface PaymentDTO {
  amount: number;
  datetime: any;
  instruction: string;
}

export interface PaymentInput {
  action: AccountActions;
  datetime: any;
  amount: number;
  notes: string;
}

export interface PersonContactDto {
  phone: string;
  email: string;
  social: string;
}

export interface PersonDto {
  personId: string;
}

export interface PlanDetailDto {
  pName: string;
  pValue: string;
}

export interface UpdateAssetAccountInput {
  assetAccountId: string;
  credit?: CreditAccountDTO | null;
  paySchedule?: PaymentDTO | null;
  paymentPlan?: PayPlanBaseEntityDto | null;
  meta?: AssetAccountMetaDto[] | null;
}

export interface UpdateClientPersonInput {
  personId: string;
  clientPersonType?: PersonTypes | null;
  clientPersonName?: string | null;
  clientPersonDescription?: string | null;
  clientContactPerson?: PersonContactDto | null;
  clientPersonAddress?: AddressDto | null;
  clientId?: string | null;
  details?: DetailDto[] | null;
  gender?: string | null;
}

export interface UpdateMessageGroupInput {
  name: string;
  description: string;
  persons?: PersonDto[] | null;
  distributor?: string | null;
}

export interface UpdateMessageTemplateInput {
  name: string;
  description: string;
  messageBody: string;
  distributor: string;
  intent: IntentsEnum;
  messageCourier?: MessageCourierEnum | null;
}

export interface UpdatePayPlanInput {
  payPlanId: string;
  planName?: string | null;
  planDescription: string;
  useUpfront?: boolean | null;
  planDetails?: PlanDetailDto[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
