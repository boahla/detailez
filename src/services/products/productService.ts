import { productStatus } from "@/src/datas";
import axios from "@/src/utils/axios";
import {
  IAnswerTCItem,
  IAnswerTCItemProps,
  IProductItem,
  IQAListItem,
  IQATargetItem,
  ISaveProductResult,
} from "./types";

class ProductService {
  // product list
  async getProducts({
    status,
  }: {
    status: productStatus;
  }): Promise<IProductItem[] | undefined> {
    try {
      const res = await axios.get(`/product`, {
        params: { status },
      });
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // product item
  async getProduct({
    productId,
  }: {
    productId: number;
  }): Promise<IProductItem | undefined> {
    try {
      const res = await axios.get(`/product/${productId}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // delete product
  async deleteProduct({
    productId,
  }: {
    productId: number;
  }): Promise<IProductItem | undefined> {
    try {
      const res = await axios.delete(`/product/${productId}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // copy all product
  async copyProdcut({ productId }: { productId: number }) {
    try {
      await axios.get(`/product/copy/${productId}`);
      return;
    } catch (err) {
      console.log("error", { err });
    }
    return;
  }
  // copy issue product
  async copyProdcutStatus({ productId }: { productId: number }) {
    try {
      await axios.get(`/product/copy-status/${productId}`);
      return;
    } catch (err) {
      console.log("error", { err });
    }
    return;
  }
  // make product
  async postNewProduct({
    params,
  }: {
    params: {
      name: string;
      contents: string;
    };
  }): Promise<number | undefined> {
    try {
      const res = await axios.post(`/product`, params);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  async getProductQAList({
    productId,
  }: {
    productId: number;
  }): Promise<IQAListItem[] | undefined> {
    try {
      const res = await axios.get(`/page/${productId}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // get test case
  async getProductQAItem({
    id,
  }: {
    id: number | undefined;
  }): Promise<{ lists: IQATargetItem[] } | undefined> {
    try {
      const res = await axios.get(`/tc/${id}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }

  // update qa product
  async saveProduct({
    id,
    status,
  }: {
    id: number | undefined;
    status: string;
  }): Promise<ISaveProductResult | undefined> {
    try {
      const res = await axios.patch(`/product/${id}/start`, {
        status,
      });
      return res.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // end product
  async endProduct({ id }: { id: number | undefined }): Promise<undefined> {
    try {
      await axios.patch(`product/${id}/end`, {
        status: "end",
      });
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }

  // update test case
  async updateTCItem({
    id,
    contents,
  }: {
    id: number | undefined;
    contents: string;
  }): Promise<IQATargetItem | undefined> {
    try {
      const res = await axios.patch(`/tc/${id}`, {
        contents,
      });
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // add test case
  async addTCItem({
    id,
  }: {
    id: number | undefined;
  }): Promise<number | undefined> {
    try {
      const res = await axios.post(`/tc/${id}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
  // delete test case
  async deleteTCItem({
    id,
  }: {
    id: number | undefined;
  }): Promise<number | undefined> {
    try {
      const res = await axios.delete(`/tc/${id}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }

  // delete test case
  async deleteTC({ id }: { id: number }): Promise<number | undefined> {
    try {
      const res = await axios.delete(`/page/${id}`);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }

  async answerTCItem({
    id,
    contents,
  }: IAnswerTCItemProps): Promise<IAnswerTCItem | undefined> {
    try {
      const res = await axios.post(`/answer/${id}`, contents);
      return res.data.data;
    } catch (err) {
      console.log("error", { err });
    }
    return undefined;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductService();
