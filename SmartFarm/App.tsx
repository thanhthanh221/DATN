import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AddSchedule, AutomationControl, Environment, History, Home, RemoteControl, Schedule, Scripts} from './src/screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="history" component={History} />
        <Stack.Screen name="environment" component={Environment} />
        <Stack.Screen name="script" component={Scripts} />
        <Stack.Screen name="remoteControl" component={RemoteControl} />
        <Stack.Screen name="schedule" component={Schedule} />
        <Stack.Screen name="addschedule" component={AddSchedule} />
        <Stack.Screen name="automationcontrol" component={AutomationControl} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
