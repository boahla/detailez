export interface IProductItem {
  id: number;
  user_id: number;
  name: string;
  contents: string;
  status: string;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  email?: string;
}

export interface IQAListItem {
  id: number;
  product_id: number;
  path: string;
  order_no: number;
  tc_count: number;
  answer_count: number;
}

export interface IQATargetItem {
  id: number;
  page_id: number;
  idx: number;
  order_no: number;
  contents: string;
  position: string;
  image_size: string;
  is_deleted: number;
  created_at: string;
  updated_at: string;
  image_size_bk: string;
  user_id: string;
  status: string;
  tc: string;
  answer_id: string;
  board: any[];
}

interface ISaveProductResultArray {
  id: number;
}

export type ISaveProductResult = {
  code: number;
  message: string;
  result:
    | ISaveProductResultArray[]
    | {
        id: number;
        user_id: number;
        name: string;
        contents: string;
        status: string;
        created_at: string;
        updated_at: string;
        is_deleted: boolean;
      };
};
