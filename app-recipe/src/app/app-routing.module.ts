import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostRecipeComponent } from './posts/post-recipe/post-recipe.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'signUp', pathMatch: 'full' },
  { path: 'createPosts', component: PostRecipeComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
