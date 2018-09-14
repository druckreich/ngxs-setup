import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';
import {ReactiveFormsModule} from '@angular/forms';
import {MainService} from './+store/main.service';
import {MainState} from './+store/main.state';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(),
    NgxsModule.forRoot([
      MainState

    ]),

    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    // NgxsRouterPluginModule.forRoot()
    NgxsLoggerPluginModule.forRoot({disabled: true})
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
