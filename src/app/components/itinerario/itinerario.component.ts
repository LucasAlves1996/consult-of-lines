import { LinhasService } from './../../services/linhas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.css']
})
export class ItinerarioComponent implements OnInit {

  itinerario: any;
  idLinha: number;
  error: any;

  constructor(private linhasService: LinhasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idLinha = params.idLinha;
    });
    this.getItinerario(this.idLinha);
  }

  getItinerario(idLinha: number) {
    this.linhasService.getItinerario(idLinha).subscribe(
      (data: any) => {
        this.itinerario = data;
      },
      (error: any) => {
        this.error = error;
      });
  }

}
