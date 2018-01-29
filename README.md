# RevolvAir

## Prerequisites

### Avertissement

Le projet a été testé et est fonctionnel sur iOS 11.2.1 avec macOS 10.13.2.
Il est possible de devoir ajouter certains réglages sur Windows et Android pour que le code compile.
[Android studio](https://developer.android.com/studio/index.html) est requis pour lancer le projet sur Android.



La librairie [react-native-maps](https://github.com/react-community/react-native-maps) requiert une clé API Google maps lorsqu'utilisé sur Android puisque c'est l'unique option disponible pour afficher une carte.
Sur iOS, la carte utilisé par défaut est celle de l'application "Plan" qui ne nécessite pas de clé. Voir la doc de la librairie pour plus d'info! 

Requis pour travailler sans EXPO (Ce que nous faisons ici)

```
npm install -g react-native-cli
```

## Installing

```
npm install
```

### Seulement pour iOS

https://cocoapods.org/

```
sudo gem install cocoapods
```

Puis ller dans le fichier ./ios
À partir de ce moment, uniquement ouvrir le projet avec .xcworkspace et non pas .xcodeproj

```
pod install
```


## Stack de l’application : 

* react-native-router-flux : Declarative React Native router (Pour la navigation)
https://github.com/aksonov/react-native-router-flux

* react-redux et redux : Predictable state container
https://github.com/reactjs/redux

* redux-logger : Logger for redux (Très utile lors du débogage!)
https://github.com/evgenyrodionov/redux-logger

* redux-thunk : Thunk middleware for Redux (Utile lors des dispatch de redux)
https://github.com/gaearon/redux-thunk

* Native-base : Cross-platform UI components 
https://github.com/GeekyAnts/NativeBase

* react-native-maps : React Native Mapview component for iOS + Android
https://github.com/react-community/react-native-maps

* victory-native : victory components for react native (Pour les charts/graphiques)
https://github.com/FormidableLabs/victory-native

* react-native-svg : nécessaire à victory pour dessiner les graphiques
https://github.com/react-native-community/react-native-svg


## Redux : 

* Cours rapides pour comprendre le principe de redux donnés par le créateur lui-même : https://egghead.io/courses/getting-started-with-redux

* Cours un peu plus longs qui explique l’architecture de l’application (PLUS IMPORTANT) : 
https://www.youtube.com/watch?v=3msLwu25SQY&list=PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5

* Testing : Jest pour tests unitaires.
https://facebook.github.io/jest/docs/en/tutorial-react-native.html


## Prise de décision

* Expo : Permet les push notifications facilement, mise en place rapide, tester sur les appareils physiques rapidement. Pas de gestion en background par contre.

* Ejection par ExpoKit : Permet d’utiliser l’API d’expo mais pas les push notifications. Plusieurs bug connus, semble pas tout à fait au points. (Encore à déterminer)

* Bare React Native : Projet « pur » de React Native avec le projet séparé entre ios et android.

https://github.com/react-community/create-react-native-app/issues/153

### Pourquoi faut-il faire attention à Expo : 
https://docs.expo.io/versions/latest/introduction/why-not-expo.html



## Points importants qui évitent beaucoup de cassage de tête :

* Linkage manuel (iOS) : Important puisqu’on ne peut plus faire un « react-native link » après avoir utilisé un Podfile qui est requis par certaines librairies. (React-native-maps par example) Un Podfile pourrait être comparé à un npm pour iOS avec une structure semblable à un fichier de config yaml. 
https://facebook.github.io/react-native/docs/linking-libraries-ios.html#manual-linking



## DOCUMENTATION GÉNÉRÉE AUTOMATIQUEMENT À PARTIR D'ICI

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.


## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

# revolvAir
