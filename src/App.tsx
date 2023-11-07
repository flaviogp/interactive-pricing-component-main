import { useState, useEffect } from "react";
import { IData } from "./interfaces";
import Container from "./containers/Container";


export default function App() {
  const [data, setData] = useState<IData>({
    pageViews: 100,
    pricePerMonth: 16.00,
    pricePerYear: 144.00,
    billing: 'Month',
  })

useEffect(() => {
  const pricePerMonth = 0.16 * data.pageViews;
  const discountPerYear = (0.16 * data.pageViews * 12) * (25/100);
  const pricePerYear = (0.16 * data.pageViews * 12)  - discountPerYear;

  setData(
    {
      ...data, 
      pricePerMonth: Number(pricePerMonth.toFixed(2)), 
      pricePerYear : Number(pricePerYear.toFixed(2))
    }
  )

}, [data, data.pageViews])


  return(
    <div className="app">
      < Container data={data} setData={setData} />
    </div>
  )
}