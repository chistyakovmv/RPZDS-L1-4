import { Component } from '@angular/core';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})

export class AppComponent 
{
  posts: Post[] = 
  [
    {title:"React", text: "JavaScript-библиотека для создания пользовательских интерфейсов", id: 4},
    {title:"Angular", text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.", id: 3},
    {title:"Vue", text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces", id: 2},
    {title:"Node.js", text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.", id: 1}
  ]
    updatePosts (event)
    {
      this.posts.unshift(event)
    }
    removeIdPost(id:number) 
    {
      this.posts = this.posts.filter((item)=>item.id!=id)
    }
    titleS=''
    onChangeSearch(event) 
    {
      this.titleS=event
    }
    textS=''
    onChangeSearchText(event) 
    {
      this.textS=event
    }
  }
  
export  interface  Post {
  title: string
  text: string
  id?: number
  }
  