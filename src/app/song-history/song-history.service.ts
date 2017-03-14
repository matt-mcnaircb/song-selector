import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Dictionary } from 'typescript-collections';

import { Song } from './models/song.interface';
import { SONGS } from './mock-song-history';

@Injectable()
export class SongHistoryService {

    private songs: Dictionary<string, Song> = new Dictionary<string, Song>();

    constructor(private http: Http) {}

    getSongs(): any[] {
        this.http.get("https://matt-mcnaircb.github.io/song-selector/assests/song-selection-history.csv")
            .subscribe(
                data => this.extractData(data),
                err => this.handleError(err)
            );
        
        return this.songs.values();
    }

    private extractData(res: Response){
        let csvData = res['_body'] || '';
        let allTextLines = csvData.split(/\r\n|\n/);
        let headers = allTextLines[0].split(',');
        
        for( let i = 1; i < allTextLines.length; i++) {
            // split content on comma
            let data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                // we need to create a song
                // 0-title, 1-date, 2-languagep
                let selection = {date:data[1],language:data[2]};
                if (this.songs.containsKey(data[0])){
                    let tmp_song = this.songs.getValue(data[0]);
                    tmp_song.selections.push(selection);
                    this.songs.setValue(data[0],tmp_song);
                } else {
                    let tmp_song = {
                        title: data[0], 
                        selections:[{date:data[1],language:data[2]}]
                    };
                    this.songs.setValue(data[0], tmp_song);
                }
            }
        }
    }

    private handleError(error: any){
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
    }
}