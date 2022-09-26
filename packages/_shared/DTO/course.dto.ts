import {Contract} from "./index";

export interface Course {
  id: number;
  stud_id: number;
  archived_id: number;
  active: number;
  course: string;
  semestr: number;
  group_id: number;
  contract_id: number;
  studyform_id: number;
  s_year: number;
  spec_id: number;
  ak_dolg: number;
  date_create: string;
  subgroup: number;
  n_zach: number;
  n_kurs: number;
  n_exam: number;
  e_3: number;
  e_4: number;
  e_5: number;
  n_y: number;
  n_yup: number;
  stipendia: number;
  date_end: string;
  k_3: number;
  k_4: number;
  k_5: number;
  date_grafic: string;
  contract: Contract;
}
