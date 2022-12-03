import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as DriverActionCreatots from '../store/action-creators/driver'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(DriverActionCreatots, dispatch)
}