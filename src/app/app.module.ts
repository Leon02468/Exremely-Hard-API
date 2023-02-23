import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http'
import { ArticleEffect } from 'src/ngrx/effects/article.effect';
import { ArticleReducer } from 'src/ngrx/reducers/article.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot({article: ArticleReducer}, {}),
    EffectsModule.forRoot([ArticleEffect]),

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
