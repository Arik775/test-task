import {FormGroup} from "@angular/forms";


export interface TestForm {
  title: string,
  components: TestField[]
}

export interface Choice {
  id: number,
  title: string,
  active?: boolean,
}

export interface TestField {
  index: number,
  label: string,
  description?: string,
  placeholder?: string,
  required?: boolean,
  choices?: string,
  componentClass: any,
  isIncludeCheckAll?: boolean
}



