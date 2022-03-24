import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {

  constructor() { }

  @Input() textComp: string = 'Имя'



  ngOnInit(): void {

  }

}
