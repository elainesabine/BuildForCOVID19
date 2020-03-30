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
          content:"<strong>Coronaviruses </strong>are a <strong>large family of viruses known to cause illnesses</strong> in humans and animals. In humans, coronaviruses can cause <strong>respiratory infections</strong> ranging from a common cold to more severe diseases like Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). <strong>COVID-19</strong> is the <strong>newest infectious disease</strong> caused by the most recently discovered coronavirus which was unknown before the outbreak began in Wuhan, China in December 2019."
        }, 
        {
          title: "how does it spread?",
          content:"People can catch COVID-19 either directly from <strong>small droplets expelled from an infected person’s nose or mouth</strong>, or indirectly by <strong>coming in contact with a surface that these droplets have landed on</strong>. After coming in contact with these surfaces, people can contract the virus <strong>by touching their eyes, nose, or mouth</strong>. <br><br> People can also catch the virus if they <strong>breathe in the droplets</strong>. Catching the virus by being in <strong>close contact</strong> with someone who is infected (within 6 feet) or through <strong>respiratory droplets</strong> is called <strong>“person-to-person spread”</strong> and is <strong>mainly how COVID-19 is spread</strong>. Another form of spread is <strong>“community spread”</strong> which means people have been infected with the virus in an area, <strong>including some who are not sure how or where they became infected</strong>. <br><br> COVID-19 <strong>can survive on surfaces</strong> for periods of time. Studies suggest that the virus can survive <strong>for a few hours to several days depending on different conditions</strong> like type of surface, temperature, and humidity.<br><br>Contrary to popular belief, it is <strong>much more likely to contract COVID-19 through respiratory droplets</strong>, produced when an infected person coughs or sneezes, <strong>rather than through airborne means.</strong>"
        }, 
        {
          title: "more information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.<br><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>World Health Organization</a><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html'>Center for Disease Control</a><br><br>"
        }]
    },
    {
      title: "At Risk",
      iconUrl: "../../assets/icon/at-risk.png",
      //change content
      content: [
        {
          title: "symptoms",
          content:"These symptoms may appear during the <strong>incubation period</strong> of COVID-19, which is believed to be <strong>2-14 days after exposure </strong>(based on the incubation period of other MERS-CoV viruses.).<br><br>The <strong>most common</strong> symptoms of COVID-19 are <ul><li>Fever</li><li>Shortness of breath</li><li>Dry cough</li><li>Tiredness</li></ul><strong>Some</strong> may experience<ul><li>Aches and pains</li><li>Nasal congestion</li><li>Runny nose</li><li>Sore throat</li><li>Diarrhea</li></ul>Seek medical help <strong>immediately</strong> if you experience:<ul><li>Trouble breathing</li><li>Persistent pain or pressure in the chest</li><li>New confusion or inability to arouse</li><li>Bluish lips or face</li></ul>"
        }, 
        {
          title: "treatment",
          content:"First, <strong>if you think you are sick</strong>, please:<ul> <li>Stay home except to get medical care</li><li>Stay in touch with your doctor</li><li>Stay away from others</li></ul>If you have <strong>mild symptoms</strong>, stay at home until you've recovered. You can relieve your symptoms if you:<ul> <li> Get lots of rest</li><li>Keep warm</li><li>Drink plenty of liquids</li><li> Use a room humidifier or take a hot shower to help ease a sore throat or cough</li></ul>If you start experiencing <strong>more severe symptoms</strong> like fever, cough, or difficulty breathing, <strong>please seek immediate medical care</strong>. When you seek medical treatment, <strong>please call ahead before visiting your doctors</strong> and let them know that you are experiencing symptoms of COVID-19 so the office can prepare to protect themselves and other patients."
        }, 
        {
          title: "more information",
          content:"Above information was taken from these sources. Please visit to learn more about COVID-19.<br><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>World Health Organization</a><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html'>Center for Disease Control</a><br><br>"
        }]
    },
    {
      title: "Prevention",
      iconUrl: "../../assets/icon/prevention.png",
      //change content
      content: [
        {
          title: "coming soon",
          content:"Coming soon!"
        }]
    },
    {
      title: "Resources",
      iconUrl: "../../assets/icon/resources.png",
      //change content
      content: [
        {
          title: "Coming Soon",
          content:"Coming Soon!"
        }, 
        {
          title: "Resources",
          content:"Please visit to learn more about COVID-19.<br><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>World Health Organization</a><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html'>Center for Disease Control</a><br><br>"
        }]
    },
    {
      title: "Learn More",
      iconUrl: "../../assets/icon/learn-more.png",
      //change content
      content: [
        {
          title: "Learn More",
          content:"Please visit to learn more about COVID-19.<br><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>World Health Organization</a><br><a style=\"color: #707070;\"  class=\"link\" href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/transmission.html'>Center for Disease Control</a><br><br>"
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
