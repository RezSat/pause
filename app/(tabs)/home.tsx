import { Image, StyleSheet, Platform, useWindowDimensions } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { rgbaArrayToRGBAColor, rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <ThemedView style={[styles.titleContainer, {
        width: 130,
        height: 40,
      }] }>
        <ThemedText type="title" style={[styles.title, {
        marginLeft: 19,
        marginTop: 4,
        }]}>Recents</ThemedText>
      </ThemedView>

      <ThemedView style={[styles.recentsContainer, {
        width: useWindowDimensions().width*0.86,
      }] }>

      </ThemedView>

      <ThemedView style={[styles.titleContainer, {
        width: 150,
        height: 40,
      }]}>
        <ThemedText type="title" style={[styles.title, {
        marginLeft: 20,
        marginTop: 4,
        }]}>Statistics</ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C3D40',
    borderRadius: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    alignSelf: 'center',
  },
  recentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#383B40',
    borderRadius: 20,
    fontSize: 12,
    textAlign: 'center',
    height: 250,
  }
});
