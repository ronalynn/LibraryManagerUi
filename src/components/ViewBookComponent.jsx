import React, { Component } from 'react';
import BookService from '../services/BookService';

class ViewBookComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            book: {} 
        }

        this.editBook = this.editBook.bind(this);

    }
    

    editBook(id){
        this.props.history.push(`/books/new/${id}`);
    }

    cancel(){
        this.props.history.push('/books');
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then(res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div class="pt-3 pb-5">
                <div className="card col-md-5 mx-auto">
                    <h3 className="text-center mt-3">View Book Details</h3>
                    <div className="card-body">
                        <div class="me-3 ">
                        <table class="table table-bordered ">
                            <tr>
                                <th class="text-end pe-3 ">Id #</th>
                                <td>{this.state.book.id}</td>
                            </tr>

                            <tr>
                                <th class="text-end pe-3">Title</th>
                                <td>{this.state.book.title}</td>
                            </tr>

                            <tr>
                                <th class="text-end pe-3">Author</th>
                                <td>{this.state.book.author}</td>
                            </tr>

                            <tr>
                                <th class="text-end pe-3">Year</th>
                                <td>{this.state.book.year}</td>
                            </tr>

                            <tr>
                                <th class="text-end pe-3">Pages</th>
                                <td>{this.state.book.pages}</td>
                            </tr>
                        </table>

                            <div align="right">
                            <button className="btn btn-light me-2" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>back</button>
                            <button onClick={() => this.editBook(this.state.book.id)} className="btn btn-info">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBookComponent;