import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

private baseUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/'

private apiUrl: string = this.baseUrl + 'candidates';

private randomNum: number = Math.floor((Math.random()) * 5);
private numString: string = "0"; 

constructor(private http: HttpClient) { }

getCandidatos(): Observable<CandidatosDetailComponent[]> {
    return this.http.get<CandidatosDetailComponent[]>(this.apiUrl);
}

getCandidato(id: string): Observable<CandidatosDetailComponent> {
    return this.http.get<CandidatosDetailComponent>(this.apiUrl + "/" + id);
}

getRandomCandidato(): Observable<CandidatosDetailComponent> {
  this.numString = this.randomNum.toString();
  return this.http.get<CandidatosDetailComponent>(this.apiUrl + "/" + this.numString);
}

}
