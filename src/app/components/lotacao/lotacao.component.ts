import { LinhasService } from './../../services/linhas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.css']
})
export class LotacaoComponent implements OnInit {

  linhas: any;
  linhasAux: any;
  error: any;

  constructor(private linhasService: LinhasService) { }

  ngOnInit(): void {
    this.getLinhasLotacao();
    setTimeout(function () {
      (<HTMLInputElement>document.getElementById('spinner')).style.display = 'none';
    }, 500);
  }

  getLinhasLotacao() {
    this.linhasService.getLinhasLotacao().subscribe(
      (data: any) => {
        this.linhasAux = data;
        this.linhas = data;
      },
      (error: any) => {
        this.error = error;
      });
  }

  onFilter() {
    let search = new String();
    let linhasAux = [];

    search = (<HTMLInputElement>document.getElementById('search')).value;
    
    for(let cont = 0; this.linhasAux[cont] != undefined; cont++) {
      let strNome = new String(this.linhasAux[cont].nome);
      if(strNome.indexOf(search.toLocaleUpperCase()) >= 0) {
        linhasAux.push(this.linhasAux[cont]);
      }
    }
    this.linhas = linhasAux;
  }

}
