import { Car } from "./car";

export interface CarClass {
  car_class_id: number;
  cars_in_class: Pick<Car, "car_dirpath" | "car_id" | "rain_enabled" | "retired">[];
  cust_id: number;
  name: string;
  rain_enabled: boolean;
  relative_speed: number;
  short_name: string;
}
