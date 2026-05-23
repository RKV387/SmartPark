import React from 'react';
import { Text, View } from 'react-native';
import { useAppStore } from '../store/appStore';

export function HomeScreen() {
  const { networkMode, gpsAvailable } = useAppStore();
  return (
    <View style={{ flex: 1, backgroundColor: '#05070d', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#7cf6ff', fontSize: 24, fontWeight: '700' }}>SmartPark AI</Text>
      <Text style={{ color: '#d2e9ff', marginTop: 8 }}>Network: {networkMode}</Text>
      <Text style={{ color: '#d2e9ff' }}>GPS: {gpsAvailable ? 'available' : 'degraded/offline'}</Text>
    </View>
  );
}
