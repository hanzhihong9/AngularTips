import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Post } from './show-posts/types';

@Injectable({
  providedIn: 'root'
})


export class AppService {

  constructor(
    private http: HttpClient
  ) {

  }

  getAllPosts():Observable<Post[]|null> { 

    const headers = new HttpHeaders({
      name: 'boy'
    })
    let  params = new HttpParams().append(
      'param1', 'param1-data'
    );
    params = params.append('a','a-data')
    const aURL = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(
      aURL,
      { headers,
        params,
        observe: 'response'
      }
    )
    .pipe(
      tap( resp => console.log(resp)),
      map( resp => resp.body)
    );
  }

  getAllPostsHttpResponse() { 
    const aURL = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(
      aURL,
      {observe: 'response'}
      );
  }

  getError() {
    const aURL = 'asseets/hello-world.txt';
    return this.http.get(aURL,
      // {responseType: 'text'}
      ).pipe(
        retry(3),
        catchError(this.handleError ),
   
        // catchError( e => console.error(e) )
      );
  }

  handleError(e: HttpErrorResponse) { 
    console.log(e);
    return throwError(e)
  }
}
