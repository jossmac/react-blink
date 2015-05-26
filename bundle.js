require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-blink":[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');

/*
 * Fuck yeah, blink tag!
 */

var Blink = React.createClass({
	displayName: 'Blink',

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
		var style = { visibility: this.state.visible ? 'visible' : 'hidden' };

		return React.createElement(
			'span',
			_extends({}, this.props, { style: style }),
			this.props.children
		);
	}
});

module.exports = Blink;

},{"react/addons":undefined}]},{},[]);
