import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Content, Button, Header} from 'native-base';
import HeaderBar from '../Components/HeaderBar';

class Home extends React.Component{

    constructor(props){
        super(props);
    }    

    static navigationOptions = {
        title: 'Home'
    };

    render(){
        return(            
            <Container>                                         
                <Content padder>
                    <Text>Welcome to OptoApp. Your one stop shop for all your optical and optometric needs!</Text>
                    <Button onPress={()=>this.props.navigation.navigate("Contact")}><Text>Go to Contact Page</Text></Button>
                    <Button onPress={()=>this.props.navigation.openDrawer()}><Text>Open Drawer</Text></Button>
                </Content>                
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default Home;