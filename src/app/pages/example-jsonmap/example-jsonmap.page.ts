import { Component, OnInit } from '@angular/core';
import { NodeDataService } from '../../services/node-data.service';

@Component({
  selector: 'app-example-jsonmap',
  templateUrl: './example-jsonmap.page.html',
  styleUrls: ['./example-jsonmap.page.scss'],
})
export class ExampleJsonmapPage implements OnInit {
  myJson;
  constructor(public mapService: NodeDataService) { 
    this.myJson = this.mapService.mapJSON2TreeNode(this.mapService.firebaseJSON);
    //console.log(JSON.stringify(this.myJson));
  }

  ngOnInit() {
  }

}
