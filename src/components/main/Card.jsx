import { React, useState } from "react";
import BookPopup from "../book popup/BookPopup";

// import imgTwo from "../../images/work-steps-2.png";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  console.log(book);
  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div
                className="card"
                key={index}
                onClick={() => {
                  setShow(true);
                  setBookItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="under_section">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="info">&#36;{amount}</p>
                </div>
              </div>
              <BookPopup show={show} item={bookItem} onClose={()=>setShow(false)}/>
            </>
          );
        }
      })}
    </>
  );
};
export default Card;
