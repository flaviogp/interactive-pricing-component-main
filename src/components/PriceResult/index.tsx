import { IData } from "../../interfaces"


interface PriceResultProps {
  data: IData;
}

export default function PriceResult({data}: PriceResultProps) {




  return (
    <div className="price-result">
      <p>${data.billing === 'Month' ? data.pricePerMonth : data.pricePerYear}</p>
      <span>/ {data.billing}</span>
    </div>
  )
}

