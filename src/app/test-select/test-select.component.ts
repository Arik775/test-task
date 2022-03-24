import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  constructor() { }

  @Input() arrayOptions: string[] = [''] 
  @Input() textComp: string = ''

  ngOnInit(): void {
  }

}
