import BenefitsList from "../../components/BenefitsList";
import Button from "../../components/Button";
import CountPageViews from "../../components/CountPageViews";
import InputRange from "../../components/InputRange";
import PriceResult from "../../components/PriceResult";
import ToggleBilling from "../../components/ToggleBilling";

import { IData } from "../../interfaces";

interface MainProps {
  data: IData;
  setData: (arg: IData) => void;
}

export default function Main({data, setData} : MainProps) {
    return (
      <main>
        <CountPageViews pageViews={data.pageViews}/>
        <InputRange data={data} setData={setData}/>
        <PriceResult data={data}/>
        <ToggleBilling data={data} setData={setData}/>
        <BenefitsList />
        <Button />

      </main>
    )
  }
  
  