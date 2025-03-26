import "../../css/home.css";
import "../../App.css";

function HowItsWork(props) {
  return (
    <div className="aboutSection">
      <div className="container marginTop50 flex col center">
        <h1 className="secondaryHeader">HOW IT WORKS?</h1>
        <div className="numberInfo flex col center">
          <h1 className="number">1</h1>
          <h3 className="thirdHeader">TRY OUR PRODUCT</h3>
          <p className=" font">Clothing, Shoes, accessories, etc.</p>
        </div>

        <div className="numberInfo flex col center">
          <h1 className="number">2</h1>
          <h3 className="thirdHeader">SHARE A VIDEO</h3>
          <p className=" font">Of you wearing them </p>
        </div>

        <div className="numberInfo flex col center">
          <h1 className="number">3</h1>
          <h3 className="thirdHeader">GET A CODE</h3>
          <p className=" font">For free sun glasses </p>
        </div>
      </div>
    </div>
  );
}

export default HowItsWork;
