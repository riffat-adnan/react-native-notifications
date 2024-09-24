# React Native Notifications and Analytics

This project showcases the integration of push notifications using **OneSignal** and **Firebase Cloud Messaging (FCM)**, along with analytics using **Firebase Analytics** in a React Native application.

## Features

- Push Notifications:
  - OneSignal for managing push notifications.
  - Firebase Cloud Messaging (FCM) for handling background and foreground notifications.
- Analytics:
  - Firebase Analytics for logging events and tracking user engagement.
  - Mixpanel for detailed user behavior analysis.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- React Native development environment set up.
- Firebase project created for FCM.
- OneSignal account and app created.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/riffat-adnan/react-native-notifications-analytics.git
   cd react-native-notifications-analytics
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Set up **Firebase** and **OneSignal**:

   - **Firebase**:
     - Follow the [Firebase setup guide](https://firebase.google.com/docs/react-native/setup) to create a project and add your Android/iOS app.
     - Download the `google-services.json` for Android and `GoogleService-Info.plist` for iOS and place them in the respective directories.

   - **OneSignal**:
     - Follow the [OneSignal setup guide](https://documentation.onesignal.com/docs/react-native-sdk-setup) to create a new app and configure it.

4. Update your `android/build.gradle` file with the following lines:

   ```gradle
   buildscript {
       dependencies {
           // Add this line
           classpath 'com.google.gms:google-services:4.3.10' // check for the latest version
       }
   }
   ```

5. Add the following to your `android/app/build.gradle` file:

   ```gradle
   apply plugin: 'com.google.gms.google-services'
   ```

6. For iOS, install the CocoaPods dependencies:

   ```bash
   cd ios
   pod install
   cd ..
   ```

## Usage

1. **Run the application**:

   For Android:
   ```bash
   npx react-native run-android
   ```

   For iOS:
   ```bash
   npx react-native run-ios
   ```

2. **Testing Notifications**:
   - You can test push notifications by sending them from the OneSignal dashboard or by using the Firebase Console.

3. **Logging Events**:
   - Use the provided buttons in the app to log events to Firebase Analytics and Mixpanel.

## Code Overview

- **FCMNotificationScreen.js**: Handles FCM notifications, requests user permissions, and logs messages.
- **OneSignalNotificationScreen.js**: Manages OneSignal notifications and tracks user interactions.
- **AnalyticsScreen.js**: Contains code for logging events with Firebase and Mixpanel.

## Contributing

If you want to contribute to this project, please fork the repository and make a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Firebase](https://firebase.google.com/)
- [OneSignal](https://onesignal.com/)
- [Mixpanel](https://mixpanel.com/)
