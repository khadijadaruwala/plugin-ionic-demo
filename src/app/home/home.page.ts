import { Component } from '@angular/core';
import { PluginService } from '../plugin-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public isRecievedData = false;
  public reportData: object;

  constructor(public pluginService: PluginService, public alertController: AlertController) { }

  add() {
    this.pluginService.add(5, 3)
      .then((data) => {
        this.presentAlert('The sum is ' + data);
      }).catch((error) => console.error('add' + error));
  }

  callCoolMethod() {
    this.pluginService.coolMethod('Hello world')
      .then((data) => {
        this.presentAlert(data);
      }).catch((error) => console.error('callCoolMethod' + error));
  }

  getUserData(){
    this.pluginService.getUserData()
    .then((data) => {
      const firstName = data['firstName'];
      const lastName = data['lastName'];
      if (firstName !== undefined && lastName !== undefined) {
        this.presentAlert('Hello!' + firstName + ' ' + lastName);
      }
    }).catch((error) => console.error('getUserData' + error));
  }

  async presentAlert(alertMsg: string) {
    const alert = await this.alertController.create({
      subHeader: 'Alert',
      message: alertMsg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
