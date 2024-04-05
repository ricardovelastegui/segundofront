import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupClientComponent } from './basic/components/signup-client/signup-client.component';
import { SignupCompanyComponent } from './basic/components/signup-company/signup-company.component';
import { LoginComponent } from './basic/components/login/login.component';

const routes: Routes = [

  { path: 'register_client', component: SignupClientComponent },
  { path: 'register_company', component: SignupCompanyComponent },
  { path: 'login', component: LoginComponent }
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, 
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
