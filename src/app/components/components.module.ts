import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { IonicModule } from '@ionic/angular';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [TreeNodeComponent],
	imports: [IonicModule, CommonModule, DragDropModule],
	exports: [TreeNodeComponent]
})
export class ComponentsModule {}
