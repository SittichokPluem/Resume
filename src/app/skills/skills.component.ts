import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <h2 class="head"  >Skills</h2>
  <hr>
  <div *ngFor="let data of skillData">
    <div class="dot"></div>
    <a>{{data.name}}</a>
    <div class="content">
      <p>{{data.description}}</p>
    </div>
  </div>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillData = [
  { "name": "Web Design", "description": "Proficient in HTML, CSS, and JavaScript for creating dynamic and responsive websites." },
  { "name": "C++/C#", "description": "Experience in developing applications and software using C++ and C# programming languages." },
  { "name": "JAVA Programming", "description": "Knowledge of developing applications and software using Java programming language." },
  { "name": "HTML/CSS", "description": "Expertise in creating websites and web applications using HTML and CSS." },
  { "name": "PHP/SQL", "description": "Familiar with developing database-driven websites and web applications using PHP and SQL." },
  ];
  async ngOnInit() {
    await this.delay(2000);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  }