export interface Mark {
  fio: String;
  type: String;
  semester: keyof Semesters;
  year: number;
  mark: string;
  exam: string;
  date: string;
  h_zet: number;
  h_all: number;
}

export interface Semesters {
  1: Array<Mark>;
  2: Array<Mark>;
  3: Array<Mark>;
  4: Array<Mark>;
  5: Array<Mark>;
  6: Array<Mark>;
  7: Array<Mark>;
  8: Array<Mark>;
}
