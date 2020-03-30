import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ArticleServiceService } from '../article-service.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  loadedArticle: Article;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleServiceService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('title')){
        return;
      }
      const title = paramMap.get('title');
      console.log(paramMap);
      this.loadedArticle = this.articleService.getEachArticle(title);
      console.log(this.loadedArticle);
    })
  }
}
