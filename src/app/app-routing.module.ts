import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './galery/galery.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'galery', component: GaleryComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
