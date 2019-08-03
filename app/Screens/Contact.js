import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Button} from 'native-base';
import HeaderBar from '../Components/HeaderBar';

class ContactScreen extends React.Component{

    constructor(props){
        super(props);
    }    

    static navigationOptions = {
        title: "Contact"
    };

    render(){
        return(
            <Container>                
                <Content padder>
                    <Text>This is the contact us screen</Text>
                    <Button onPress={()=>this.props.navigation.goBack()}><Text>Go to Contact Page</Text></Button>
                </Content>                
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default ContactScreen;