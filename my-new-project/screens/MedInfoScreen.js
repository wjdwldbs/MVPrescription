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
            <View>
              <Image style={{width:50, height:50}}
                source={{uri:'https://hsm.utimaco.com/wp-content/uploads/2017/09/Applications_Grey_RGB_Random_Number_Generation-300x300.png'}}/>
              <Text>{this.props.type||'this.props.type'}</Text>
            </View>
            <Text>{this.props.direction||
              'this.props.direction : this part should be the information from FDA indicating the usage and amount patient should take for this medicine'}</Text>
            <Text>{this.props.sEffect||
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
