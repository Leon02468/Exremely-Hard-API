import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleService } from "src/app/services/article.service";
import { Article } from "src/models/article.model";
import * as ArticleActions from "../actions/article.action"

@Injectable()

export class ArticleEffect{
    constructor(private actions$: Actions, private articleService: ArticleService){}

    getArticles$ = createEffect(
        ()=>this.actions$.pipe(
            ofType(ArticleActions.getPerginate),
            switchMap((action) => {
                return this.articleService.getArticle(action.page, action.itemPerPage)
            }),
            map((response) => {
                return ArticleActions.getPerginateSuccess({article: <Array<Article>>response})
            }),
            catchError((error)=>{
                return of(ArticleActions.getPerginateFailure({error: error.message}))
            })
        )
    )
}