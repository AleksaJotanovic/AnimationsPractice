import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './pipes/pipes.component';
import { ShorteningPipe } from './src/pipes/shortening.pipe';
import { FilterPipe } from './src/pipes/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ShorteningPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
