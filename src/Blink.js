var blacklist = require('blacklist');
var React = require('react');

/*
 * Fuck yeah, blink tag!
 */

var Blink = React.createClass({
	propTypes: {
		children: React.PropTypes.element.isRequired,
		duration: React.PropTypes.number
	},
	getInitialState () {
		return { visible: true };
	},
	getDefaultProps () {
		return { duration: 530 };
	},
	blink () {
		this.setState({ visible: !this.state.visible });
	},
	componentDidMount () {
		this.interval = setInterval(this.blink, this.props.duration);
	},
	componentWillUnmount () {
		clearInterval(this.interval);
	},
	render () {
		var { children } = this.props;
		var props = blacklist(this.props, 'children', 'duration');
		props.style = { visibility: this.state.visible ? 'visible' : 'hidden' };
		return (
			<span {...props}>{children}</span>
		);
	}
});

export default Blink;
