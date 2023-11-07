import { IData } from "../../interfaces";
import Header from "../Header";
import Main from "../Main";

interface ContainerProps {
  data: IData;
  setData: (arg: IData) => void;
}

export default function Container({data, setData} : ContainerProps) {
    return (
      <div className="container">
        <Header />
        <Main data={data} setData={setData}/>
      </div>
    )
  }
  
  