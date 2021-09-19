import {Injectable} from '@nestjs/common';
import {UpdateSongDto} from './dto/update-song.dto';
import {Song} from '@angular-production/api-interfaces';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class SongsService {


  songs: Song[] = [
    {
      "id": "1",
      "title": "Far Beyond The Sun",
      "description": "A neo classical song by Yngwie Malmsteen"
    },
    {
      "id": "2",
      "title": "Sega Sunset",
      "description": "A witch house banger by non other than Lorn "
    },
    {
      "id": "3",
      "title": "Norton Commander",
      "description": "A chill alternative song by Men I Trust"
    }
  ];


  create(song: Song) {
    this.songs = [...this.songs, Object.assign({}, song, {id: uuidv4()})];
    return this.songs;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: string) {
    return this.songs.find((song: Song) => song.id === id);
  }

  update(id: string, song: Song) {
   this.songs = this.songs.map((s: Song) => (s.id === id ? song: s));
   return this.songs;
  }

  remove(id: string) {
    this.songs = this.songs.filter((song: Song) => song.id !== id);
    return this.songs;
  }
}
