import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMessageComponent
  ]
})
export class SharedModule { }
