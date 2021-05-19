import React, { Component } from 'react';
import BookService from '../services/BookService';

class AddBookComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            title: '',
            author:'',
            year:'',
            pages:''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changePagesHandler = this.changePagesHandler.bind(this);

        this.saveBook = this.saveBook.bind(this);
    }

    
    componentDidMount(){
        if(this.state.id == -1){
            return 
        } else{
            BookService.getBookById(this.state.id).then((res) => {
                let book = res.data;
                this.setState({title: book.title,
                    author: book.author,
                    year: book.year,
                    pages: book.pages
                });
            });
        }
    }

    changeTitleHandler = (event) =>{
        this.setState({title: event.target.value});
    }
    changeAuthorHandler = (event) =>{
        this.setState({author: event.target.value});
    }
    changeYearHandler = (event) =>{
        this.setState({year: event.target.value});
    }
    changePagesHandler = (event) =>{
        this.setState({pages: event.target.value});
    }

    saveBook = (e) =>{
        e.preventDefault();

        let book = {title: this.state.title, author: this.state.author, year: this.state.year, pages: this.state.pages};
        console.log('book => ' + JSON.stringify(book));

        if(this.state.id == -1){
            BookService.addBook(book).then(res =>{
                this.props.history.push('/books')  
              });
        } else{
            BookService.editBook(book, this.state.id).then(res =>{
                this.props.history.push('/books');
            })
        }
        
    }

    cancel(){
        this.props.history.push('/books');
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 align="center" class="mt-3">Add New Book</h3> 
        } else {
            return <h3 align="center" class="mt-3">Edit Book</h3>
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 my-2">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input placeholder="Book title..." name="title" className="form-control" value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className="form-group my-4">
                                        <input placeholder="Author..." name="author" className="form-control" value={this.state.author} onChange={this.changeAuthorHandler}/>
                                    </div>
                                    <div className="form-group my-4">
                                        <input placeholder="Year published" name="year" className="form-control" value={this.state.year} onChange={this.changeYearHandler}/>
                                    </div>
                                    <div className="form-group my-4">
                                        <input placeholder="Pages" name="title" className="form-control" value={this.state.pages} onChange={this.changePagesHandler}/>
                                    </div>

                                    <div align="right">
                                    <button className="btn btn-outline-danger me-3" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    <button className="btn btn-success" onClick={this.saveBook}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBookComponent;