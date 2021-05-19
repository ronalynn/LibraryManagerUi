import React, { Component } from 'react';
import BookService from '../services/BookService';

class ViewBookComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            book: {}
            
        }
        
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then(res => {
            this.setState({book: res.data});
        })
    }

    render() {
        return (
            <div class="pt-2 pb-5">
                <div className="card col-md-5 mx-auto">
                    <h3 className="text-center mt-3">View Book Details</h3>
                    <div className="card-body">
                        <div className = "row">
                        <div className="fs-6 mb-2">id: {this.state.book.id}</div>
                            <div className="fs-6 mb-2">Title: {this.state.book.title}</div>
                            <div className="fs-6 mb-2">Author: {this.state.book.author}</div>
                            <div className="fs-6 mb-2">Year: {this.state.book.year}</div>
                            <div className="fs-6 mb-2">Pages: {this.state.book.pages}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewBookComponent;