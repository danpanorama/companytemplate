import "../../css/home.css";
import "../../App.css";
import Man1 from "../../images/man1.jpg";
import Man2 from "../../images/man2.jpg";
import Man3 from "../../images/man3.jpg";

function CustomersSection(props) {
  const customerArray = [
    {
      name: "John Smith",
      comment: "My sun glasses feel brand new again !",
      stars: 5,
      image: Man3,
    },
    {
      name: "John Smith",
      comment: "My sun glasses feel brand new again !",
      stars: 4,
      image: Man2,
    },
    {
      name: "John Smith",
      comment: "My sun glasses feel brand new again !",
      stars: 5,
      image: Man1,
    },
  ];

  return (
    <div className="customersSection">
     <h1 className="secondaryHeader tac">HEAR FROM OUR CUSTOMERS</h1>
      <div className=" scrollX  paddingSection">

        <div className="SquareCommentBox">

          <div className="scrollPadding flex row acenter gap30">
            {customerArray.map((e) => {
              return (
                <div className="oneComment">
                  <div className="commentHolder">
                    <div className="commentText">
                      <p className="commentFont">"{e.comment}"</p>
                    </div>
                    <div className="profileComment flex row acenter gap10">
                      <div className="circleImage">
                        <img src={e.image} alt="" className="img" />
                      </div>
                      <div className="commentInfo">
                        <p className="commentName">{e.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        
        </div>
      </div>
      <div className="navigateButtons flex row center gap10">
            <div className="navbtn flex col center btn1">{"<"}-</div>
            <div className="bgc navbtn flex col center btn1">-{">"}</div>

          </div>
    </div>
  );
}

export default CustomersSection;
