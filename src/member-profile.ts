import { Helmet } from "./helmet";
import { Track } from "./track";

type LicenseHistory = Pick<
  License,
  | "category_id"
  | "category"
  | "category_name"
  | "license_level"
  | "safety_rating"
  | "cpi"
  | "irating"
  | "tt_rating"
  | "color"
  | "group_name"
  | "group_id"
  | "seq"
>;

export interface MemberProfile {
  recent_awards: RecentAward[];
  activity?: Activity;
  image_url: string;
  profile: Field[];
  member_info: MemberInfo;
  license_history: LicenseHistory[];
  is_generic_image: boolean;
  success: boolean;
  disabled: boolean;
  recent_events: RecentEvent[];
  cust_id: number;
}

interface RecentAward {
  member_award_id: number;
  award_id: number;
  achievement: boolean;
  award_count: number;
  award_date: string;
  award_order: number;
  awarded_description: string;
  description: string;
  group_name: string;
  has_pdf: boolean;
  icon_url_large: string;
  icon_url_small: string;
  icon_url_unawarded: string;
  name: string;
  subsession_id?: number;
  viewed: boolean;
  weight: number;
  progress?: number;
  progress_label?: string;
  progress_text?: string;
  progress_text_label?: string;
  threshold?: number;
}

interface Activity {
  recent_30days_count: number;
  prev_30days_count: number;
  consecutive_weeks: number;
  most_consecutive_weeks: number;
}

interface Field {
  field_id?: number;
  name: string;
  value: string;
  editable: boolean;
  label?: string;
}

interface MemberInfo {
  cust_id: number;
  display_name: string;
  helmet: Helmet;
  last_login: string;
  member_since: string;
  club_id: number;
  club_name: string;
  ai: boolean;
  licenses: License[];
}

interface License {
  category_id: number;
  category: string;
  category_name: string;
  license_level: number;
  safety_rating: number;
  cpi: number;
  irating: number;
  tt_rating: number;
  mpr_num_races: number;
  color: string;
  group_name: string;
  group_id: number;
  pro_promotable?: boolean;
  seq: number;
  mpr_num_tts: number;
}

interface RecentEvent {
  event_type: string;
  subsession_id: number;
  start_time: string;
  event_id: number;
  event_name: string;
  simsession_type: number;
  starting_position: number;
  finish_position: number;
  best_lap_time: number;
  percent_rank: number;
  car_id: number;
  car_name: string;
  logo_url: any;
  track: Pick<Track, "config_name" | "track_id" | "track_name">;
}
