## Requirement

Environment Setup

1. **yarn**
2. **node 16**
3. **detox-cli v19**

```
npm install detox-cli@19.0.0 --global
```

## Quick Start

1. yarn install at app/ directory

```
yarn install
```

2.  build ios and android apps in debug mode

```
cd app
yarn detox:build:ios-debug
yarn detox:build-android-debug
```

you may close the metro instance created from building ios if you want to.

3. run ios simulator and android emulator

ios:

```
cd app/ios
pod install
yarn ios
```

android:

```
cd app
yarn android
```

now there should be a ios simulator and a android emulator both running our React Native App.

4. run detox tests

for ios:

```
yarn e2e:ios-debug
```

for android:

```
yarn e2e:android-debug
```
