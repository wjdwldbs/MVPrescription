import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

    const AlertDetail = (props) => (
      <View>
        {props.data.map((med, i) => (
          <TouchableOpacity key={i} style={{flex:1, flexDirection: 'row', padding: 5}}>
            <Image
            style={{width: 100, height: 100}}
            source={{uri:med.img}}
            />
            <View style={{width: 100, height: 100, flex:1, flexDirection: 'column'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', textDecorationLine:'underline'}}>{med.medName}: {med.strength}</Text>
              <Text style={{fontSize:16}}>{med.direction}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );

    export default AlertDetail;
