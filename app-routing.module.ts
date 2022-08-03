import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { QualificationPageComponent } from './qualification-page/qualification-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';

const routes: Routes = [
  {path : '' , component: LoginPageComponent},
  { path: 'create-page', component: CreateAccountPageComponent },
  {path: 'qualification-page' , component:  QualificationPageComponent},
  {path: 'review-page' , component:  ReviewPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
