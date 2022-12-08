import { DriverAction } from "../../types/driver"; 
import { DriversActionTypes } from "../../types/driver";
import { Dispatch } from "redux";
import { getDrivers } from "../../api/requests";


export const fetchDrivers = () => {
    return async (dispatch: Dispatch<DriverAction>) => {
        try {
            dispatch({type: DriversActionTypes.FETCH_DRIVERS})
            const response =  await getDrivers();
            console.log(response);
            dispatch({type: DriversActionTypes.FETCH_DRIVERS_SUCCESS, payload: response.data.data})
          
        } catch (e) {
            dispatch({
                type: DriversActionTypes.FETCH_DRIVERS_ERROR,
                payload: 'Error'
            })
        }
    }
}

