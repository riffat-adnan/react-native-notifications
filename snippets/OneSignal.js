// src/components/NotificationScreen.js
import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import OneSignal from 'react-native-onesignal';

const OneSignalNotificationScreen = () => {
  useEffect(() => {
    OneSignal.setAppId('YOUR_ONESIGNAL_APP_ID');

    OneSignal.promptForPushNotificationsWithUserResponse();

    OneSignal.setNotificationOpenedHandler(notification => {
      Alert.alert('Notification opened:', JSON.stringify(notification));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OneSignal Notifications</Text>
      <Button title="Test OneSignal Notification" onPress={() => {}} />
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

export default OneSignalNotificationScreen;
