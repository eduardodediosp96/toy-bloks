export interface GetBlockResponse {
  status: boolean;
  loading: boolean;
  data: Block[];
}

export interface Block {
  attributes: Attributes;
  id: string;
  type: string;
}

export interface Attributes {
  data: string;
  hash: string;
  index: number;
  "previous-hash": string;
  timestamp: number;
}
