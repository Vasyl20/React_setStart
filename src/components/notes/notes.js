import React, { Component, Fragment } from 'react';
import './notes.css';

class Notes extends Component {

    state = {
        title: this.props.title,
        description: this.props.description
    }

    render() {

        const {title, description } = this.state;

        return (
            <Fragment>
                 <div className="card-ift card">
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{description}</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Notes;