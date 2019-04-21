import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {
    public dataExample1 = [
      {
      title: 'Users',  isExpanded: false, icon: 'contacts',
      sub: [
        {title: 'Jon',  isExpanded: false, icon: 'contact', sub: [
            {title: 'Email',  isExpanded: false, icon: 'mail', url: 'node-page'},
            {title: 'Street',  isExpanded: false, icon: 'home', url: 'node-page'},
            {title: 'Phone',  isExpanded: false, icon: 'call', url: 'node-page'}
        ]},
        {title: 'Sergio',  isExpanded: false, icon: 'contact', url: 'node-page'},
        {title: 'Winnie',  isExpanded: false, icon: 'contact',  sub: [
            {title: 'Street',  isExpanded: false, icon: 'home', url: 'node-page'},
            {title: 'Email',  isExpanded: false, icon: 'mail',  sub: [
                {title: 'sss@hotmail.com', icon: 'at', url: 'node-page'},
                {title: 'sss@gmail.com', icon: 'at', url: 'node-page'},
                {title: 'aaa@yahoo.com', icon: 'at', url: 'node-page'}
            ]}
        ]}
      ]
    },
    {
      title: 'Node 02',  isExpanded: false, icon: 'cube', 
      sub: [
        {title: 'Node 02.1',  isExpanded: false, icon: 'at', url: 'node-page'},
        {title: 'Node 02.2',  isExpanded: false, icon: 'at', url: 'node-page'},
        {title: 'Node 02.3',  isExpanded: false, icon: 'at', url: 'node-page'}
      ]
    },
    
      {
      title: 'Tables',  isExpanded: false, icon: 'grid',
      sub: [
        {title: 'Table 01',  isExpanded: false, icon: 'cube', url: 'node-page'},
        {title: 'Table 02',  isExpanded: false, icon: 'cube', url: 'node-page'},
        {title: 'Table 03',  isExpanded: false, icon: 'cube', url: 'node-page'}
      ]
    }
  ];
  public dataExample2 = [
        {
         title: 'Folder 01', isExpanded: false, icon: 'folder', iconExpanded: 'folder-open',
         sub: [
           {title: 'Folder 02', isExpanded: false, icon: 'folder', iconExpanded: 'folder-open',
            sub: [
               {title: 'File01', icon: 'document',  isExpanded: false, url: 'node-page'},
               {title: 'File02', icon: 'image', isExpanded: false, url: 'node-page'},
               {title: 'File03', icon: 'document', isExpanded: false, url: 'node-page'}
            ]},
           {title: 'Folder 03',  isExpanded: false, icon: 'folder', iconExpanded: 'folder-open', url: 'node-page'},
           {title: 'Folder 04', isExpanded: false, icon: 'folder', iconExpanded: 'folder-open',  sub: [
               {title: 'File04', icon: 'document', isExpanded: false, url: 'node-page'},
               {title: 'File05', icon: 'document', isExpanded: false, url: 'node-page'},
               {title: 'Folder 06', isExpanded: false, icon: 'folder', iconExpanded: 'folder-open',   sub: [
                   {title: 'File06', icon: 'document',  isExpanded: false, url: 'node-page'},
                   {title: 'File07', icon: 'document', isExpanded: false, url: 'node-page'},
                   {title: 'File08', icon: 'document', isExpanded: false, url: 'node-page'}
               ]}
           ]}
         ]
       },
       {
         title: 'Folder 07', isExpanded: false, icon: 'folder', iconExpanded: 'folder-open', 
         sub: [
           {title: 'Node 02.1', icon: 'document', isExpanded: false, url: null},
           {title: 'Node 02.2', icon: 'document', isExpanded: false, url: null},
           {title: 'Node 02.3', icon: 'document', isExpanded: false,  url: null}
         ]
       },
      
        {
         title: 'Folder 08', isExpanded: false, icon: 'folder', iconExpanded: 'folder-open',               
         sub: [
           {title: 'Node 03.1',  icon: 'document', isExpanded: false, url: null},
           {title: 'Node 03.2',  icon: 'document', isExpanded: false,  url: null},
           {title: 'Node 03.3',  icon: 'document', isExpanded: false, url: null}
         ]
       }
     ];
  firebaseJSON = {
      "users": {
          "user1": {
              "email": "user1@gmail.com",
              "transactions": {
                  "transaction1": {
                      "total": "500",
                      "products": {
                          "product1": "paper airplanes",
                          "product2": "tooth picks"
                      }
                  },
                  "transaction2": {
                      "total": "250",
                      "products": {
                          "product1": "rocks and dirt",
                          "product2": "spatulas"
                      }
                  }
              }
          }
      }
  }
  constructor() { }

  mapJSON2TreeNode(jsonObject) {        
    var nodeStructure = []; 
    if(jsonObject) {   
      for (var prop in jsonObject) {
        var node: any = {};
        node.isExpanded = false;
         
        if((jsonObject[prop].constructor == Object && Object.keys(jsonObject[prop]) && Object.keys(jsonObject[prop]).length > 0) || Array.isArray(jsonObject[prop])) {
          //is a parent node
          node.title = prop; // or if you want the value use jsonObject[prop]; 
          node.icon = 'folder';
          node.iconExpanded = 'folder-open';
          //create the structure for his child nodes
          node.sub = this.mapJSON2TreeNode(jsonObject[prop]);
        }else{
          //is a child node
          node.title = prop + ": " + jsonObject[prop]; 
          node.icon = this.getChildIcon(prop); //insert a icon if you want
          //node.url =""; //url if you want 
        } 
        nodeStructure.push(node);        
      }
    }   
    return nodeStructure;   
  }
  getChildIcon(type: string) {
    switch(type){
      case 'email':
        return 'mail';
      case 'name':
        return 'user';
      case 'product1':
        return 'cube';
      case 'product2':
        return 'tennisball';
    }
    return "none";
     
  }
  
}
