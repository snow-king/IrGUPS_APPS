import {Specialty, StudCard} from "./index";

export interface ParentDocument {
  id?: number;
  person_id: number;
  type: number;
  name: string;
  seria: string;
  number: string;
  date: string;
}
export interface Person {
  id: number;
  name1: string;
  name2: string;
  name3: string;
  sex: 0 | 1 | 2;
  fil_id: number;
  abit_id?: number;
  spec_id?: number;
  dob?: string;
  location_birth?: string;
  kladr_kod_birth?: string;
  location_fact?: string;
  kladr_kod_fact?: string;
  location_reg?: string;
  kladr_kod_reg?: string;
  addr_guid_fias?: string;
  house_guid_fias?: string;
  room_guid_fias?: string;
  room_not_fias?: string;
  pass_loc?: string;
  pass_ser?: string;
  pass_num?: string;
  pass_date?: string;
  pass_code_subdivision?: string;
  race?: string;
  country?: number;
  phone?: string;
  qr_token?: string;
  qr_date?: string;
  krsk_id?: string;
  phone_code?: string;
  phone_code_time?: string;
  sert_date?: string;
  sert_pwd?: string;
  pdn_access?: 1 | 0;
  parsec_guid?: string;
  sert_agreement?: 1 | 0;
  token?: string;
  consent_1: null | 1;
  consent_2: null | 1;
  consent_3: null | 1;
  specialty: Specialty | null;
  stud_card: StudCard;
}
