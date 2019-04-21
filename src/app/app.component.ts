import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/**
 * Node for to-do item
 */
export class TodoItemNode {
  children: TodoItemNode[];
  item: string;
}

/**
 * Flat to-do item node with expandable and level information
 */
export class TodoItemFlatNode {
  item: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  /** The selection for checklist */
  checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

  public appPages = [
    {
      title: 'Example 01',
      url: '/example-folder'
       
    },
    {
      title: 'Example 02',
      url: '/example-node'
    },
    {
      title: 'Example 03',
      url: '/example-jsonmap'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
