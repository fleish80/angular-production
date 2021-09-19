import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song} from '@angular-production/api-interfaces';

@Component({
  selector: 'angular-production-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent {

  @Input() songs: Song[] = [];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
