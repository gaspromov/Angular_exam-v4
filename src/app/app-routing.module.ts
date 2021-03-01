import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlugComponent } from './components/plug/plug.component';
import { ViewComponent } from './components/view/view.component';
import { MainComponent } from './screens/main/main.component';

const routes: Routes = [

  { path: 'main', component: PlugComponent },
  { path: 'view', component: ViewComponent },
  { path: '**', redirectTo: '/main' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
