import { Component, Input, OnInit } from '@angular/core';
import { ItemservicesService } from "../itemservices.service";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() EmployeeNo: number;
  item;

  constructor(private _itemService: ItemservicesService) {}

  ngOnInit() {
     this._itemService.fetchItem(this.EmployeeNo).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.EmployeeNo));  
  }
}