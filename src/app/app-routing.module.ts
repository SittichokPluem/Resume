import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InterestsComponent } from './interests/interests.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SkillsComponent } from './skills/skills.component';
import { RandomUserComponent} from './random-user/random-user.component';
const routes: Routes = [

  {path:'random-user',component:RandomUserComponent},
  {path:'footer-component',component:FooterComponent},
  {path:'sidenav-component',component:SidenavComponent},
    {path:'interests',component:InterestsComponent},
    {path:'skills',component:SkillsComponent},
    {path:'education',component:EducationComponent},
    {path:'contact',component:ContactComponent},
   {path: '',   redirectTo: '/interests', pathMatch: 'full'},
   { path: '**', component: AppComponent },
  {path:'header-component',component:HeaderComponent}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }