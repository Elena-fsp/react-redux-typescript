
import DriverTable from './modules/driverTable/DriverTable';
import Header from './modules/header/Header';
import  {useEffect} from 'react';
import {useTypedSelector} from './hooks/useTypedSelector';
import {useActions} from "./hooks/useAction";
import { Provider } from 'react-redux';
import { store } from './store/index';




function App() {

  const {drivers, error, loading} = useTypedSelector(state => state.drivers)
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
   <>
   
   <Header></Header>
   <DriverTable drivers={drivers}/>
   
   
   
   </>
  );
}

export default App;
