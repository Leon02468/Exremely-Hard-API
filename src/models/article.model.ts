import { User } from "./user.model";

export interface Article{
    id: number;
    title: String;
    description: String;
    readable_publish_date: String;
    url: String;
    comments_count: number;
    positive_reactions_count: number;
    social_image: String;
    tag_list: String[];
    user: User
}