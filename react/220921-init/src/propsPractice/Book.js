import image from "../img/image.png";
import '../Book.css';

function ClassComponent(props) {
    const {title, author, price, type} = props;
    return(
        <div>
            <h1>이번주 베스트셀러</h1>
            <img src={image} alt="cover"></img>
            <h2>{title}</h2>
            <h4>저자: {author}</h4>
            <h4>판매가: {props.price}</h4>
            <h4>구분: {props.type}</h4>
        </div>
    )
}

export default ClassComponent;