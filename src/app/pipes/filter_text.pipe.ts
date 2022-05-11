import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../app.component";
@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(post: Post[], titleSearch: string): Post[] 
  {
    if(!titleSearch.trim()) 
    {
      return post
    } 
    else 
    {
      return post.filter(item=>{return item.text.toLowerCase().includes(titleSearch.toLowerCase())})
    }
  }

}
