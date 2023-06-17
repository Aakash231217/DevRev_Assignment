import {useParams} from "react-router-dom";
import {books} from "../../data/books";
import Rating from "../../components/book-slider/Rating";


const Book = ()=>{
    const {id}= useParams();
   const book = books.find(b=>b.id === +id);

    return (<div className="book">
        <div className="book-content">
            <img src={`/books/${book.image}`}alt={book.title} className="book-content-img"/>
            <div className="book-content-info">
                <h1 className="book-title">{book.title}</h1>
                <div className="book-author">
                    by<span>{book.author}</span>(Author)
                </div>
                <Rating rating={book.rating} reviews={book.reviews}/>
                <div className="book-add-to-cart">
                    <input type="number" name="" id=""/>
                </div>
            </div>
      </div>
    </div>);
}

export default Book;