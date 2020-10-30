import React from 'react';
import ReactDOM from 'react-dom';

import List from  './containers/List.js'
import '../node_modules/bootswatch/dist/solar/bootstrap.min.css'


const App= ()=> {
    return (
        <>
        <nav className= "navbar navbar-dark bg-dark border-bottom border-white">
            <a href="/" className="navbar-brand">
                MovieApp
            </a>
        </nav>
        <main className="bg-dark">
            <div className= "container">
                <List/>
            </div>
        </main>
        </>
    )
}

ReactDOM.render( <App/>, document.getElementById('root'))