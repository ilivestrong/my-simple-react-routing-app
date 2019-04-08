import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {
    render() {
        return <h1>Hello from React boilerplate code.</h1>
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'))