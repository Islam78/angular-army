import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackPointComponent } from './track-point/track-point.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemParentComponent } from './item-parent/item-parent.component';
import { ItemChildComponent } from './item-child/item-child.component';
import { SvgComponent } from './svg/svg.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { DireciveComponent } from './direcive/direcive.component';
import { DirectiveClass } from './direcive/app-directive';
import { PipeComponent } from './pipe/pipe.component';
import { DateComponent } from './date/date.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { DefaultImg } from './custom-pipe/default-img.pipe';
import { SunPipe } from './custom-pipe/sun.pipe';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackPointComponent,
    NgSwitchComponent,
    ItemParentComponent,
    ItemChildComponent,
    SvgComponent,
    ViewChildComponent,
    DireciveComponent,
    DirectiveClass,
    PipeComponent,
    DateComponent,
    CustomPipeComponent,
    DefaultImg,
    SunPipe,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,

  ],
  imports: [
    CommonModule, // مش صح عشان اصلا BrowserModule مستدعيها
    BrowserModule, // بتستدعى جواها ال common module ف مش ببقا محتاج استدعيها
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
