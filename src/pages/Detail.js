import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';


export default class Detail extends Component {


    render() {

        return (
            <div>
                <br/><br/><br/>
                <div className="card" style={{borderStyle:'none'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="card-link">Card link</Link>
                    </div>
                </div>
                <ProductList />
            </div>
        )
    }
}
