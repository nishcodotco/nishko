import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BlogsComponent } from './pages/blogs/blogs.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'nishko'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        // loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent),
        title: 'nishko | projects'
    },
    {
        path: 'blogs',
        component: BlogsComponent,
        // loadComponent: () => import('./pages/blogs/blogs.component').then(c => c.BlogsComponent),
        title: 'nishko | blogs',

    },
    {
        path: '**',
        redirectTo: ''
    }
];
