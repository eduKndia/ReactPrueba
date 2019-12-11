import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <ul class="list-group list-group-flush" >
                <li class="list-group-item" style={{borderStyle : 'none'}}>
                    <Product />
                </li>
                <li class="list-group-item" style={{borderStyle : 'none'}}>
                    <Product />
                </li>
                <li class="list-group-item" style={{borderStyle : 'none'}}>
                    <Product />
                </li>
                <li class="list-group-item" style={{borderStyle : 'none'}}>
                    <Product />
                </li>
            </ul>
        )
    }
}
