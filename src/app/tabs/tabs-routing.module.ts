import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:
      [
        {
          path: 'profil',
          children:
            [
              {
                path: '',
                loadChildren: '../profil/profil.module#ProfilPageModule'
              }
            ]
        },
        {
          path: 'messages',
          children:
            [
              {
                path: '',
                loadChildren: '../messages/messages.module#MessagesPageModule'
              }
            ]
        },
        {
          path: 'assignments',
          children:
            [
              {
                path: '',
                loadChildren: '../assignments/assignments.module#AssignmentsPageModule'
              }
            ]
        },
        {
          path: 'files',
          children:
            [
              {
                path: '',
                loadChildren: '../files/files.module#FilesPageModule'
              }
            ]
        },
        {
          path: 'tabs',
          redirectTo: '/tabs/files',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: 'tabs',
    redirectTo: '/tabs/files',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}