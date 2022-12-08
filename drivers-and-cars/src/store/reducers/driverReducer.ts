import { DriverAction, DriversState, DriversActionTypes } from "../../types/driver"

const initialState: DriversState = {
    drivers: [],
    loading: false,
    error: null
}

export const driverReducer = (state = initialState, action: DriverAction): DriversState => {
    switch (action.type) {
        case DriversActionTypes.FETCH_DRIVERS:
            return {...state, loading: true, error: null, drivers: []}
        case DriversActionTypes.FETCH_DRIVERS_SUCCESS:
            return {...state, loading: false, error: null, drivers: action.payload}
        case DriversActionTypes.FETCH_DRIVERS_ERROR:
            return {...state, loading: false, error: action.payload, drivers: []}
        default:
            return state
    }
}