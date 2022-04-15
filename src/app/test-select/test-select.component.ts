import { Component, Input, OnInit } from '@angular/core';
import {TestField} from "../form-controller.service";
import {GeneratorComponent} from "../generator/generator.component";

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent implements OnInit {

  constructor( private generatorComponent: GeneratorComponent) { }

  @Input() compValues: TestField = {
    index: 0,
    label: '',
    description: '',
    placeholder: '',
    required: false,
    choices: '',
    componentClass: null,
    isIncludeCheckAll: false
  }

  get choicesArray() {
    return this.compValues.choices?.split(',')
  }

  ngOnInit(): void {
  }

  moveUp(): void {
    this.generatorComponent.moveCompUp(this.compValues.index)
  }
  moveDown(): void {
    this.generatorComponent.moveCompDown(this.compValues.index)
  }
  remove(): void {
    this.generatorComponent.removeComp(this.compValues.index)
  }
}
