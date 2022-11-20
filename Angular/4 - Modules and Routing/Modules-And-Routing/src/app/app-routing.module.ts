import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/list/list.component';
import { UserDetailsComponent } from './user/details/details.component';
import { UserListComponent } from './user/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user/list'
  },
  {
    path: 'post-list',
    component: PostListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
