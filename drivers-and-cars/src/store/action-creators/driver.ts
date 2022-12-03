import { DriverAction } from "../../types/driver"; 
import { DriversActionTypes } from "../../types/driver";
import { Dispatch } from "redux";
import axios from "axios";


export const fetchDrivers = () => {
    return async (dispatch: Dispatch<DriverAction>) => {
        try {
            dispatch({type: DriversActionTypes.FETCH_DRIVERS})
            const response = await axios.get('https://edu.evgeniychvertkov.com/v1/driver/ ', {
                  headers: {
                    'X-Authorization': 'apie89652355b3fce27bb779f634e5d32770bb0dc5b2cc6e457b970747bd843022c',
                  },
                });
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

