import { Injectable } from '@angular/core';
import {Article} from './article.model';
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private articles: Article[] =[
    {
      title: "About COVID-19",
      iconUrl: "../../assets/icon/about.png",
      content: [
        {
          title: "about COVID-19",
          content:"Coronaviruses are a large family of viruses known to cause illnesses in humans and animals. In humans, coronaviruses can cause respiratory infections ranging from a common cold to more severe diseases like Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). COVID-19 is the newest infectious disease caused by the most recently discovered coronavirus which was unknown before the outbreak began in Wuhan, China in December 2019."
        }, 
        {
          title: "How does it spread?",
          content:"People can catch COVID-19 either directly from small droplets expelled from an infected person’s nose or mouth, or indirectly by coming in contact with a surface that these droplets have landed on. After coming in contact with these surfaces, people can contract the virus by touching their eyes, nose, or mouth. <br> People can also catch the virus if they breathe in the droplets. Catching the virus by being in close contact with someone who is infected (within 6 feet) or through respiratory droplets is called “person-to-person spread” and is mainly how COVID-19 is spread. Another form of spread is “community spread” which means people have been infected with the virus in an area, including some who are not sure how or where they became infected. <br> COVID-19 can survive on surfaces for periods of time. Studies suggest that the virus can survive for a few hours to several days depending on different conditions like type of surface, temperature, and humidity.<br>Contrary to popular belief, it is much more likely to contract COVID-19 through respiratory droplets, produced when an infected person coughs or sneezes, rather than through airborne means."
        }, 
        {
          title: "More information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.."
        }]
    },
    {
      title: "At Risk",
      iconUrl: "../../assets/icon/at-risk.png",
      //change content
      content: [
        {
          title: "about COVID-19",
          content:"Coronaviruses are a large family of viruses known to cause illnesses in humans and animals. In humans, coronaviruses can cause respiratory infections ranging from a common cold to more severe diseases like Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). COVID-19 is the newest infectious disease caused by the most recently discovered coronavirus which was unknown before the outbreak began in Wuhan, China in December 2019."
        }, 
        {
          title: "How does it spread?",
          content:"People can catch COVID-19 either directly from small droplets expelled from an infected person’s nose or mouth, or indirectly by coming in contact with a surface that these droplets have landed on. After coming in contact with these surfaces, people can contract the virus by touching their eyes, nose, or mouth. <br> People can also catch the virus if they breathe in the droplets. Catching the virus by being in close contact with someone who is infected (within 6 feet) or through respiratory droplets is called “person-to-person spread” and is mainly how COVID-19 is spread. Another form of spread is “community spread” which means people have been infected with the virus in an area, including some who are not sure how or where they became infected. <br> COVID-19 can survive on surfaces for periods of time. Studies suggest that the virus can survive for a few hours to several days depending on different conditions like type of surface, temperature, and humidity.<br>Contrary to popular belief, it is much more likely to contract COVID-19 through respiratory droplets, produced when an infected person coughs or sneezes, rather than through airborne means."
        }, 
        {
          title: "More information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.."
        }]
    },
    {
      title: "Prevention",
      iconUrl: "../../assets/icon/prevention.png",
      //change content
      content: [
        {
          title: "about COVID-19",
          content:"Coronaviruses are a large family of viruses known to cause illnesses in humans and animals. In humans, coronaviruses can cause respiratory infections ranging from a common cold to more severe diseases like Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). COVID-19 is the newest infectious disease caused by the most recently discovered coronavirus which was unknown before the outbreak began in Wuhan, China in December 2019."
        }, 
        {
          title: "How does it spread?",
          content:"People can catch COVID-19 either directly from small droplets expelled from an infected person’s nose or mouth, or indirectly by coming in contact with a surface that these droplets have landed on. After coming in contact with these surfaces, people can contract the virus by touching their eyes, nose, or mouth. <br> People can also catch the virus if they breathe in the droplets. Catching the virus by being in close contact with someone who is infected (within 6 feet) or through respiratory droplets is called “person-to-person spread” and is mainly how COVID-19 is spread. Another form of spread is “community spread” which means people have been infected with the virus in an area, including some who are not sure how or where they became infected. <br> COVID-19 can survive on surfaces for periods of time. Studies suggest that the virus can survive for a few hours to several days depending on different conditions like type of surface, temperature, and humidity.<br>Contrary to popular belief, it is much more likely to contract COVID-19 through respiratory droplets, produced when an infected person coughs or sneezes, rather than through airborne means."
        }, 
        {
          title: "More information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.."
        }]
    },
    {
      title: "Resources",
      iconUrl: "../../assets/icon/resources.png",
      //change content
      content: [
        {
          title: "about COVID-19",
          content:"Coronaviruses are a large family of viruses known to cause illnesses in humans and animals. In humans, coronaviruses can cause respiratory infections ranging from a common cold to more severe diseases like Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). COVID-19 is the newest infectious disease caused by the most recently discovered coronavirus which was unknown before the outbreak began in Wuhan, China in December 2019."
        }, 
        {
          title: "How does it spread?",
          content:"People can catch COVID-19 either directly from small droplets expelled from an infected person’s nose or mouth, or indirectly by coming in contact with a surface that these droplets have landed on. After coming in contact with these surfaces, people can contract the virus by touching their eyes, nose, or mouth. <br> People can also catch the virus if they breathe in the droplets. Catching the virus by being in close contact with someone who is infected (within 6 feet) or through respiratory droplets is called “person-to-person spread” and is mainly how COVID-19 is spread. Another form of spread is “community spread” which means people have been infected with the virus in an area, including some who are not sure how or where they became infected. <br> COVID-19 can survive on surfaces for periods of time. Studies suggest that the virus can survive for a few hours to several days depending on different conditions like type of surface, temperature, and humidity.<br>Contrary to popular belief, it is much more likely to contract COVID-19 through respiratory droplets, produced when an infected person coughs or sneezes, rather than through airborne means."
        }, 
        {
          title: "More information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.."
        }]
    },
    {
      title: "Learn More",
      iconUrl: "../../assets/icon/learn-more.png",
      //change content
      content: [
        {
          title: "about COVID-19",
          content:"Coronaviruses are a large family of viruses known to cause illnesses in humans and animals. In humans, coronaviruses can cause respiratory infections ranging from a common cold to more severe diseases like Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). COVID-19 is the newest infectious disease caused by the most recently discovered coronavirus which was unknown before the outbreak began in Wuhan, China in December 2019."
        }, 
        {
          title: "How does it spread?",
          content:"People can catch COVID-19 either directly from small droplets expelled from an infected person’s nose or mouth, or indirectly by coming in contact with a surface that these droplets have landed on. After coming in contact with these surfaces, people can contract the virus by touching their eyes, nose, or mouth. <br> People can also catch the virus if they breathe in the droplets. Catching the virus by being in close contact with someone who is infected (within 6 feet) or through respiratory droplets is called “person-to-person spread” and is mainly how COVID-19 is spread. Another form of spread is “community spread” which means people have been infected with the virus in an area, including some who are not sure how or where they became infected. <br> COVID-19 can survive on surfaces for periods of time. Studies suggest that the virus can survive for a few hours to several days depending on different conditions like type of surface, temperature, and humidity.<br>Contrary to popular belief, it is much more likely to contract COVID-19 through respiratory droplets, produced when an infected person coughs or sneezes, rather than through airborne means."
        }, 
        {
          title: "More information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.."
        }]
    }
  ];

  constructor() { }
  getArticle(){
    return [...this.articles];
  }
  //get individual articles? go to 2:56:31
  getEachArticle(title: string){
    return{
      ...this.articles.find(article =>{
        return article.title === title
      })
    }
  }
}
