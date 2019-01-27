import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from '../Redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './HomeContainer'
import ContactUsContainer from './ContactUsContainer'

const storeAndPersistor = createStore();

class App extends Component{
    render(){
        return(
            <Provider store={storeAndPersistor.store}>
                <PersistGate loading={null} persistor={storeAndPersistor.persistor}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={HomeContainer}/>
                            <Route exact path="/contact" component={ContactUsContainer} />
                        </Switch>
                    </Router>
                </PersistGate>

            </Provider>
        );
    }
}
export default App;