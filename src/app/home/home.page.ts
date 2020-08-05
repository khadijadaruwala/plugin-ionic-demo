import { Component } from '@angular/core';
import { PluginService } from '../plugin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public isRecievedData = false;
  public reportData: object;

  constructor(public pluginService: PluginService) { }

  add() {
    this.pluginService.add(5, 3).then(
      (data) => console.log('Add', data)).catch((error) => console.error(error));
  }
}
