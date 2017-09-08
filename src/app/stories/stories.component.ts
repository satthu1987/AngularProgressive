import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ItemservicesService } from "../itemservices.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;

  constructor(private _itemServices:ItemservicesService,private route: ActivatedRoute) {}

  ngOnInit() {

    this._itemServices.fetchStories().subscribe(items=>this.items = items,
                                                error=>console.log('Error fetching data'));
}

}
