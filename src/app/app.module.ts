import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { DirectiveElseComponent } from './components/directive-else/directive-else.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DirectiveComponent,
    DirectiveElseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
