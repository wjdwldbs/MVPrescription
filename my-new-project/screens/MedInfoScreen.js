import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import Modal, { ModalTitle, ModalContent } from 'react-native-modals';

export default class MedInfoScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show:true
    };
  }
  render(){
    return (
      <Modal animationType="slide"
        height={500} width={0.9}
        modalTitle={<ModalTitle title={this.props.name||'this.props.name'}/>}
        visible={this.state.show}
        swipeDirection={['up', 'down']}
        swipeThreshold={100}
        onSwipeOut={() => {this.setState({ show: false });
        }}
        onTouchOutside={()=>{this.setState({show:false})}}>
        <ModalContent>
          <ScrollView>
            <View style={{flex:1, flexDirection:'row'}}>
              <Image style={{width:120, height:120}}
                source={{uri:'https://hsm.utimaco.com/wp-content/uploads/2017/09/Applications_Grey_RGB_Random_Number_Generation-300x300.png'}}/>
              <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{this.props.name||'this.props.name'}</Text>
                <Text style={{fontSize:20}}>{this.props.type||'this.props.type'}</Text>
              </View>
            </View>
            <Text style={{fontSize:18, borderBottomColor:'lightgrey', borderBottomWidth:1, paddingBottom:8}}>{this.props.direction||
              'this.props.direction : this part should be the information from FDA indicating the usage and amount patient should take for this medicine'}</Text>
            <Text style={{fontSize:18, paddingTop:8}}>{this.props.sEffect||
              'this.props.sEffect : this part should render the information about what side effect will this medicine cause provided by FDA'}</Text>
          </ScrollView>
        </ModalContent>
      </Modal>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });
