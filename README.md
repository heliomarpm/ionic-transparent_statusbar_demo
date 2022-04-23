# IONIC 3+ - Transparent StatusBar Demo

Small demo of how to make transparent status bar using ionic 3, 4, 5, 6

![Screenshot](https://github.com/heliomarpm/screenshots/blob/main/screenshot-ionic-demo-statusbar-transparent.png?raw=true)

## Get started

* Clone this repository:  `git@github.com:heliomarpm/ionic-transparent-statusbar-demo.git`
* Run `npm install` from the project root.
* Run `ionic cordova run android` in a terminal from the project root.

## Transparent statusBar for android

* Run `ionic cordova platform add android` in a terminal
* On `MainActivity.java` file on Android platform folder`platforms/android/app/src/java/.../MainActivity.java`, paste the following code after `super.onCreate(...)`

```java
...

// packager for statusbar transparent
import android.os.Build;
import android.view.View;

...
// enable transparent
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
  getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
}

```

* In the file `app.component.ts` in the project folder `src/app/app.component.ts`. Change the background using `.backgroundColorByHexString()`

```javascript
this.platform.ready().then(() => {
  // #AARRGGBB where AA is an alpha value
  this.statusBar.backgroundColorByHexString("#33000000");

});
```

* In the same way. You can set `StatusBarBackgroundColor` in `config.xml` from the project root.
But, When you build an Ionic project for IOS platform. You may need to remove it. Pick one you like.

```xml
<preference name="StatusBarBackgroundColor" value="#33000000"/>
```

* Finally, to maintain proper spacing in the title, open the `app.module.ts` file and add the configuration options to `IonicModule.forRoot( ? )`

_for Ionic v3, use_ `{statusbarPadding: true}`

```javascript
imports [
  ...
  IonicModule.forRoot({_forceStatusbarPadding: true})
]
```

Credits for `https://github.com/jeneser/ionic-super-bar.git`
