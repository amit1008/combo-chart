import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ComboChartComponent, ComboSeriesVerticalComponent } from '../app/combo-chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '../../projects/swimlane/ngx-charts/src/lib/ngx-charts.module';
//import { NgxUIModule } from '@swimlane/ngx-ui';

@NgModule({
  declarations: [
    AppComponent,
    ComboChartComponent,
    ComboSeriesVerticalComponent
  ],
  imports: [
    NgxChartsModule,
  //  NgxUIModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
