import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlugComponent } from './screens/plug/plug.component';
import { ViewComponent } from './screens/view/view.component';

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
