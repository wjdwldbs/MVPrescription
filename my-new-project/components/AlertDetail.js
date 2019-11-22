import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, Modal, TouchableHighlight, Picker, DatePickerIOS, Button, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import MedInfoScreen from '../screens/MedInfoScreen.js';
import { Notifications} from 'expo';

export default class AlertDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      selectedHour: 0,
      selectedMedDay: 0,
      selectedTime: 12,
      selectedDay: 5,
      medDays: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      time: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      days: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
      switch1Value: false,
      switch2Value: false,
      chosenDate: new Date(),
      currentMed: '',
      alert: false,
      show: false,
      modalMed: ''
    }

    this.setDate = this.setDate.bind(this);
    this.modalShow = this.modalShow.bind(this);

  }

  modalShow(){
    this.setState({show: false})
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  toggleSwitch1 = (value) => {
    this.setState({switch1Value: !this.state.switch1Value})
  }

  toggleSwitch2 = (value) => {
    this.setState({switch2Value: !this.state.switch2Value})
  }

  showNotification = (medName, direction) => {
    Alert.alert(
      `Time to take your med, ${medName}`,
      `${direction}`,
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }


  render(){

    let getHours = this.state.hours.map((h, i) => {
      return <Picker.Item key={i} value={h} label={h} />
    });

    let getDays = this.state.days.map((d, i) => {
      return <Picker.Item key={i} value={d} label={d} />
    });

    let getMedDays = this.state.medDays.map((m, i) => {
      return <Picker.Item key={i} value={m} label={m} />
    });

    let getTime = this.state.time.map((t, i) => {
      return <Picker.Item key={i} value={t} label={t} />
    });

    return(
      <View>
        {this.props.data.map((med, i) => (
        <Swipeout key={i} right={[{
          text: 'DELETE',
          backgroundColor: '#D82259',
          underlayColor: '#FDCAD7',
          color: '#FDCAD7',
          onPress: () => {this.props.deleteMed(med._id) }
        }, {
          text: 'SET ALERT',
          backgroundColor: '#F4FA3A',
          underlayColor: '#FEFDCE',
          color: 'black',
          onPress: () => { this.setState({modalVisible: true}) }
        }]} autoClose={true} backgroundColor= 'transparent'>

          <View onPress={()=>{this.setState({currentMed: med._id})}} key={i}>
            <View style={{marginBottom: 15}}>
            <TouchableOpacity key={i} style={{flex:1, flexDirection: 'row', padding: 5}} onPress={() => this.setState({show: true, modalMed: med.name})}>
              <Image style={{width: 100, height: 100}} source={{uri:med.imgUrl}}/>
              <View style={{width: 100, height: 100, flex:1, flexDirection: 'column'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', textDecorationLine:'underline', textTransform: 'uppercase'}}>
              {med.name}: {med.strength}
              </Text>
              <Text style={{fontSize:16}}>{med.direction}</Text>
              {(med.note !== "") && <Text style={{fontSize:16, fontWeight: 'bold', color: '#8A0101'}}>* {med.note} *</Text>}
              </View>
            </TouchableOpacity>

            {/* <TouchableHighlight onPress={() => this.setState({modalVisible: true})}>
              <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#DC143C'}}>Set Alerts</Text>
            </TouchableHighlight> */}
            </View>

            <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>

              <View>
                <TouchableHighlight style={{alignItems: 'center', backgroundColor: '#DDDDDD', padding: 10, marginTop: 30}}
                onPress={() => this.setState({modalVisible: !this.state.modalVisible})} >
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>Close</Text>
                </TouchableHighlight>
                <Button title='Demo' onPress={() => this.showNotification(med.name, med.direction)}></Button>
              </View>

              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <Text style={{marginBottom: 0, fontSize: 35}}>Set Daily Med Reminder</Text>
                {/* --days-- */}
                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{fontSize: 25}}>Every</Text>
                  <Picker selectedValue={this.state.selectedMedDay} onValueChange={(md) => this.setState({selectedMedDay: md})}>
                    {getMedDays}
                  </Picker>
                  <Text style={{fontSize: 25}}>Day(s)</Text>
                </View >
                {/* --hours-- */}
                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{marginTop: "10%", fontSize: 25}}>Every</Text>
                  <Picker selectedValue={this.state.selectedHour} onValueChange={(hr) => this.setState({selectedHour: hr})}>
                    {getHours}
                  </Picker>
                  <Text style={{fontSize: 25}}>Hour(s)</Text>
                </View>
                {/* --Time-- */}
                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{marginTop: "10%", fontSize: 25}}>Start At</Text>
                  <Picker selectedValue={this.state.selectedTime} onValueChange={(t) => this.setState({selectedTime: t})}>
                    {getTime}
                  </Picker>
                  <Text style={{fontSize: 25}}>PM</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 250}}>
                <Text style={{marginHorizontal: 10}}>OFF</Text>
                <Switch onValueChange={this.toggleSwitch1} value={this.state.switch1Value}/>
                <Text style={{marginHorizontal: 10}}>ON</Text>
              </View>

              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{marginBottom: 0, fontSize: 35, textAlign: 'center'}}>Set Refill Med Reminder</Text>
                <View style={{width: '100%'}}>
                  <DatePickerIOS date={this.state.chosenDate} onDateChange={this.setDate}/>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 100}}>
                <Text style={{marginHorizontal: 10}}>OFF</Text>
                <Switch onValueChange={this.toggleSwitch2} value={this.state.switch2Value}/>
                <Text style={{marginHorizontal: 10}}>ON</Text>
              </View>


            </Modal>
          </View>
          </Swipeout>
        ))}
        <MedInfoScreen modalShow={this.modalShow} show={this.state.show} drugName={this.state.modalMed}/>
      </View>
    );
  }
}


              {/* <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                <Text style={{marginBottom: 0, fontSize: 35}}>Set Refill Med Reminder</Text>

                <View style={{height: 100, width: 'auto'}}>
                  <Text style={{marginTop: "10%", fontSize: 25}}>Every</Text>
                  <Picker selectedValue={this.state.selectedDay} onValueChange={(day) => thdis.setState({selectedDay: day})}>
                    {getDays}
                  </Picker>
                  <Text style={{fontSize: 25}}>Day(s)</Text>
                </View>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 300}}>
                <Text style={{marginHorizontal: 10}}>ON</Text>
                <Switch onValueChange={this.toggleSwitch2} value={this.state.switch2Value}/>
                <Text style={{marginHorizontal: 10}}>OFF</Text>
              </View> */}


              //update button on swipeout

              // {
              //   text: 'UPDATE',
              //   backgroundColor: '#0099ff',
              //   underlayColor: '#B6CAF9',
              //   color: '#e6ffff',
              //   onPress: () => { this.deleteNote(rowData) }
              // }, 