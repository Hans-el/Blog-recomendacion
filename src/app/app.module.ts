import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaprincipalComponent } from './componentes/paginaprincipal/paginaprincipal.component';
import { AboutComponent } from './componentes/about/about.component';
import { BlogPostComponent } from './componentes/blog-post/blog-post.component';
import { ProductComponent } from './componentes/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaprincipalComponent,
    AboutComponent,
    BlogPostComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
