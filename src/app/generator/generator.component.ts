import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl} from "@angular/forms";
import {TestCheckboxComponent} from "../test-checkbox/test-checkbox.component";
import {TestInputComponent} from "../test-input/test-input.component";
import {TestNumberComponent} from "../test-number/test-number.component";
import {TestSelectComponent} from "../test-select/test-select.component";
import {TestField, TestForm} from "../form-controller.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {stringify} from "@angular/compiler/src/util";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})

  export class GeneratorComponent implements OnInit {

  // public testForm: TestForm = {
  //   title: '',
  //   components: []
  // }

  public typeComp: string = ''
  public currentOpenCreateWindow: string = ''

  testCheckbox = TestCheckboxComponent
  testInput = TestInputComponent
  testNumber = TestNumberComponent
  testSelect = TestSelectComponent

  //Variables for creating component
   public testField: TestField = {
    index: 0,
     label: '',
     description: '',
     placeholder: '',
     required: false,
     choices: '',
     componentClass: null,
     isIncludeCheckAll: false
  }

  testArray = ''

  testForm = this.formBuilder.group({
    formName: [''],
    formElems: this.formBuilder.array([
      // this.formBuilder.group({})
    ])
  })

  constructor(private formBuilder: FormBuilder, private  ngbModal: NgbModal) {

  }

  public getCompByIndex(index: number) {
    // console.log(this.formElems.get(`${index}`)?.value)
    return this.formElems.get(`${index}`)?.value
  }

  public getKeyValue(index: number, key: string) {
    return this.formElems.get(`${index}`)?.get(`${key}`)?.value
  }

  get formElems() {
    return this.testForm.get('formElems') as FormArray
  }
  addFormElem(type: string) {
    this.formElems.push(this.formBuilder.group({
      index: this.testField.index,
      typeComp: type,
      label: this.testField.label,
      description: this.testField.description,
      placeholder: this.testField.placeholder,
      required: this.testField.required,
      choices: this.testField.choices,
      isIncludeCheckAll: this.testField.isIncludeCheckAll
    }))

    // empty all
    this.testField = {
      index: ++this.testField.index,
      label: '',
      description: '',
      placeholder: '',
      required: false,
      choices: '',
      componentClass: null,
      isIncludeCheckAll: false
    }
    this.testArray = ''

    console.log(this.testForm.get('formElems')?.value)
    console.log(this.formElems.get(`0`)?.get('typeComp')?.value)
  }

  openModal(content: any) {
    this.ngbModal.open(content)

  }

  ngOnInit(): void {
  }

  // @ts-ignore
  moveCompUp(index: number) {
    if (index == 0) {
      return false
    }

    let saveComp = this.getCompByIndex(index - 1)

    this.formElems.get(`${index - 1}`)?.setValue(this.getCompByIndex(index))
    this.formElems.get(`${index - 1}`)?.get('index')?.setValue(Number(index - 1))

    this.formElems.get(`${index}`)?.setValue(saveComp)
    this.formElems.get(`${index}`)?.get('index')?.setValue(Number(index))
    console.log(this.formElems.value)
  }
  // @ts-ignore
  moveCompDown(index: number) {
    if (index == (this.formElems.length - 1)) {
      return false
    }

    let saveComp = this.getCompByIndex(index + 1)

    this.formElems.get(`${index + 1}`)?.setValue(this.getCompByIndex(index))
    this.formElems.get(`${index + 1}`)?.get('index')?.setValue(Number(index + 1))

    this.formElems.get(`${index}`)?.setValue(saveComp)
    this.formElems.get(`${index}`)?.get('index')?.setValue(Number(index))
    console.log(this.formElems.value)
  }
  removeComp(index: number): void {
    this.formElems.removeAt(index)
    for (let i in this.formElems.controls) {
      this.formElems.get(`${i}`)?.get('index')?.setValue(Number(i))
      console.log(this.formElems.get(`${i}`)?.value)
      this.testField.index = this.formElems.length
    }
  }
}


