import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // #AARRGGBB where AA is an alpha value
      if (platform.is('android')) {
        statusBar.backgroundColorByHexString("#33000000");
      }
    });
  }
}
