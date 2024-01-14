import React from 'react'
import { Button } from '@mui/material';

interface Props {
    attrName: string;
    title: string;
    class_name: string;
    value_update: Function;
}

const SolidButton: React.FC<Props> = ({attrName, class_name, title, value_update}) => {
  return (
    <div className='solidBtn'>
        <Button className={class_name} onClick={()=>{value_update(attrName, true)}}>{title}</Button>
    </div>
  )
}

export default SolidButton