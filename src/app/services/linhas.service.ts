import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinhasService {

  onibusUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o';
  lotacaoUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=l';
  itinerarioUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  public getLinhasOnibus(): Observable<any> {
    return this.http.get(`${this.onibusUrl}`);
  }

  public getLinhasLotacao(): Observable<any> {
    return this.http.get(`${this.lotacaoUrl}`);
  }

  public getItinerario(idLinha: number): Observable<any> {
    return this.http.get(`${this.itinerarioUrl+idLinha}`);
  }

}
