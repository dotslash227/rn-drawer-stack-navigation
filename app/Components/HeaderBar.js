import React from 'react';
import {Text} from 'react-native';
import {Header, Left, Body, Right, Button} from 'native-base';

class HeaderBar extends React.Component{

    constructor(props){
        super(props);        
    }

    openDrawer(){
        this.props.navigation.openDrawer();
    }

    render(){
        return(
            <Header style={{backgroundColor: "pink"}}>
                <Left>
                    <Text onPress={()=>this.props.openMenu()}>Open Menu</Text>
                </Left>
                <Body>
                    <Text>{this.props.title}</Text>
                </Body>
                <Right></Right>
            </Header>
        )
    }
}

export default HeaderBar;