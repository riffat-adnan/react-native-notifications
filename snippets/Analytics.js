// src/components/AnalyticsScreen.js
import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const AnalyticsScreen = () => {
  useEffect(() => {
    // Log an event when the component mounts
    const logEvent = async () => {
      await analytics().logEvent('screen_view', {
        screen_name: 'AnalyticsScreen',
        screen_class: 'AnalyticsScreen',
      });
    };

    logEvent();
  }, []);

  const logCustomEvent = async () => {
    await analytics().logEvent('button_click', {
      button_name: 'Test Button',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Analytics</Text>
      <Button title="Log Event" onPress={logCustomEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default AnalyticsScreen;
