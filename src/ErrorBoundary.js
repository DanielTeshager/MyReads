import React, { Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, errorInfo) {
		// Handle the error or log it
		console.error(error, errorInfo);
		// Update the state to display an error UI
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			// Render the fallback UI
			return <div>Something went wrong!</div>;
		}
		// Render the child components
		return this.props.children;
	}
}

export default ErrorBoundary;
