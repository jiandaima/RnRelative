var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var OlderButton = React.createClass({
  render: function() {
    return (
      <TouchableHighlight
        style={styles.olderButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        >
        <Text style={styles.btnName}>
          长
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  olderButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    backgroundColor: '#f6f6f6'
  },
  btnName: {
    color: '#ccc'
  }
});

module.exports = OlderButton;
