import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
    <h2 class="head">Education</h2>
    <hr>
    <div *ngFor="let data of educationData">
      <div class="dot"></div>
      <a>{{data.university || data.school}}</a>
      <div class="content">
        <p>{{data.location || 'Thailand'}} {{data.period}} GPA {{data.GPA}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationData = [    { "university": "Rajamangala University of Technology Krungthep, Bangkok", "period": "2018-2022", "GPA": 3.53, "location": "Bangkok, Thailand" },    { "school": "Soongsumarnphadungwit School", "period": "2015-2018", "GPA": 3.67, "location": "Suphanburi, Thailand" }  ];

  async ngOnInit() {
    await this.delay(2000);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
