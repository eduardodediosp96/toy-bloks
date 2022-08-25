export interface Blocks {
  data: Block[];
  status: boolean;
  loading: boolean;
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
