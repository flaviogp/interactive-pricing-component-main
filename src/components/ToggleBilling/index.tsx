
export default function ToggleBilling() {

  const aaa = () => {
    console.log('c')
  }


  return (
    <div className="toggle-billing">
      <p>Mounth Billing</p>
      <label htmlFor="toggle">
        <input type="checkbox" name="toggle" id="toggle" onChange={() => aaa()}/>
      </label>
      <p>Year Billing</p> 
      <span>-25%</span>
    </div>
  )
}

