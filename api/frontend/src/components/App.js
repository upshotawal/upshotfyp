import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Header from "./layout/Header";

import { Provider } from 'react-redux';
import store from "../store";

class App extends Component {
    render(){
        return(
            <Provider store={store}>
            <Fragment>
                <Header/>
                    <div className="container">
                        <Dashboard/>
                    </div>
            </Fragment>
            </Provider>
        //     <>
        //     <Router>
        
        // <Switch>
        //     <Route path= '/'exact component={Dashboard}/>
        // </Switch>
        // </Router>
        // </>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));