import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversaionsPageRoutingModule } from './conversaions-routing.module';

import { ConversaionsPage } from './conversaions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversaionsPageRoutingModule
  ],
  declarations: [ConversaionsPage]
})
export class ConversaionsPageModule {}
