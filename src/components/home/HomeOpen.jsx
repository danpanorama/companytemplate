import "../../css/home.css";
import "../../App.css";

import LongButtonRed from "../buttons/LongButtonRed";
import model from '../../images/model.jpg'

function HomeOpen(props) {
  return (
    <div className="homeOpenHolder flex col acenter">
      <div className="container marginTop50 ">
        <h1 className="primaryHeader">TRY, SHARE & WEAR</h1>
        <p className="font text">
          Upload your Video and get a free pair of stunning sun glasses
        </p>
        <LongButtonRed class={'marginTop30'} text={"Get Started"} />
      </div>
      <div className="imageHolder">
        {/* <img src={model} alt="" className="img" /> */}

      </div>

    </div>
  );
}

export default HomeOpen;
