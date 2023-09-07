import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia';

  constructor(private http: HttpClient) {}

  getTriviaData(category: string, limit: number): Observable<any> {
    console.log(category, limit);

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'insertKey',
        'X-RapidAPI-Host': 'trivia-by-api-ninjas.p.rapidapi.com',
      }),
    };

    const params = {
      category: category,
      limit: limit.toString(),
    };

    return this.http.get(this.apiUrl, { params: params, ...httpOptions });
  }
}
