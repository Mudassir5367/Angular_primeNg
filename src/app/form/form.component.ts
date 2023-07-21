import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() Data:EventEmitter<string> = new EventEmitter();

  value0: any = true;
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value6: any;
  value5: any = 'Disabled';

  constructor() {}

  ngOnInit(): void {}

  submit(){
    
    

  }
}
