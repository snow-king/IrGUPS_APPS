import {StudyForm} from "./studyForm.dto";

export interface Specialty {
  id: number;
  parent_id: number;
  fac_id: number;
  kaf_id: number;
  abit_spec_id: number;
  form_id: number;
  short_name: string;
  type_id: number;
  kod_spec: string;
  generation: string;
  active: number;
  name: string;
  msk_name: string | null;
  msk_kod_spec: string;
  umu_id: number;
  kvalify_id: number;
  edu_level_id: number;
  fgos_id: number;
  name_template: null;
  meta_tag: string | null;
  ad_name: string | null;
  general_ent: number;
  current_set: number;
  ss_id: number;
  study_form: StudyForm;
  parent: Specialty;
}
