import React, { Component } from 'react';
import BookService from '../services/BookService';

class ListBooksComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            books: []
        }

        this.addBook = this.addBook.bind(this);
        this.editBook = this.editBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
        this.viewBook = this.viewBook.bind(this);
    }

    componentDidMount(){
        BookService.getAllBooks().then((res) => {
            this.setState({books: res.data})
        });
    }

    addBook(){
        this.props.history.push(`/books/new/-1`);
    }

    editBook(id){
        this.props.history.push(`/books/new/${id}`);
    }

    deleteBook(id){
        BookService.deleteBook(id).then( res => {
            this.setState({books: this.state.books.filter(book => book.id !== id)});
        });
    }

    viewBook(id){
        this.props.history.push(`/books/${id}`);
    }


    render() {
        return (
            <div class="pt-3 pb-5">
                <h2 className="text-center">Book List</h2>
                
                <div align="right">
                    <button className="btn btn-primary btn-small" onClick={this.addBook}>Add Book</button>
                </div>

                <div className = "row py-2">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr align="center">
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year Published</th>
                                <th>Pages</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.year}</td>
                                        <td>{book.pages}</td>
                                        <td>
                                            <button onClick={() => this.viewBook(book.id)} className="btn btn-success btn-sm me-2">View</button>
                                            <button onClick={() => this.editBook(book.id)} className="btn btn-info btn-sm me-2">Edit</button>
                                            <button onClick={() => this.deleteBook(book.id)} className="btn btn-outline-danger btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBooksComponent;