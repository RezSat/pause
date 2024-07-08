import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Iconify } from 'react-native-iconify';
import { StyleSheet, View } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: '#0B0C0E',
          borderRadius: 15,
          height: 90,
          opacity: 0.83,
          ...styles.shadow,
        },
      }}>
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.containerFocused : styles.container}>
              <Iconify icon="clarity:note-solid" size={30} color="#FFFFFF" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.containerFocused : styles.container}>
              <Iconify icon="solar:settings-bold-duotone" size={30} color="#FFFFFF" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.containerFocused : styles.container}>
              <Iconify icon="streamline:home-4-solid" size={30} color="#FFFFFF" />
            </View>
            
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="shelf"
        options={{
          title: 'Shelf',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.containerFocused : styles.container}>
              <Iconify icon="ri:book-shelf-fill" size={30} color="#FFFFFF" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: 'Music',
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.containerFocused : styles.container}>
              <Iconify icon="basil:music-solid" size={30} color="#FFFFFF" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFocused: {
    backgroundColor: '#FA2D38',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.79,
  },
});

//TODOs

/*
To take the icons and make a single function or something to handle them.
animate the transition between the icon clicks, and make it look smooth

*/