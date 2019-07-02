import React from 'react';
import './App.scss';
import {Provider} from 'react-redux'
import store from './redux/store'
import Body from './components/body'

function App() {

  return  <Provider store={store}> 
            <div className="App">
              <Body />
            </div>
          
          </Provider>
}

export default App;
