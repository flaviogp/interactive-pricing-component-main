
export default function ToggleBilling() {
  return (
    <div className="toggle-billing">
      <p>Mounth Billing</p>
      <label htmlFor="toggle">
        <input type="checkbox" name="toggle" id="toggle" />
      </label>
      <p>Year Billing</p> <span>-25%</span>
    </div>
  )
}

