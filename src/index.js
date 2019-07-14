import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//wyszukanie elementu o id(root), do tego elementu będzie wrzucona cała treść z pliku app.js
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
