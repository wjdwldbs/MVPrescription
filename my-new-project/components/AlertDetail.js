import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, Modal, TouchableHighlight, Picker } from 'react-native';
//import SetAlerts from './SetAlerts.js';

export default class AlertDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      selectedHour: 1,
      selectedDay: 5,
      hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      days: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
      switch1Value: false,
      switch2Value: false
    }
  }

  toggleSwitch1 = (value) => {
    this.setState({switch1Value: !this.state.switch1Value})
  }

  toggleSwitch2 = (value) => {
    this.setState({switch2Value: !this.state.switch2Value})
  }

  render(){
    let getHours = this.state.hours.map((h, i) => {
      return <Picker.Item key={i} value={h} label={h} />
    });

    let getDays = this.state.days.map((d, i) => {
      return <Picker.Item key={i} value={d} label={d} />
    });

    return(
      <View style={{margin: '5%'}}>
        {this.props.data.map((med, i) => (
          <View key={i}>
            <TouchableOpacity key={i} style={{flex:1, flexDirection: 'row', padding: 5}}>
              <Image style={{width: 100, height: 100}} source={{uri:med.img}}/>
              <View style={{width: 100, height: 100, flex:1, flexDirection: 'column'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', textDecorationLine:'underline'}}>
              {med.medName}: {med.strength}
              </Text>
              <Text style={{fontSize:16}}>{med.direction}</Text>
              </View>
            </TouchableOpacity>

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible} onRequestClose={() => {Alert.alert('Modal has been closed.');}}>             
              <View style={{marginTop: 22}}>

                  <TouchableHighlight onPress={() => this.setState({modalVisible: !this.state.modalVisible})} > 
                    <Text style={{marginTop:'2%', fontSize: 15, fontWeight: 'bold'}}>Close</Text>
                  </TouchableHighlight>

                <Text style={{marginBottom: 0, fontSize: 35}}>Set Daily Med Reminder</Text>
                <Text style={{marginTop: "10%", fontSize: 25}}>Every</Text>
                <Picker selectedValue={this.state.selectedHour} style={{width: 100}}  onValueChange={(hr) => this.setState({selectedHour: hr})}>
                  {getHours}
                </Picker>
                <Text style={{fontSize: 25}}>Hour(s)</Text>
                <Switch onValueChange={this.toggleSwitch1} value={this.state.switch1Value}/>

                <Text style={{marginBottom: 0, fontSize: 35}}>Set Refill Med Reminder</Text>
                <Text style={{marginTop: "10%", fontSize: 25}}>Every</Text>
                <Picker selectedValue={this.state.selectedDay} style={{width: 100}}  onValueChange={(day) => this.setState({selectedDay: day})}>
                  {getDays}
                </Picker>
                <Text style={{fontSize: 25}}>Day(s)</Text>
                <Switch onValueChange={this.toggleSwitch2} value={this.state.switch2Value}/>

              </View>
            </Modal>  

            <TouchableHighlight onPress={() => this.setState({modalVisible: true})}>
              <Text>Set Alerts</Text>
            </TouchableHighlight>

          </View>
        ))}
      </View>
    );
  }
}


