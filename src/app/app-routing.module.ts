import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'example-folder',
    pathMatch: 'full'
  },
  { path: 'example-folder', loadChildren: './pages/example-folder/example-folder.module#ExampleFolderPageModule' },
  { path: 'example-node', loadChildren: './pages/example-node/example-node.module#ExampleNodePageModule' },
  { path: 'node-page', loadChildren: './pages/node-page/node-page.module#NodePagePageModule' },
  { path: 'example-jsonmap', loadChildren: './pages/example-jsonmap/example-jsonmap.module#ExampleJsonmapPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
