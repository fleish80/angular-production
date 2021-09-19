import { Song } from '@angular-production/api-interfaces';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SongService} from '@angular-production/core-data';

@Component({
  selector: 'angular-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // songs: Song[] = [
  //   {
  //     id: '1',
  //     title: 'Far Beyond The Sun',
  //     description: 'A neo classical song by Yngwie Malmsteen',
  //   },
  //   {
  //     id: '2',
  //     title: 'Sega Sunset',
  //     description: 'A witch house banger by non other than Lorn ',
  //   },
  //   {
  //     id: '3',
  //     title: 'Norton Commander',
  //     description: 'A chill alternative song by Men I Trust',
  //   },
  // ];

  songs$: Observable<Song[]>;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }
}
