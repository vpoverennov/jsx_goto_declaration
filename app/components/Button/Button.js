import React from 'react'

class Button extends React.PureComponent {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default Button
