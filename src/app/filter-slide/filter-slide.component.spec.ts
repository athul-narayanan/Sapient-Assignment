import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSlideComponent } from './filter-slide.component';
import {SharedServiceService} from './../shared-service.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import {SearchFilters} from './../search-query'
import { of } from 'rxjs';

describe('FilterSlideComponent', () => {
  let component: FilterSlideComponent;
  let fixture: ComponentFixture<FilterSlideComponent>;
  let service:SharedServiceService;
  let uiLoader:NgxUiLoaderService = new NgxUiLoaderService(null);
  
  beforeEach(async(() => {
    service = new SharedServiceService(null);
    component = new FilterSlideComponent(service,uiLoader)
  }));
  
  //testing the event emitter

  it('getFilteredItemDetails functions Should set the filter keys filter values values',()=>{
    let itemDetail;
    component.itemDetails.subscribe(t=> itemDetail = t)
    spyOn(service,'getItemDetails').and.returnValue(of([1,2,3])) ;
    

    component.setSelectedFilter(SearchFilters[0],2);

    expect(component.searchObj[SearchFilters[0].key]).toEqual(SearchFilters[0].values[2])
  })

  it('getFilteredItemDetails functions Should set the details to be displayed',()=>{
    let itemDetail;
    const itemArray = [1,2,3];
    component.itemDetails.subscribe(t=> itemDetail = t)
    spyOn(service,'getItemDetails').and.returnValue(of([1,2,3])) ;

    component.setSelectedFilter(SearchFilters[0],2);

    expect(itemDetail).toEqual(itemArray)
  })

  it('Check snake case is getting converted into normal format',()=>{
    let readableFormat = component.getInReadableForm("search_item");

    expect(readableFormat).toEqual("search item");
  })

});
