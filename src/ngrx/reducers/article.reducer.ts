import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import * as articleActions from '../actions/article.action'
import { ArticleState } from "../states/article.state";

let initialState: ArticleState ={
    article: [],
    isSuccess: false,
    error: '',
    loading: false
}

export const ArticleReducer = createReducer(
    initialState,
    on(articleActions.getPerginate, (state) =>({...state, loading: true})),
    on(articleActions.getPerginateSuccess, (state, action) =>({
        ...state,
        article: action.article,
        isSuccess: true,
        loading: false
    })),
    on(articleActions.getPerginateFailure, (state, action) =>({
        ...state,
        error: action.error,
        loading: false,
        article: []
    }))
)