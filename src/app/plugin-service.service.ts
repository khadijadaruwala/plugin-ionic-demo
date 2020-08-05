import { Injectable } from '@angular/core';
import { cordova, IonicNativePlugin } from '@ionic-native/core';

@Injectable({
  providedIn: 'root'
})
export class PluginService extends IonicNativePlugin {
  static pluginName = 'demoplugin'; // name in package.json file of plugin
  static plugin = 'cordova-plugin-demoplugin'; // plugin id in the plugin.xml of plugin
  static pluginRef = 'DemoPlugin';  // clobbers target in the plugin.xml of plugin
  static repo = 'YOUR_GITHUB_URL';
  static platforms = ['iOS'];

  add(num1, num2): Promise<any> {
    return cordova(this, 'add', {}, [{ param1: num1, param2: num2 }]);
  }

  coolMethod(myStrMsg): Promise<any> {
    return cordova(this, 'coolMethod', {}, [myStrMsg]);
  }

  getUserData(): Promise<any> {
    return cordova(this, 'getUserData', {}, []);
  }
}
