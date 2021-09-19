import {Component, OnInit} from '@angular/core';
import {SongService} from '@angular-production/core-data';
import {Observable} from 'rxjs';
import {Song} from '@angular-production/api-interfaces';

@Component({
  selector: 'angular-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private songService: SongService) {
  }

  songs$: Observable<Song[]>;

  ngOnInit(): void {
    this.songs$ = this.songService.all();
  }
}
