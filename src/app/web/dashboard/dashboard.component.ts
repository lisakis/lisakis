import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tableForm;

  testingData = [];

  headers = ["name", "price"];

  count:number


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])]
    })
  }

  addNew(){
    if (this.tableForm.dirty && this.tableForm.valid) {
      this.testingData.push({
        name: this.tableForm.controls['name'].value,
        price: this.tableForm.controls['price'].value,
      })
    }

    this.getCount()
  }

  getCount(){
    this.count = 0;
    this.testingData.forEach(field =>{
      if(field.price){
        this.count += field.price
      }
    })
  }
}
