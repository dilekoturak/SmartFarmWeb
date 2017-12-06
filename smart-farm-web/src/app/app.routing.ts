import {NgModule} from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {HomeComponent} from './components/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'dashboard/:id',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      { path: '**', redirectTo: '', pathMatch: 'full'},
    ], { preloadingStrategy: PreloadAllModules, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
