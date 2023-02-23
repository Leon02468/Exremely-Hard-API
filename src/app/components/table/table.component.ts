import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ArticleState } from 'src/ngrx/states/article.state';
import * as ArticleActions from '../../../ngrx/actions/article.action'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  articles$: Observable<ArticleState>

  constructor(private store : Store<{article: ArticleState}>){
    this.articles$ = this.store.select('article')
  }

  ngOnInit(): void {

  }

  getArticle(page : number = 0){
    this.store.dispatch(ArticleActions.getPerginate({page: 0, itemPerPage: 10}));
    this.articles$.subscribe((value) => {
      if(value){
        console.log(value)
      }
    })
  }
}
