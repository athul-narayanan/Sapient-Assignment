import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {SearchFilters, SearchQuery,defaultLimit} from './../search-query'
import {SharedServiceService} from './../shared-service.service'
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-filter-slide',
  templateUrl: './filter-slide.component.html',
  styleUrls: ['./filter-slide.component.scss']
})
export class FilterSlideComponent implements OnInit {
  searchFilters:any = [];
  @Output() itemDetails = new EventEmitter<string>();
  searchObj = {} as SearchQuery;
  constructor(private service:SharedServiceService,private ngxService: NgxUiLoaderService) { 
    this.searchFilters = SearchFilters;
    this.searchObj.limit = defaultLimit;
    
  }

  ngOnInit(): void {
  }

  setSelectedFilter(filteritem:any,index:any){
      if(filteritem.selected == filteritem.values[index]){
        this.searchObj[filteritem.key] = null
        filteritem.selected = null
      }else{
        this.searchObj[filteritem.key] = filteritem.values[index];
        filteritem.selected = filteritem.values[index];
      }
      this.ngxService.start()
      this.service.getItemDetails(this.searchObj).subscribe((itemDetails:any)=>{
        this.itemDetails.emit(itemDetails);
        this.ngxService.stop()
      },error=>{
        this.ngxService.stop()
      })
  }

  getInReadableForm(propertyName:any){
    return propertyName.replace(
      /([-_][a-z])/g,
      (group) => group.toUpperCase()
                      .replace('-', ' ')
                      .replace('_', ' ')
    )
  }

}
