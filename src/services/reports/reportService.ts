import axios from "@/src/utils/axios";
import {
  IProductReport,
  IProductReportItem,
  IReportStatusItem,
  IReportUserItem,
} from "./types";
import { reportStatus } from "@/src/datas/products";

class ReportService {
  async getProductReports({
    status,
  }: {
    status: reportStatus;
  }): Promise<IProductReportItem[] | undefined> {
    try {
      const res = await axios.get(`/report`, { params: { status } });
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  async getProductReport({
    productId,
  }: {
    productId: number;
  }): Promise<IProductReport | undefined> {
    try {
      const res = await axios.get(`/report/${productId}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  async getReportUser({
    productId,
  }: {
    productId: number;
  }): Promise<IReportUserItem[] | undefined> {
    try {
      const res = await axios.get(`/report-user/${productId}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  async getReportStatus({
    productId,
    pageSize,
    pageNum,
  }: {
    productId: number;
    pageSize: number;
    pageNum: number;
  }): Promise<IReportStatusItem[] | undefined> {
    try {
      const res = await axios.get(`/report-status/${productId}`, {
        params: {
          page_size: pageSize,
          page_num: pageNum,
        },
      });
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ReportService();
