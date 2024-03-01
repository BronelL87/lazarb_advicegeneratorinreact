import React from 'react'
import { useEffect, useState } from 'react';
import getData from '../DataServices/DataServices';
import myAdvice from '../Interfaces/interface';



const AdviceComponent = (props: {slip: string, id: number}) => {
    const [adviceShow, setAdviceShow] = useState<myAdvice>();
    
useEffect(() => {
    const adviceData = async () => {
      const fetchData = await getData();
      console.log(fetchData)
      setAdviceShow(fetchData)
    
    }
    adviceData();
    
    }, [])
  return (
    <div>
      <p>Advice # {adviceShow.slip.id}</p>
    </div>
  )
}

export default AdviceComponent
