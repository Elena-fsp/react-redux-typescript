import styles from './ DriverList.module.scss';
import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useAction";
import { useState } from 'react';

const DriverList: React.FC = () => {
    const {drivers, error, loading} = useTypedSelector(state => state.driver)
    const {fetchDrivers} = useActions()
    console.log(fetchDrivers);
    const [isEdit, setIsEdit] = useState(false);
    
    useEffect(() => {
      fetchDrivers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
   
    const rows = drivers.map(function(driver) {
      let element;
      if(!isEdit) {
        element = <td><span onClick={() => setIsEdit(true)}>{driver.first_name} {driver.last_name}</span></td>;
      } else {
        element = <td><input
        onChange={event => console.log(event.target.value)}
        onBlur={() => setIsEdit(false)}
        /></td>;
      }

		return <tr key={driver.id}>
			<td>{driver.id}</td>
			 {element}
      <td>{driver.date_created}</td>
      <td>{driver.date_birth}</td>
      <td>{driver.status.title}</td>
		</tr>;
	});

    return ( 
    <table  className={styles.table}>
      <thead >
        <tr>
          <td>ID</td>
          <td>ФИО</td>
          <td>ДАТА РЕГИСТРАЦИИ</td>
          <td>ДАТА РОЖДЕНИЯ</td>
          <td>СТАТУС</td>
        </tr>
      </thead>
      <tbody>
       {rows}
        </tbody>
        </table>
       
        );
      };

export default DriverList;

