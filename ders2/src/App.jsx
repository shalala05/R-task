import React from 'react';
import ReactDOM from 'react-dom';
import UserCV from './components/UserCV';
import './index.css';

const App = () => {
    return (
        <div className="app-container">
            <UserCV />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;