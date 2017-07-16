import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
 
  questions: Object[];

  constructor() { 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My Name is Brad!'
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is green'
      },
      {
        text: 'What is your favorite language?',
        answer: 'My favorite language is JavaScript'
      }
    ];
  }

  ngOnInit() {
  }

}
