import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
