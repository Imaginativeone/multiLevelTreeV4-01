import { Component, OnInit } from '@angular/core';
import { NodeDataService } from '../../services/node-data.service';

@Component({
  selector: 'app-example-node',
  templateUrl: './example-node.page.html',
  styleUrls: ['./example-node.page.scss'],
})
export class ExampleNodePage implements OnInit {

  constructor(public dataExample: NodeDataService) { }

  ngOnInit() {
  }

}
