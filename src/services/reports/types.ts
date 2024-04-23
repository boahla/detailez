import { reportStatus } from "@/src/datas/products";

export interface IProductReport {
  product_owner: boolean;
  status: "ing" | "end" | "start";
  tc_count: number;
  pass_count: number;
  error_count: number;
  hold_count: number;
  cancel_count: number;
  before_count: number;
}

export interface IProductReportItem {
  id: number;
  product_id: number;
  status: reportStatus;
  name: string;
  contents: string;
  product_status: string;
  email: string;
  user_name: string;
  page_cnt: number;
  tc_cnt: number;
}

export interface IReportUserItem {
  user_id: number;
  name: string;
  progress: number;
  tc_count: number;
  pass_count: number;
  error_count: number;
  hold_count: number;
  cancel_count: number;
  before_count: number;
}

export interface IReportStatusItem {
  user_id: number;
  name: string;
  status: "error" | "hold" | "success" | "cancel";
  tc: string;
  contents: string;
  tc_order: number;
  page_order: number;
  content: string;
}
