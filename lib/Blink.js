'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');

/*
 * Fuck yeah, blink tag!
*/

var Blink = React.createClass({
	displayName: 'Blink',

	getInitialState: function getInitialState() {
		return {
			visible: true,
			duration: 530
		};
	},
	getDefaultProps: function getDefaultProps() {
		return {
			duration: 530
		};
	},
	blink: function blink() {
		console.log(!this.state.visible);
		this.setState({ visible: !this.state.visible });
	},
	componentDidMount: function componentDidMount() {
		this.interval = setInterval(this.blink, this.props.duration);
	},
	componentWillUnmount: function componentWillUnmount() {
		clearInterval(this.interval);
	},

	render: function render() {

		var style = { visibility: this.state.visible ? 'visible' : 'hidden' };

		return React.createElement(
			'span',
			_extends({}, this.props, { style: style }),
			this.props.children
		);
	}
});

module.exports = Blink;