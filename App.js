import React from 'react';
import {AppNavigator} from './app/Modules/Menu';
import {createAppContainer} from 'react-navigation';

const DrawerContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render(){
    return(
      <DrawerContainer />
    )
  }
}
