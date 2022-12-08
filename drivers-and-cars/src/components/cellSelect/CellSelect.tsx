import {useRef, useState} from "react";

interface Option <T> {
  code: T;
  title: string
}
interface ICellSelect<T> {
  data: string;
  id: number;
  options: Option<T> [];
  dataLable: string
}

export const CellSelect = <T extends string>({data, id, options, dataLable}: ICellSelect<T>) => {
  
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(data);
  const selectedElement = useRef(null);
  
  const clickHandler = () => {
    setIsEdit(true);
  }

  return (
    <div>
      <td></td>
    </div>
  )
}

