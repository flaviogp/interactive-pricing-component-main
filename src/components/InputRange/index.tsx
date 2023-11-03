import{ useState } from 'react'
import { IData } from '../../interfaces';

interface InputRangeProps {
  data: IData;
  setData: (arg: IData) => void;
}


export default function InputRange({data, setData} : InputRangeProps) {
  const [value, setValue] = useState(data.pageViews)

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const maxRange = e.currentTarget.max;
    const input = e.currentTarget
    const value = input.value
    const percentValue = (Number(value)* 100) / Number(maxRange)
    const color = 'linear-gradient(90deg, hsl(174, 86%, 45%) ' + percentValue + '% , hsl(174, 77%, 80%) ' + percentValue + '% )' 
    input.style.background = color
  }

  const setPageViews = (value: string) => {
    const nValue = Number(value)
    setValue(nValue)

    if(data.billing === 'Month'){
      setData({...data, pageViews: nValue})
    }else {
      setData({...data, pageViews: nValue})
    }
 }

  return (
    <label htmlFor="range">
      <input 
        type="range"
        name="range" 
        id="range" 
        min='1'
        max='200'
        value={value}
        onMouseMove={e => handleMouseMove(e)}
        onChange={e=> setPageViews(e.currentTarget.value)}
        />

    </label>
  )
}

