import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  console.log("props.image", props.image);
  return (
    <li className={classes.item}>
      <div className={classes.main}>
        <p>{props.author}</p>
        <div className={classes["img-box"]}>
          <img
            src={props.image}
            className={classes.img}
            alt="second hand book"
          />
        </div>
      </div>

      <div>
        <ul>
          <li>
            <ion-icon name="pricetags-outline"></ion-icon>
            <span>
              &#8377;<strong>{props.price}</strong>
            </span>
          </li>
          <li>
            <ion-icon name="star-outline"></ion-icon>
            <span>
              <strong>{props.rating}</strong> rating
            </span>
          </li>
          <li>
            <ion-icon name="calendar-outline"></ion-icon>
            <span>
              Posted on
              <strong> {props.date}</strong>
            </span>
          </li>
        </ul>
        <div className={classes.actions}>
          <Link className="btn" to={`/books/${props.id}`}>
            View
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
