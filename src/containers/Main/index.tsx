import BenefitsList from "../../components/BenefitsList";
import Button from "../../components/Button";
import CountPageViews from "../../components/CountPageViews";
import InputRange from "../../components/InputRange";
import PriceResult from "../../components/PriceResult";
import ToggleBilling from "../../components/ToggleBilling";

export default function Main() {
    return (
      <main>
        <CountPageViews pageViews="100"/>
        <InputRange />
        <PriceResult price="16.00" period="month"/>
        <ToggleBilling />
        <BenefitsList />
        <Button />

      </main>
    )
  }
  
  