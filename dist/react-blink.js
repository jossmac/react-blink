(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Blink = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var blacklist = require('blacklist');
var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"blacklist":undefined}]},{},[1])(1)
});