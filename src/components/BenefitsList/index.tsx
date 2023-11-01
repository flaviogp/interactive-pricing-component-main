import iconCheck from '../../assets/images/icon-check.svg'
export default function BenefitsList() {
  return (
    <ul className='benefits-list'>
      <li>
        <img src={iconCheck} alt="Check list icon" />
        <p>Unlimited websites</p>
      </li>
      <li>
        <img src={iconCheck} alt="Check list icon" />
        <p>100% data ownership</p>
      </li>
      <li>
        <img src={iconCheck} alt="Check list icon" />
        <p>Email reports</p>
      </li>
    </ul>
  )
}

