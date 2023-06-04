import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNoToolComponent } from './pages/single-no-tool/single-no-tool.component';
import { AboutComponent } from './pages/about/about.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BackgroundLightupBoxComponent } from './components/background-lightup-box/background-lightup-box.component';


const routes: Routes = [
  { path: '', redirectTo: 'single-tool', pathMatch: 'full' }, 
  { path: 'tactical', redirectTo: 'single-tool', pathMatch: 'full' }, 
  { path: 'qualified', redirectTo: 'single-tool', pathMatch: 'full' }, 
  { path: 'single-tool', component: SingleNoToolComponent },

  { path: 'light-up-boxes', component: BackgroundLightupBoxComponent },

  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
