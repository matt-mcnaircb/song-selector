import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Song } from './models/song.interface';
import { SONGS } from './mock-song-history';

@Injectable()
export class SongHistoryService {
    getSongs(): Song[] {
        return SONGS;
    }
}