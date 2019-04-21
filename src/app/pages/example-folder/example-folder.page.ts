import { Component, OnInit } from '@angular/core';
import { NodeDataService } from '../../services/node-data.service';

@Component({
  selector: 'app-example-folder',
  templateUrl: './example-folder.page.html',
  styleUrls: ['./example-folder.page.scss'],
})
export class ExampleFolderPage implements OnInit {
  
  constructor(public dataExample: NodeDataService) { }

  ngOnInit() {
    
  }

}
