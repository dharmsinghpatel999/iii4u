import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Topic } from './Topic'

class Topics extends Component {
    render() {
        console.log('Match', this.props.match)
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/Mathematic`}>
                            Mathematic
                        </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/Science`}>
                            Science
                        </Link>
                    </li>
                </ul>
                <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
            </div>
        );
    }
}


export { Topics }