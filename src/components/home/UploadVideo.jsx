import "../../css/home.css";
import "../../App.css";
import LongButtonRed from "../buttons/LongButtonRed";

function UploadVideo(props) {
  return (
    <div className="uploadVideoSection flex col center">
      <div className="uploadVideoHolder flex col acenter">
     <div className="SquareBox flex col acenter">
     <h3 className="uploadSecondaryHeader">
          UPLOAD YOUR VIDEO
        </h3>
        <input type="text" placeholder="Choose File" className="input" />
<LongButtonRed text="Submit Video" />
     </div>
      </div>
   
    </div>
  );
}

export default UploadVideo;
 