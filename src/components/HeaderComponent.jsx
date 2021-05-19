import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand mx-4 fs-2" href="#">Library Manager</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-2 my-1 mb-lg-0 fs-5">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://localhost:3000/books">Books</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;