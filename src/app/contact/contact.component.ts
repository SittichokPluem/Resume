import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2 class="head">Contact</h2>
    <hr>
    <div *ngFor="let data of contactData">
      <div class="dot"></div>
      <a>You can contact me by</a>
      <div class="content">
        <p *ngIf="data.type === 'Tell'">Tell: {{data.value}}</p>
        <p *ngIf="data.type === 'Email'">Email: {{data.value}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactData = [    { "type": "Tell", "value": "0877585527" },    { "type": "Email", "value": "SittichokPluem@gmail.com" }  ];

  async ngOnInit() {
    await this.delay(2000);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
