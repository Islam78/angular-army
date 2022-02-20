import { ItemParentComponent } from './item-parent/item-parent.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { TrackPointComponent } from './track-point/track-point.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgComponent } from './svg/svg.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { DireciveComponent } from './direcive/direcive.component';
import { PipeComponent } from './pipe/pipe.component';
import { DateComponent } from './date/date.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'trackPoint', component: TrackPointComponent },
  { path: 'ngSwitch', component: NgSwitchComponent },
  { path: 'itemParent', component: ItemParentComponent },
  { path: 'SVG', component: SvgComponent },
  { path: 'viewChild', component: ViewChildComponent },
  { path: 'directive', component: DireciveComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'customPipe', component: CustomPipeComponent },
  { path: 'date', component: DateComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
