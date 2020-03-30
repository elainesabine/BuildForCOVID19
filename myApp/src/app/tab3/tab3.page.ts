import { Component, OnInit } from '@angular/core';
import {Article} from './article.model';
import {ArticleServiceService} from './article-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  articles: Article[];
  constructor(private articleService: ArticleServiceService) {}
  ngOnInit(){
    this.articles = this.articleService.getArticle();
  }
}
