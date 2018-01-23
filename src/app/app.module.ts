import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { CookingComponent } from './cooking/cooking.component';
import { routing } from './app.routing';
import { CategoriesComponent } from './categories/categories.component';
// import { CompletenessPipe } from './completeness.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    CookingComponent,
    CategoriesComponent
    // CompletenessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
