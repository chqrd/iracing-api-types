import { AllowedLicense } from "./allowed-license";
import { Car } from "./car";
import { Helmet } from "./helmet";
import { Livery } from "./livery";
import { Suit } from "./suit";
import { Track } from "./track";

export interface Result {
  allowed_licenses: AllowedLicense[];
  associated_subsession_ids: number[];
  can_protest: boolean;
  car_classes: ResultCarClass[];
  caution_type: number;
  cooldown_minutes: number;
  corners_per_lap: number;
  damage_model: number;
  driver_change_param1: number;
  driver_change_param2: number;
  driver_change_rule: number;
  driver_changes: boolean;
  end_time?: Date;
  event_average_lap: number;
  event_best_lap_time: number;
  event_laps_complete: number;
  event_strength_of_field: number;
  event_type: number;
  event_type_name: string;
  heat_info_id: number;
  license_category: string;
  license_category_id: number;
  limit_minutes: number;
  max_team_drivers: number;
  max_weeks: number;
  min_team_drivers: number;
  num_caution_laps: number;
  num_cautions: number;
  num_drivers: number;
  num_laps_for_qual_average: number;
  num_laps_for_solo_average: number;
  num_lead_changes: number;
  official_session: boolean;
  points_type: string;
  private_session_id: number;
  race_summary?: RaceSummary;
  race_week_num: number;
  results_restricted: boolean;
  season_id: number;
  season_name: string;
  season_quarter: number;
  season_short_name: string;
  season_year: number;
  series_id: number;
  series_logo?: string;
  series_name: string;
  series_short_name: string;
  session_id: number;
  session_results: SessionResult[];
  session_splits: SessionSplit[];
  special_event_type: number;
  start_time: Date;
  subsession_id: number;
  track: Pick<Track, "category" | "category_id" | "config_name" | "track_id" | "track_name">;
  track_state: ResultTrackState;
  weather: Weather;
}

interface ResultCarClass {
  car_class_id: number;
  cars_in_class: Pick<Car, "car_id">[];
  name: string;
  num_entries: number;
  short_name: string;
  strength_of_field: number;
}

interface RaceSummary {
  average_lap: number;
  field_strength: number;
  has_opt_path: boolean;
  heat_info_id?: number;
  laps_complete: number;
  num_caution_laps: number;
  num_cautions: number;
  num_lead_changes: number;
  num_opt_laps: number;
  special_event_type: number;
  special_event_type_text: string;
  subsession_id: number;
}

interface SessionResult {
  results: ResultElement[];
  simsession_name: string;
  simsession_number: number;
  simsession_subtype: number;
  simsession_type: number;
  simsession_type_name: string;
  weather_result?: WeatherResult;
}

interface ResultElement {
  aggregate_champ_points: number;
  ai: boolean;
  average_lap: number;
  best_lap_num: number;
  best_lap_time: number;
  best_nlaps_num: number;
  best_nlaps_time: number;
  best_qual_lap_at: Date;
  best_qual_lap_num: number;
  best_qual_lap_time: number;
  car_class_id: number;
  car_class_name: string;
  car_class_short_name: string;
  car_id: number;
  car_name: string;
  champ_points: number;
  class_interval: number;
  club_id: number;
  club_name?: string;
  club_points: number;
  club_shortname?: string;
  country_code: string;
  cust_id?: number;
  display_name: string;
  division: number;
  division_name?: string;
  driver_results?: DriverResult[];
  drop_race: boolean;
  finish_position: number;
  finish_position_in_class: number;
  friend: boolean;
  helmet?: Helmet;
  incidents: number;
  interval: number;
  laps_complete: number;
  laps_lead: number;
  league_agg_points: number;
  league_points: number;
  license_change_oval: number;
  license_change_road: number;
  livery: Livery;
  max_pct_fuel_fill: number;
  multiplier: number;
  new_cpi: number;
  new_license_level: number;
  new_sub_level: number;
  new_ttrating: number;
  newi_rating: number;
  old_cpi: number;
  old_license_level: number;
  old_sub_level: number;
  old_ttrating: number;
  oldi_rating: number;
  opt_laps_complete: number;
  position: number;
  qual_lap_time: number;
  reason_out: string;
  reason_out_id: number;
  starting_position: number;
  starting_position_in_class: number;
  suit: Suit;
  team_id?: number;
  watched: boolean;
  weight_penalty_kg: number;
}

interface DriverResult {
  aggregate_champ_points: number;
  ai: boolean;
  average_lap: number;
  best_lap_num: number;
  best_lap_time: number;
  best_nlaps_num: number;
  best_nlaps_time: number;
  best_qual_lap_at: Date;
  best_qual_lap_num: number;
  best_qual_lap_time: number;
  car_class_id: number;
  car_class_name: string;
  car_class_short_name: string;
  car_id: number;
  car_name: string;
  champ_points: number;
  class_interval: number;
  club_id: number;
  club_name: string;
  club_points: number;
  club_shortname: string;
  country_code: string;
  cust_id: number;
  display_name: string;
  division: number;
  division_name?: string;
  drop_race: boolean;
  finish_position: number;
  finish_position_in_class: number;
  friend: boolean;
  helmet: Helmet;
  incidents: number;
  interval: number;
  laps_complete: number;
  laps_lead: number;
  league_agg_points: number;
  league_points: number;
  license_change_oval: number;
  license_change_road: number;
  livery: Livery;
  max_pct_fuel_fill: number;
  multiplier: number;
  new_cpi: number;
  new_license_level: number;
  new_sub_level: number;
  new_ttrating: number;
  newi_rating: number;
  old_cpi: number;
  old_license_level: number;
  old_sub_level: number;
  old_ttrating: number;
  oldi_rating: number;
  opt_laps_complete: number;
  position: number;
  qual_lap_time: number;
  reason_out: string;
  reason_out_id: number;
  starting_position: number;
  starting_position_in_class: number;
  suit: Suit;
  team_id: number;
  watched: boolean;
  weight_penalty_kg: number;
}

interface WeatherResult {
  avg_cloud_cover_pct: number;
  avg_rel_humidity: number;
  avg_skies: number;
  avg_temp: number;
  avg_wind_dir: number;
  avg_wind_speed: number;
  fog_time_pct: number;
  max_cloud_cover_pct: number;
  max_fog: number;
  max_temp: number;
  max_wind_speed: number;
  min_cloud_cover_pct: number;
  min_temp: number;
  min_wind_speed: number;
  precip_mm: number;
  precip_mm2hr_before_session: number;
  precip_time_pct: number;
  simulated_start_time: Date;
  temp_units: number;
  wind_units: number;
}

interface SessionSplit {
  event_strength_of_field: number;
  subsession_id: number;
}

interface ResultTrackState {
  leave_marbles: boolean;
  practice_grip_compound: number;
  practice_rubber: number;
  qualify_grip_compound: number;
  qualify_rubber: number;
  race_grip_compound: number;
  race_rubber: number;
  warmup_grip_compound: number;
  warmup_rubber: number;
}

interface Weather {
  allow_fog: boolean;
  fog: number;
  precip_mm2hr_before_final_session: number;
  precip_mm_final_session: number;
  precip_option: number;
  precip_time_pct: number;
  rel_humidity: number;
  simulated_start_time: Date;
  skies: number;
  temp_units: number;
  temp_value: number;
  time_of_day: number;
  track_water: number;
  type: number;
  version: number;
  weather_var_initial: number;
  weather_var_ongoing: number;
  wind_dir: number;
  wind_units: number;
  wind_value: number;
}
