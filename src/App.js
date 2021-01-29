import React from 'react';
import ClientList from './components/ClientList/ClientList';
import Content from './components/Content/Content';
import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <div className="client-list">
        <ClientList/>
        </div>
        <div className="content">
        <Content />
        </div>
        
    </div>
  );
}

export default App;
