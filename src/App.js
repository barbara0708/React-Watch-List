import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Add } from './components/Add';
import { Watched } from './components/Watched';
import { WatchList } from './components/WatchList'
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './context/GlobalContext';

function App() {
    return ( <GlobalProvider >
        <Router>
        <Header/>
        <Routes >
        <Route path = '/' element = { <WatchList/> }/> 
        <Route path = '/add' element = { <Add/> }/> 
        <Route path = '/watched' element = { <Watched/> }/> 
        </Routes> 
        </Router> </GlobalProvider>
    );
}

export default App;