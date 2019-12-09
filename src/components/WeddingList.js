import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import Wedding from './Wedding';

export default class WeddingList extends Component {
    render() {
        return (
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <Wedding />
                </li>
                <li class="list-group-item">
                    <Wedding />
                </li>
                <li class="list-group-item">
                    <Wedding />
                </li>
                <li class="list-group-item">
                    <Wedding />
                </li>
            </ul>
        );
    }
}
