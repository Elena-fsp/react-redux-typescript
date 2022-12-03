export interface DriversState {
  drivers: Driver[];
  loading: boolean;
  error: null | string;
}

export enum DriversActionTypes {
  FETCH_DRIVERS = "FETCH_DRIVERS",
  FETCH_DRIVERS_SUCCESS = "FETCH_DRIVERS_SUCCESS",
  FETCH_DRIVERS_ERROR = "FETCH_DRIVERS_ERRROR"

}
interface FetchDriversAction {
  type: DriversActionTypes.FETCH_DRIVERS;
}
interface FetchDriversSuccessAction {
  type: DriversActionTypes.FETCH_DRIVERS_SUCCESS;
  payload: any[]
}
interface FetchDriversErrorAction {
  type: DriversActionTypes.FETCH_DRIVERS_ERROR;
  payload: string
}
export type DriverAction = FetchDriversAction | FetchDriversSuccessAction | FetchDriversErrorAction;

interface Driver {
  id: number,
  first_name: string,
  last_name: string,
  date_created:number
  date_birth: number,
    status: {
    title: string,
    code: string,
  }
}