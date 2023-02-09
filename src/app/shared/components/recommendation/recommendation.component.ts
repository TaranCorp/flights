import { Component } from '@angular/core';

interface Card {
  title: string,
  content: string
}

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  cards: Array<Card> = [
    {
      title: 'The Budget-Friendly Option',
      content: 'Are you looking to save some cash on your next flight? Look no further! Our budget-friendly option offers the best value for your money. You\'ll get to your destination with no fuss and plenty of extra cash to spend on your adventure.'
    },
    {
      title: 'The Comfort Seeker',
      content: 'Travelling can be tough, especially on long flights. That\'s why we\'ve got the perfect solution for you! Our comfort seeker option offers spacious seating, extra legroom, and in-flight entertainment to keep you comfortable and entertained on your journey.'
    },
    {
      title: 'The Business Traveller',
      content: 'We understand that time is money, especially when you\'re on a business trip. That\'s why we offer a range of flights that cater to your needs. With flexible scheduling, priority boarding, and a dedicated business lounge, you\'ll have everything you need to work in comfort and style.'
    },
    {
      title: 'The Adventure Seeker',
      content: 'Ready for your next big adventure? Whether you\'re heading to a tropical paradise or an exotic city, our adventure seeker option has you covered. With a range of flights to destinations all over the world, you\'re sure to find the perfect trip for your next adventure.'
    }
  ]
}
