import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import{RegisterComponent} from './register/register.component'
import{NewComponent} from './new/new.component'
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login/:id', component: LoginComponent},
    {path: 'new/:id', component:NewComponent},
    {path: 'food/:id', component: DetailComponent},
    { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }