var React = require('react/addons');

/*
 * Fuck yeah, blink tag!
 */

var Blink = React.createClass({
	displayName: 'Blink',
	
	getInitialState: function() {
		return { visible: true }
	},
	getDefaultProps: function() {
		return { duration: 530 }
	},
	blink: function() {
		this.setState({ visible: !this.state.visible });
	},
	componentDidMount: function() {
	    this.interval = setInterval(this.blink, this.props.duration);
	},
	componentWillUnmount: function() {
		clearInterval(this.interval);
	},
	
	render: function() {
		var style = { visibility: this.state.visible ? 'visible' : 'hidden' };

		return (
			<span {...this.props} style={style}>{this.props.children}</span>
		);
	}
});

module.exports = Blink;