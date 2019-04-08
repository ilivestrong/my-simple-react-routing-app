import React from 'react'
import ReactDOM from 'react-dom'

import GreeterComponent from './components/greeter';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from React boilerplate code.</h1>
                <GreeterComponent name="Deepak Pathak"></GreeterComponent>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'))