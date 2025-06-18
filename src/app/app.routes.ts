import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [

    {path:'home',component:HomeComponent, data: { showNavbar: false }},
    {path:'about',component:AboutComponent, data: { showNavbar: false }}

,{path:'skills',component:SkillsComponent, data: { showNavbar: false }},
{path:'project',component:ProjectComponent, data: { showNavbar: false }},
{path:'contact',component:ContactComponent, data: { showNavbar: false }}
];
