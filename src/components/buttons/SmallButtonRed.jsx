import "../../css/btn.css";

function SmallButtonRed(props) {
  return (
    <button className="primaryRedButton smallButtonPadding">
    {props.text}
    </button>
  );
}

export default SmallButtonRed;
