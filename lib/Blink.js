'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var blacklist = require('blacklist');
var React = require('react');

/*
 * Fuck yeah, blink tag!
 */

var Blink = React.createClass({
	displayName: 'Blink',

	propTypes: {
		children: React.PropTypes.element.isRequired,
		duration: React.PropTypes.number
	},
	getInitialState: function getInitialState() {
		return { visible: true };
	},
	getDefaultProps: function getDefaultProps() {
		return { duration: 530 };
	},
	blink: function blink() {
		this.setState({ visible: !this.state.visible });
	},
	componentDidMount: function componentDidMount() {
		this.interval = setInterval(this.blink, this.props.duration);
	},
	componentWillUnmount: function componentWillUnmount() {
		clearInterval(this.interval);
	},
	render: function render() {
		var children = this.props.children;

		var props = blacklist(this.props, 'children', 'duration');
		props.style = { visibility: this.state.visible ? 'visible' : 'hidden' };
		return React.createElement(
			'span',
			props,
			children
		);
	}
});

exports['default'] = Blink;
module.exports = exports['default'];