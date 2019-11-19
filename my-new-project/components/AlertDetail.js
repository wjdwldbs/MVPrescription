import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// export default class AlertDetail extends Component {
//   render(){
//     return(
//       <View>

//         <Text>
//           <Image style={{width: 50, height: 50}} source={{uri:'https://www.additudemag.com/wp-content/uploads/2017/02/adderall_xr_25mg.jpg'}}/>
//         </Text>

//         <Text>med2</Text>
//         <Text>med3</Text>
//       </View>
//     );
//   }
// }
    const AlertDetail = (props) => (
      <View style={{margin: '5%'}}>
        {props.data.map((med, i) => (
          <View style={{margin:'2%'}} key={i}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              <Image 
              style={{width: 50, height: 50}} 
              source={{uri:med.img}} 
              />
              <Text> {med.medName}</Text>
              <Text> {med.strength}</Text>
            </Text>

            <Text style={{fontSize: 15}}>{med.direction}</Text>
          </View>
        ))}
      </View>
    );

    export default AlertDetail;