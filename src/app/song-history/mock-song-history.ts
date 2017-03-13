import { Song } from './models/song.interface';
import { Language } from './models/language.enum';

export const SONGS: Song[] = [
    {
        title: 'A Mighty Fortress - Castillo Fuerte', 
        selections: [
            {date:new Date('February 4, 2015'), language:Language.Both},
            {date:new Date('February 11, 2015'), language:Language.Both}]
    },
    {
        title: 'To You Be The Glory',
        selections: [
            {date:new Date('December 12, 2016'), language:Language.English},
            {date:new Date('December 25, 2016'), language:Language.English}]
    },
    {
        title: 'Dios Majestuoso',
        selections: [
            {date:new Date('March 5, 2017'), language:Language.Spanish},
            {date:new Date('January 1, 2017'), language:Language.Spanish},
            {date:new Date('January 8, 2017'), language:Language.Spanish}]
    }
,
    {
        title: 'Desert Song - Canción del Desierto',
        selections: [
            {date:new Date('March 5, 2014'), language:Language.Spanish},
            {date:new Date('January 1, 2014'), language:Language.English},
            {date:new Date('January 8, 2014'), language:Language.Both}]
    }    
];