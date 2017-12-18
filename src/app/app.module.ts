import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule  } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { rootReducer } from '../app/redux/root.reducer';
import { InMemoryDataService } from "../app/in-memory-data.service";
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SportsModule } from './sports/sports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    SportsModule,
    StoreModule.forRoot(rootReducer),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
