import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'nishko'
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent),
        title: 'nishko | projects'
    },
    {
        path: 'blogs',
        loadComponent: () => import('./pages/blogs/blogs.component').then(c => c.BlogsComponent),
        title: 'nishko | blogs',

    },
    {
        path: '**',
        redirectTo: ''
    }
];
