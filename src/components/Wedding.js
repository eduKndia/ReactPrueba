import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import couple from '../images/couple.JPG'

export default class Wedding extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card mb-3" style={{borderStyle:'none'}}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={couple} class="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <Link to="/Detail"> Ver lista de bodas </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
