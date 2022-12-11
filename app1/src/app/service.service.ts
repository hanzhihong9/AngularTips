import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) {

  }

  getAllPosts() { 
    const aURL = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(aURL);
  }
}
