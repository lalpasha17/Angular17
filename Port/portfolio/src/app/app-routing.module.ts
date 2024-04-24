import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { 
    path:'',component:HomeComponent 
    
  },
  {
    path:'home',component:HomeComponent,
    children: [
      { path:'about',component:AboutComponent},
      { path:'contact',component:ContactComponent},
    ],
  },
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent },
  { path:'projects',component:ProjectsComponent},
  { path:'project/:id',component:ProjectComponent},
  { path:'education',component:EducationComponent},
  { path:'skills',component:SkillsComponent},
  { path:'**',component:NotfoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
