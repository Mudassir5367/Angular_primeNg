import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { Table1Component } from './table/table.component';


const routes: Routes = [
  { path: 'app-form', component: FormComponent },
  { path: 'app-table', component: Table1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
