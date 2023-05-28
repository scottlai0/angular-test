import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNoToolComponent } from './pages/single-no-tool/single-no-tool.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'single-tool', pathMatch: 'full' }, 
  { path: 'single-tool', component: SingleNoToolComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
