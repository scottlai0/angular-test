import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleNoToolComponent } from './pages/single-no-tool/single-no-tool.component';
import { SnapshotCardComponent } from './components/snapshot-card/snapshot-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './partials/sidenav/sidenav.component';
import { SlidingRadioCheckboxComponent } from './components/sliding-radio-checkbox/sliding-radio-checkbox.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BackgroundLightupBoxComponent } from './components/background-lightup-box/background-lightup-box.component';
import { HotTeaCupComponent } from './components/hot-tea-cup/hot-tea-cup.component';
import { BackgroundStaticComponent } from './components/background-static/background-static.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleNoToolComponent,
    SnapshotCardComponent,
    BodyComponent,
    SidenavComponent,
    SlidingRadioCheckboxComponent,
    AboutComponent,
    SettingsComponent,
    BackgroundLightupBoxComponent,
    HotTeaCupComponent,
    BackgroundStaticComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
