import { LotacaoComponent } from './components/lotacao/lotacao.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LinhasService } from './services/linhas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItinerarioComponent } from './components/itinerario/itinerario.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OnibusComponent,
    LotacaoComponent,
    ItinerarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LinhasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
