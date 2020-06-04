import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
      },
      // {path: '',redirectTo:'/login', pathMatch:'full'},
      {
        path:'employee',
        component: EmployeeListComponent
      }
];


const fullRoutes = [...routes]

// console.log(fullRoutes);
@NgModule({
  imports: [RouterModule.forRoot(fullRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}