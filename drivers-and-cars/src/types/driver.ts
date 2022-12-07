export type TDriver = {
  id: number;
  first_name: string;
  last_name: string;
  date_birth: number;
  date_created: number;
  status: DriverStatus;
};


export interface DriversState {
  drivers: TDriver[];
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
  payload: TDriver[]
}
interface FetchDriversErrorAction {
  type: DriversActionTypes.FETCH_DRIVERS_ERROR;
  payload: string
}
export type DriverAction = FetchDriversAction | FetchDriversSuccessAction | FetchDriversErrorAction;

type Active = {
  title:'Активный',
  code: 'active'
}
type Blocked = {
  title:'Заблокирован',
  code: 'blocked'
}
type Fired = {
  title:'Уволенный',
  code:'fired'
}
type NotActive = {
  title:'Не активный',
  code: 'not_active'
}


type DriverStatus = Active | Blocked | Fired | NotActive


export enum EColumsDrivers {
  ID = 'id',
  NAME = 'name',
  LAST_NAME = 'last_name',
  DATE_BIRTH = 'date_birth',
  DATE_CREATED = 'date_created',
  STATUS = 'status',
  ACTIONS = 'actions'
}
export type Colums = {
  field:EColumsDrivers
}

export const columsDrivers: Colums[] = [
  {field:EColumsDrivers.ID},
  {field: EColumsDrivers.NAME},
  {field: EColumsDrivers.LAST_NAME},
  {field: EColumsDrivers.DATE_BIRTH},
  {field: EColumsDrivers.DATE_CREATED},
  {field: EColumsDrivers.STATUS},
  {field: EColumsDrivers.ACTIONS}

]