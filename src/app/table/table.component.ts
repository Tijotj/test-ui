import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  listData: any;
  listData2: any;
  arr1: any = [];
  arr2: any = [];
  arr3: any = [];
  count: number = 0;

  constructor(private dataApi: ApiService) {}
  
  ngOnInit() {
    this.listDetails();
  }
  listDetails() {
    this.listData = this.dataApi.getData().subscribe((response) => {
       this.listData2 = response;
    }, 
      (error) => {
        console.error("An error while fetching data: ", error)
      }
    );
    console.log(this.listData2);
  }
  sortIt() {
    const collection = document.getElementsByClassName('item-name');
    for(let i = 0; i < collection.length; i++) {
      this.arr1.push(collection[i].textContent);
      this.arr2.push(collection[i].parentElement);
    }
    
    console.log(this.arr1.sort());
    
    
    //console.log(this.arr.sort());
  }
}
