import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WPMRecord {
    id: number;
    userName: string;
    wordsPerMinute: number;
    dateRecorded: Date;
}

@Injectable({
    providedIn: 'root'
})
export class WpmService {
    private apiUrl = 'http://localhost:5000/api/WPM';

    constructor(private http: HttpClient) { }

    getWPMRecords(): Observable<WPMRecord[]> {
        return this.http.get<WPMRecord[]>(this.apiUrl);
    }

    addWPMRecord(record: WPMRecord): Observable<WPMRecord> {
        return this.http.post<WPMRecord>(this.apiUrl, record);
    }
}