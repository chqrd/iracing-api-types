import { AllowedLicense } from "./allowed-license";
import { CarClass } from "./car-class";
import { Track } from "./track";
import { LicenseGroupType } from "./types";

export interface Series {
  active: boolean;
  allowed_licenses: AllowedLicense[];
  category: string;
  category_id: number;
  fixed_setup: boolean;
  license_group: number;
  license_group_types: { license_group_type: number }[];
  logo: null | string;
  official: boolean;
  search_filters?: string;
  seasons: SeriesSeason[];
  series_id: number;
  series_name: string;
  series_short_name: string;
}

interface SeriesSeason {
  active: boolean;
  car_classes: Pick<CarClass, "car_class_id" | "name" | "relative_speed" | "short_name">[];
  driver_changes: boolean;
  fixed_setup: boolean;
  has_supersessions: boolean;
  license_group: number;
  license_group_types: LicenseGroupType[];
  official: boolean;
  race_weeks: RaceWeek[];
  season_id: number;
  season_name: string;
  season_quarter: number;
  season_short_name: string;
  season_year: number;
  series_id: number;
}

interface RaceWeek {
  race_week_num: number;
  season_id: number;
  track: Pick<Track, "config_name" | "track_id" | "track_name">;
}
