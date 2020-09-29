import React, { Component } from 'react';
import CvForm from './cv-form/cv-form';
import CV from './cv-output/cv-output';
import { Route, Switch } from 'react-router-dom'



class App extends Component {
    render() {
        return (
            <div>
                
                <Route path='/' exact component={CvForm} />
                <Route path='/cv' exact component={CV} />

            </div>
        );
    }
}

export default App