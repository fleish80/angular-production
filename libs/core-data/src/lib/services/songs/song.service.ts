import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Song} from '@angular-production/api-interfaces';

const ENDPOINT = 'http://localhost:3333/api/songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) {
  }

  all() {
    return this.http.get<Song[]>(ENDPOINT);
  }

  find(id: string) {
    this.http.get<Song>(`${ENDPOINT}/${id}`);
  }

  create(song: Song) {
    return this.http.post(ENDPOINT, song);
  }

  update(song: Song) {
    return this.http.patch(`${ENDPOINT}/${song.id}`, song);
  }

  delete(song: Song) {
    return this.http.delete(`${ENDPOINT}/${song.id}`);
  }
}
