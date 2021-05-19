
import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8086/api/books/"

class BookService{

    getAllBooks(){
        return axios.get(BOOK_API_BASE_URL);
    }

    addBook(book){
        return axios.post(BOOK_API_BASE_URL, book);
    }

    getBookById(bookId){
        return axios.get(BOOK_API_BASE_URL + '/' + bookId);
    }

    editBook(book, bookId){
        return axios.put(BOOK_API_BASE_URL + '/' + bookId,book);
    }

    deleteBook(bookId){
        return axios.delete(BOOK_API_BASE_URL + '/' + bookId);
    }

}

export default new BookService()