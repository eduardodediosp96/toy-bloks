import { GetBlockResponse } from "./Block";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: GetBlockResponse;
}
