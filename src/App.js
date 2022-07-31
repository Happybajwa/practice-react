import LeftComponent from "./InfoComponent/LeftComponent";
import { useState } from "react";
import "./App.css";
import RightComponent from "./InfoComponent/RightComponent";

const App = () => {
  const [getInfo, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    Message: "",
  });
  const getAllInformation = (data) => {
    setInfo({
      ...getInfo,
      firstName: data.target.field1.value,
      lastName: data.target.field2.value,
      email: data.target.field3.value,
      subject: data.target.field4.value,
      Message: data.target.field5.value,
    });
  }

  return (
    <div className="maindiv">
      <div>
        <LeftComponent passTheInformation={getAllInformation}></LeftComponent>
      </div>
      <div>
        <RightComponent send={getInfo}></RightComponent>
      </div>
    </div>
  );
};

export default App;
