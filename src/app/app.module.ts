import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestInputComponent } from './test-input/test-input.component';
import { TestSelectComponent } from './test-select/test-select.component';
import { TestNumberComponent } from './test-number/test-number.component';
import { TestCheckboxComponent } from './test-checkbox/test-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInputComponent,
    TestSelectComponent,
    TestNumberComponent,
    TestCheckboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
