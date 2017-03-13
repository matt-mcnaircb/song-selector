import { Component } from '@angular/core';
import { SongHistoryService } from './song-history/song-history.service';
import { Song } from './song-history/models/song.interface';
import { Language } from './song-history/models/language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SongHistoryService]
})
export class AppComponent {
  title = 'app works!';
  songs: Song[];

  constructor(private songHistoryService: SongHistoryService){
    this.getSongs();
  }

  getSongs(): void {
    this.songs = this.songHistoryService.getSongs();
  }

  getLanguage(lang: Language): string {
    return Language[lang];
  }
}
