export interface Dogovor {
  num: string;
  date_of: string;
  doc_type: string;
  dept: FinDept;
}
export interface FinDept {
  debt: number;
  debt_sem: number;
  debt_prev_sem: number;
  date_update: number;
}

export interface Book {
  name: string;
  date_give: string;
}
