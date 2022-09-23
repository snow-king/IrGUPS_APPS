import {Exam} from "./exam.dto";

export interface Uchplan {
  id: number;
  idx: string;
  h_all: number;
  h_aud_lec: number;
  h_aud_sem: number;
  h_aud_lab: number;
  h_aud_irs: number;
  h_nad_srs: number;
  h_nad_pa: number;
  h_zet: number;
  h_credit: number;
  exam: Exam;
}
