import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [


  {path:'footer-component',component:FooterComponent},
  
    {path:'interests-component',component:InterestsComponent},
    {path:'skills-component',component:SkillsComponent},
    {path:'education-component',component:EducationComponent},
    {path:'contact-component',component:ContactComponent},
   
   
  {path:'header-component',component:HeaderComponent}
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }