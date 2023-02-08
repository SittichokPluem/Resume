import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  template: '<h2 class="head">Interests</h2> <hr> <div *ngFor="let data of interestsData"> <div class="dot"></div> <a>{{data.name}}</a> <div class="content"> <p>{{data.description}}</p> </div> </div>' ,
  styleUrls: ['./interests.component.scss']
  })
  export class InterestsComponent {
  interestsData = [
  { "name": "Reading", "description": "I enjoy reading Japanese novels and manga. They provide a rich storytelling experience and broaden my understanding of different cultures and perspectives. I also like to explore different genres and authors to keep my reading experience fresh and engaging." },
  { "name": "PodCasting", "description": "Listening to podcasts is one of my favorite pastimes. I love learning about various topics and hearing about different experiences and perspectives from around the world. Podcasts are a great way for me to continue learning and growing, both personally and professionally." },
  { "name": "Design", "description": "I have a passion for design and creativity. I love visiting exhibitions and art galleries to see the latest works and designs by artists and designers from around the world. I also enjoy experimenting with different design styles and techniques to improve my own skills and knowledge." },
  { "name": "Programming", "description": "Programming is a fascinating hobby of mine. I enjoy writing software and learning about new technologies and programming languages. I find it rewarding to create new solutions and automate repetitive tasks. I prefer working with computers to people, as I find it more efficient and less stressful." }
  ];
  
  async ngOnInit() {
  await this.delay(2000);
  }
  
  delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }
  }
