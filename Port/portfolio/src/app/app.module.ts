import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ProjectComponent,
    FooterComponent,
    NotfoundComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
