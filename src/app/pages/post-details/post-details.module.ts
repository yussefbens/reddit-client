import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details.component';
import { PostDetailsRoutingModule } from './post-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostDetailsRoutingModule
  ],
  declarations: [PostDetailsComponent]
})
export class PostDetailsModule { }
