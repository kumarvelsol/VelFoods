import { Injectable } from '@angular/core';
import { ItemCatgory } from './shared/ItemCatgoryModel/ItemCatgory';
import { ItemNames } from './shared/ItemNamesModel/ItemNames';

@Injectable({
  providedIn: 'root'
})
export class ItemcategoryServiceService {

  itemNames:ItemNames;
  itemcategoryRef:ItemCatgory;
  constructor() { }
}
