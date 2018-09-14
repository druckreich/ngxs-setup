import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class MainService {
  constructor(private http: HttpClient) {

  }

  getVersion(): Observable<string> {
    // return this.http.get<string>('versionUrl');
    return of('1.0.0');
  }
}
