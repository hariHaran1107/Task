import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Image, StyleSheet} from 'react-native';
import HomeScreen from './Components/Screens/Home.jsx';
import FeesScreen from './Components/Screens/Fees.jsx';
import HomeIcon from './Icons/HomeIcon.jsx';
import FeesIcon from './Icons/FeeIcon.jsx';
import HomeworkIcon from './Icons/HomeWorkIcon.jsx';
import NotificationsIcon from './Icons/NotificationsIcon.jsx';
import MenuIcon from './Icons/MenuIcon.jsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <View style={styles.headerLeftContainer}>
            <MenuIcon />
            <Image
              source={require('./Media/profile.png')}
              style={styles.profileImage}
            />
          </View>
        ),
        headerTitle: '',
        headerLeftContainerStyle: {paddingLeft: 20},
        headerStyle: {
          backgroundColor: '#FFFFFF',
          shadowColor: 'transparent',
        },
      }}
    />
  </Stack.Navigator>
);

const FeesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="FeesScreen"
      component={FeesScreen}
      options={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFFFFF',
          shadowColor: 'transparent',
        },
      }}
    />
  </Stack.Navigator>
);

const HomeworkStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeworkScreen"
      component={FeesScreen}
      options={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFFFFF',
          shadowColor: 'transparent',
        },
      }}
    />
  </Stack.Navigator>
);

const NotificationsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="NotificationsScreen"
      component={FeesScreen}
      options={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FFFFFF',
          shadowColor: 'transparent',
        },
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            if (route.name === 'Home') {
              return <HomeIcon color={color} size={size} />;
            } else if (route.name === 'Fees') {
              return <FeesIcon color={color} size={size} />;
            } else if (route.name === 'Homework') {
              return <HomeworkIcon color={color} size={size} />;
            } else if (route.name === 'Notifications') {
              return <NotificationsIcon color={color} size={size} />;
            }
          },
          tabBarActiveTintColor: '#2F50C6',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {fontSize: 14},
          headerShown: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen
          name="Homework"
          component={HomeworkStack}
          options={{tabBarLabel: 'Homework'}}
        />
        <Tab.Screen
          name="Fees"
          component={FeesStack}
          options={{tabBarLabel: 'Fees'}}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsStack}
          options={{tabBarLabel: 'Notifications'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 300,
  },
});

export default App;
