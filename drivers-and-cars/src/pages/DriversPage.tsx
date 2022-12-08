import DriverTable from '../components/driverTable/DriverTable';
import  {useEffect} from 'react';
// import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from "../hooks/useAction";
import { driversSelector, loadingSelector, errorSelector } from '../store/selectors/index';
import { useSelector } from 'react-redux';




function DriversList() {
const drivers = useSelector(driversSelector);
const loading = useSelector(loadingSelector);
const error = useSelector(errorSelector);
  // const {drivers, error, loading} = useTypedSelector(state => state.drivers)
  console.log(drivers);
  const {fetchDrivers} = useActions()
  console.log(fetchDrivers);

  useEffect(() => {
    fetchDrivers()
  }, [])

  if (loading) {
      return <h1>Идет загрузка...</h1>
  }
  if (error) {
      return <h1>{error}</h1>
  }
  return (
   <div>
   
   <DriverTable drivers={drivers}/>
  
   
   </div>
  );
}

export default DriversList;