var React = require('react');
var Blink = require('react-blink');

var App = React.createClass({
	render () {
		return (
			<h1 className="hero">That's right &mdash; <Blink>blink</Blink> is back!</h1>
		);
	}
});

React.render(<App />, document.getElementById('app'));
