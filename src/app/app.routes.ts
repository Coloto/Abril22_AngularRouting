import { Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { BlogComponent } from './blog/blog.component';
import { BlogCiberComponent } from './blog-ciber/blog-ciber.component';
import { ArticuloCiberComponent } from './articulo-ciber/articulo-ciber.component';

export const routes: Routes = [
    {path: 'blog', component: BlogComponent},
    {path: 'articulo/:id', title: 'Articulo', component: ArticuloComponent},
    {path: 'blog-ciber', component: BlogCiberComponent},
    {path: 'articulo-ciber/:id', title: 'ArticuloCiber', component: ArticuloCiberComponent}
];
