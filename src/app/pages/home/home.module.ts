import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PostsModule } from 'src/app/shared/modules/posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
