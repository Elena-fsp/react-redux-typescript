
import styles from './ DriverList.module.scss';
import React, {FC} from 'react';
import { TDriver, columsDrivers } from '../../types/driver';
import { TableHeader } from '../tableHeader/TableHeader';
import { DriverTableRow } from '../driverTableRow/DriverTableRow';


interface IDriverTable {
  drivers: TDriver[]
}

const DriverTable: FC<IDriverTable> = (drivers) => {
  

  const driverData = drivers.drivers.map((driver) => <DriverTableRow key={driver.id} driver={driver} />)
  
  return (
  <table>
    <TableHeader colums={columsDrivers}></TableHeader>
    <tbody>
      {driverData}
      </tbody>
      </table>
      );
 }


  

export default DriverTable;



