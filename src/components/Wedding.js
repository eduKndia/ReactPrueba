import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import couple from '../images/couple.JPG'

export default class Wedding extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card mb-3">
                    
                    <Link to='/Detail'>
                        <img
                            className="card-img-top"
                            src={couple}
                            alt="..."
                        />
                    </Link>

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
               
                </div>
            </React.Fragment>
        );
    }
}
