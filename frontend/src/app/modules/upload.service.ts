import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { CommonService } from './config';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  constructor(private httpClient: HttpClient,
    private commonService: CommonService) { }

  SERVER_URL: string = this.commonService.baseurl + "/cars/upload/";
  
  public upload(data, car_id) {
    let uploadURL = `${this.SERVER_URL}`;
    
    return this.httpClient.post<any>(uploadURL + car_id, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }
}
