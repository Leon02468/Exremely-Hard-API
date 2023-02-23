import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) {}

  getArticle(page: number, itemPerPage: number){
    let url = "https://social.runwayclub.dev/api/articles/latest";
    return this.httpClient.get(`${url}?page=${page}&per_page=${itemPerPage}`);
  }
}
