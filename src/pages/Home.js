import React, { Component } from 'react'
import './pages.css'
import { Redirect } from 'react-router';
export class Home extends Component {
    render() {
        const token = localStorage.getItem('token');
        if (token === null) {
            return <Redirect to='/Register' />;
        }
        else {
            return (
                <div id="h1">
                    <h1 >Home Page</h1>
                </div>
            )
        }
    }
}

export default Home
