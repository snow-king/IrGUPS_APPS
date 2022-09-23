import {Exam} from "./exam.dto";

export interface ScheduleDay {
  day: string;
  subjects: Subject[];
}

export interface Subject {
  lec_id: keyof Times;
  dow: keyof Schedule;
  employ: EmployFullName;
  subgroup: 0 | 1 | 2;
  lec_type: LecType;
  lec_week: 1 | 2 | 3;
  auditorium: Auditorium;
  exam: Exam;
}
export interface EmployFullName {
  name1: string;
  name2: string;
  name3: string;
}

export interface Times {
  1: "8:30-10:00";
  2: "10:10-11:40";
  3: "12:10-13:40";
  4: "13:50-15:20";
  5: "15:30-17:00";
  6: "17:10-18:40";
  7: "18:45-20:15";
  8: "20:20-21:50";
}
export interface LecType {
  id: number;
  name: string;
}

export interface Auditorium {
  id: number;
  building_id: number;
  name: string;
  amount: number;
  is_comps: number;
  is_projector: number;
  is_spec: number;
  dep_id: number;
  id_type: number;
  id_floor: number;
  comm: string;
  info: string;
  umu_id: null;
}

export interface Schedule {
  1: ScheduleDay;
  2: ScheduleDay;
  3: ScheduleDay;
  4: ScheduleDay;
  5: ScheduleDay;
  6: ScheduleDay;
}
