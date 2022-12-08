import { TDriver, EColumsDrivers } from '../../types/driver';
import  {FC} from 'react';


interface IDriverTableRow {
  driver: TDriver
}

export const DriverTableRow: FC<IDriverTableRow> = ({driver}) => {
 return (
  <tr>
    <td data-label={EColumsDrivers.ID}>{driver.id}</td>
    <td data-label={EColumsDrivers.NAME}>{driver.first_name}</td>
    <td data-label={EColumsDrivers.LAST_NAME}>{driver.last_name}</td>
    <td data-label={EColumsDrivers.DATE_BIRTH}>{driver.date_birth}</td>
    <td data-label={EColumsDrivers.DATE_CREATED}>{driver.date_created}</td>
    <td data-label={EColumsDrivers.STATUS}>{driver.status.title}</td>
    <td data-label={EColumsDrivers.ACTIONS}> R</td>
  </tr>
 )
}