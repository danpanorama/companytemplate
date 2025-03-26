import SmallButtonRed from "../components/buttons/SmallButtonRed";
import "../css/nav.css";

function NavBar() {
  return (
    <div className="navBarHolder flex col center">
      <div className=" navbar flex row between">
        <div className="siteLogo flex col center">
          <p className="font">
                 Site Logo
          </p>
     
          </div>

        <SmallButtonRed text={'Upload Video'} />
      </div>
    </div>
  );
}

export default NavBar;
