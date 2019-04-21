import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-node-page',
  templateUrl: './node-page.page.html',
  styleUrls: ['./node-page.page.scss'],
})
export class NodePagePage implements OnInit {
  node;
  constructor(private router: ActivatedRoute,) { 
    this.node = JSON.parse(router.snapshot.paramMap.get("node"));
  }

  ngOnInit() {
  }

}
