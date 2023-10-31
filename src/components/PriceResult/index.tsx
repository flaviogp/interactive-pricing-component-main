

interface PriceResultProps {
  price: string;
  period: string;
}

export default function PriceResult({price, period}: PriceResultProps) {
  return (
    <div className="price-result">
      <p>${price}</p>
      <span>/ {period}</span>
    </div>
  )
}

