import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className="footer fixed-bottom">
                    <a href="https://github.com/ronalynn/LibraryManagerSpring" className="text-muted">Git Hub</a>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;