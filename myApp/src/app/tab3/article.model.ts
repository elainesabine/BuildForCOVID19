import {SubArticle} from './subarticle.model';

export interface Article{
    title: string;
    iconUrl: string;
    content: SubArticle[];
  }