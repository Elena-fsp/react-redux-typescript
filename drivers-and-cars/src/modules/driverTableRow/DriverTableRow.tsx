import { TDriver, EColumsDrivers } from '../../types/driver';
import  {FC} from 'react';


interface IDriverTableRow {
  driver: TDriver
}

export const DriverTableRow: FC<IDriverTableRow> = ({driver}) => {
 return (
  <tr>
    <td data-label={EColumsDrivers.ID}></td>
    <td data-label={EColumsDrivers.NAME}></td>
    <td data-label={EColumsDrivers.LAST_NAME}></td>
    <td data-label={EColumsDrivers.DATE_BIRTH}></td>
    <td data-label={EColumsDrivers.DATE_CREATED}></td>
    <td data-label={EColumsDrivers.STATUS}></td>
    <td data-label={EColumsDrivers.ACTIONS}></td>
  </tr>
 )
}