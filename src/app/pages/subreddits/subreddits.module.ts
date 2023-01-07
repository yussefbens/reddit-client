import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubredditsComponent } from './subreddits.component';
import { SubredditsRoutingModule } from './subreddits-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SubredditsRoutingModule
  ],
  declarations: [SubredditsComponent]
})
export class SubredditsModule { }
