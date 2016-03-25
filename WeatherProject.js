import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

let Forecast = require('./Forecast');
const k = 'da23357bfb227c4648166a99e1e43d19';

class WeatherProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    };
  }
  _handleTextChange(event) {
    console.log(event.nativeEvent.text);
    const name = event.nativeEvent.text;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${k}`;
    fetch(apiUrl)
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      this.setState({
        forecast: {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.weather[0].temp
        }
      });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
  render() {
     return (
       <View style={styles.container}>
         <Text style={styles.welcome}>
         You input {this.state.zip}
         </Text>
         <Forecast
               main={this.state.forecast.main}
               description={this.state.forecast.description}
               temp={this.state.forecast.temp} />
         <TextInput
           style={styles.input}
           returnKeyType='go'
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
