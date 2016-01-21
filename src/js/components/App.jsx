import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        );
   }
}

export default App;
