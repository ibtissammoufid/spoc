import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversaionsPage } from './conversaions.page';

const routes: Routes = [
  {
    path: '',
    component: ConversaionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversaionsPageRoutingModule {}
