import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError === true) {
            return <h1>Ooops, we have an error!</h1>
        } else {
            return this.props.children;
        }
    }
    
}

export default ErrorBoundary;