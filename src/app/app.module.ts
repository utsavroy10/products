import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Body/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Body/about/about.component';
import { SkillsComponent } from './Body/skills/skills.component';
import { ContactComponent } from './Body/contact/contact.component';
import { WorksComponent } from './works/works.component';

const portfolioroutes:Routes=[
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(portfolioroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
