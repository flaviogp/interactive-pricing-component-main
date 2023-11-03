import { IData } from "../../interfaces";


interface ToggleBillingProps {
  data: IData;
  setData: (arg: IData) => void;
}

export default function ToggleBilling({data, setData} : ToggleBillingProps) {



  const handleChange = () => {

    if(data.billing === 'Month'){
      setData({...data, billing: "Year"})
    }else{
      setData({...data, billing: "Month"})
    }

  }


  return (
    <div className="toggle-billing">
      <p>Mounth Billing</p>
      <label htmlFor="toggle">
        <input 
          type="checkbox" 
          name="toggle" 
          id="toggle" 
          onChange={() => handleChange()}
        />
      </label>
      <p>Year Billing</p> 
      <span>-25%</span>
    </div>
  )
}

