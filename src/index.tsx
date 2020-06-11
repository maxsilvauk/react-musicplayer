import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from '@aws-amplify/core';
import amplifyconfig from '~config/amplify';
import App from './App';

Amplify.configure(amplifyconfig);

ReactDOM.render(<App />, document.getElementById('root'));
