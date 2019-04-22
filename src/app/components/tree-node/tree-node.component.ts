import { Component, OnInit, Input } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector:    'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls:  ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {
  @Input('nodes') nodes; //nodes structure to draw
   
  constructor(public platform: Platform, public nav: NavController) {}
  
  ngOnInit() {}

  //NODE CLICK FUNCTION: If the node is a child (it has the component property) 
  clickNode(node) {
    if(!node.sub && node.url){
       //NODE IS A CHILD --> open Page Component in data model, passing the node such as parameter.
      this.nav.navigateForward([node.url, {node: JSON.stringify(node)}]);      
    }
  }

  handleDragStart(iEvent, iNode) {
    console.log('dragstart', event);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nodes, event.previousIndex, event.currentIndex);
  }

}
