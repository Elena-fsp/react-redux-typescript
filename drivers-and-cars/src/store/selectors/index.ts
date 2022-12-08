import { DriversState } from '../../types/driver'

export const driversSelector = (state: DriversState) => state.drivers;
export const loadingSelector = (state: DriversState) => state.loading;
export const errorSelector = (state: DriversState) => state.error;