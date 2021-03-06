import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './components/results/results.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { BehaviorSubject } from "rxjs";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
      AppComponent,
      HomeComponent,
      ResultsComponent,
  ],
  imports: [
      NativeScriptModule,
      AppRoutingModule,
      NativeScriptFormsModule,
      TNSFontIconModule.forRoot({
        'mdi': 'material-design-icons.css'
      })
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

