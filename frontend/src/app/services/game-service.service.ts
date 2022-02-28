import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameServiceService {
  base_url: string = 'http://localhost:3000';

  constructor(public http: HttpClient) {}

  getGames() {
    return this.http.get(`${this.base_url}/games/getGames`);
  }
}
