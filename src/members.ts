import { Helmet } from "./helmet";

export interface Members {
  success: boolean;
  cust_ids: number[];
  members: Member[];
}

interface Member {
  cust_id: number;
  display_name: string;
  helmet: Helmet;
  last_login: string;
  member_since: string;
  club_id: number;
  club_name: string;
  ai: boolean;
}
