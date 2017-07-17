import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../services/data.service";

import { Question } from "../../models/question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input('question') question: Question;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  removeQuestion(question: Question) {
    this.dataService.removeQuestion(question);
  }
}
