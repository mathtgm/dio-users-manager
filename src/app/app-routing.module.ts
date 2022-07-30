import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UsersListComponent } from './shared/components/users-list/users-list.component';

const routes: Routes = [
    {
      path: '',
      component: UsersListComponent
    },
    {
      path: 'user/form',
      component: UserFormComponent
    },
    {
      path: 'user/form/:id',
      component: UserFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
