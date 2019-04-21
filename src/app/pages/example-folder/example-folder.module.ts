import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { ExampleFolderPage } from './example-folder.page';

const routes: Routes = [
  {
    path: '',
    component: ExampleFolderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ExampleFolderPage]
})
export class ExampleFolderPageModule {}
