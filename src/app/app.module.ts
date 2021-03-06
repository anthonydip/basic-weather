import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, 
  NbLayoutModule, 
  NbInputModule,  
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './table-view/table-view.component';
import { GraphViewComponent } from './graph-view/graph-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableViewComponent,
    GraphViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    FormsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
