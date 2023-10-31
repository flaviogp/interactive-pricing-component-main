import{ useState } from 'react'

export default function InputRange() {
  const [value, setValue] = useState('0')

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const maxRange = e.currentTarget.max;
    const input = e.currentTarget
    const value = input.value
    const percentValue = (Number(value)* 100) / Number(maxRange)
    const color = 'linear-gradient(90deg, hsl(174, 86%, 45%) ' + percentValue + '% , hsl(174, 77%, 80%) ' + percentValue + '% )' 
    input.style.background = color
  }


  return (
    <label htmlFor="range">
      <input 
        type="range"
        name="range" 
        id="range" 
        min='0'
        max='200'
        value={value}
        onMouseMove={e => handleMouseMove(e)}
        onChange={e=> setValue(e.currentTarget.value)}
        />

    </label>
  )
}

