import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  
  MatIconModule, MatInputModule,
  MatAutocompleteModule,MatChipsModule,
  MatFormFieldModule

  
} from '@angular/material';
import { HomePageComponent } from './component/homepage/homepage.component';
import { SearchbarComponent } from './component/searchbar/searchbar.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
     MatIconModule, MatInputModule,
    MatAutocompleteModule,
   MatChipsModule,
    MatFormFieldModule

    
    
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }