import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

class WeatherProject extends Component {
  _handleTextChange(event) {
    console.log(event.nativeEvent.text);
  }
  render() {
    this.state = {
      zip: ''
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange.bind(this)}
        />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40
  }
});

module.exports = WeatherProject;
