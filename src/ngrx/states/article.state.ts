import { Article } from "src/models/article.model";

export interface ArticleState{
    article: Article[],
    isSuccess: boolean,
    error: string,
    loading: boolean,
}