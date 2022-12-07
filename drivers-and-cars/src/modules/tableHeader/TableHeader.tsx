import { Colums } from '../../types/driver';
import  {FC} from 'react';

interface ITableHeader {
  colums: Colums[]
}

export const TableHeader: FC<ITableHeader> = ({colums}) => {
  const headers = colums.map(colum => <th key={colum.field}>{colum.field}</th>)
  return (
    <thead>
      <tr>
        {headers}
      </tr>
    </thead>
  )

}
