import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model/model.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { EventBlockerDirective } from './directives/event-blocker.directive';
//import { NgxMaskModule, IConfig } from 'ngx-mask'



@NgModule({
  declarations: [
    ModelComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
    EventBlockerDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    //NgxMaskModule.forRoot()
  ],
  exports: [
    ModelComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent
  ]
})
export class SharedModule { }
