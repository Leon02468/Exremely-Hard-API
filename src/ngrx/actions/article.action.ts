import { createAction, props } from "@ngrx/store";
import { Article } from "src/models/article.model";

export const getPerginate = createAction('[Article] Get Perginate', props<{page: number, itemPerPage: number}>());
export const getPerginateSuccess = createAction('[Article] Get Perginate Success', props<{article: Article[]}>());
export const getPerginateFailure = createAction('[Article] Get Perginate Fail', props<{error: string}>());