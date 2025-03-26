import "../../css/btn.css";

function LongButtonRed(props) {
  return (
    <button className={"primaryRedButton w100 longButtonPadding " + props.class }>
    {props.text}
    </button>
  );
}

export default LongButtonRed;
