import { HomeComponent } from './../components/home/home.component';
import { ItinerarioComponent } from './../components/itinerario/itinerario.component';
import { LotacaoComponent } from './../components/lotacao/lotacao.component';
import { OnibusComponent } from './../components/onibus/onibus.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onibus', component: OnibusComponent },
  { path: 'onibus/itinerario/:idLinha', component: ItinerarioComponent },
  { path: 'lotacao', component: LotacaoComponent },
  { path: 'lotacao/itinerario/:idLinha', component: ItinerarioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}