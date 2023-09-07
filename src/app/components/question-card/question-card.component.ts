import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent implements OnInit {
  @Input() question: any;
  answergiven: boolean = false;
  selectedAnswer: any;

  constructor() {}

  ngOnInit() {
    this.answergiven = false;
  }
  ngOnChanges() {
    if (this.question && !this.question.firstChange) {
      this.answergiven = false;
      this.selectedAnswer = undefined;
    }
  }

  checkAnswer(event: any) {
    this.selectedAnswer = event.detail.value;
  }

  check() {
    this.answergiven = true;
  }
}
