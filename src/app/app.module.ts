import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GPT_LOADER, GPT_SOURCE } from '@wwei/dfp';
import { EMPTY, interval, of } from 'rxjs';
import { delay, switchMap, take } from 'rxjs/operators';

import { BaseComponent } from './base.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [BaseComponent, AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: GPT_LOADER,
      useValue: interval(200).pipe(
        switchMap(() =>
          document.readyState == 'complete' ? of(GPT_SOURCE.STANDARD) : EMPTY,
        ),
        delay(500),
        take(1),
      ),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
