import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabloComponent } from './components/tablo/tablo.component';

const routes: Routes = [
  {
    path: '',
    component: TabloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
