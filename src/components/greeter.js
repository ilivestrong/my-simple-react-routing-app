import React from 'react'

import { greeter } from '../greeter'

const GreeterComponent = (props) => {
    return <h2>{greeter(props.name)}</h2>
}

export default GreeterComponent
