import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './src/containers/HomePage';

import 'elemental/less/elemental.less';
import './src/styles/index.less';

const App = () => <div><HomePage /></div>

ReactDOM.render(<App />, document.getElementById('app'));