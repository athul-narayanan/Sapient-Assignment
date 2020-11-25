import { Component, OnInit } from '@angular/core';
import {SearchQuery, defaultLimit} from './../search-query';
import {SharedServiceService} from './../shared-service.service'
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import {developer} from './../../environments/environment';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  searchObj = {} as SearchQuery;
  itemList : any = [];
  developer = developer;
  p:any = 1;
  constructor(private service:SharedServiceService,private ngxService: NgxUiLoaderService) { 
    this.searchObj['limit'] = defaultLimit;
    
  }
  
  ngOnInit(): void {
    this.getFilteredItemDetails();
  }

  
  getFilteredItemDetails(){
    this.ngxService.start()
    this.service.getItemDetails(this.searchObj).subscribe((itemDetails:any)=>{
      this.ngxService.stop()
       console.log(itemDetails);
       this.itemList = itemDetails
    },error=>{
      this.ngxService.stop();
    })
  }

  setItemDetails(itemDetails:any){
    this.itemList = itemDetails;
  }
}
