import { Component } from '@angular/core';
import { CrudService } from './crud.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 books:any[]=[]
 bookId!:number;
 bookName!:string;
 bookImageLink!:string;
 showForm=false;
 editMode=false;
 constructor(private lp:CrudService)
 {
      this.lp.getData().subscribe((data:any)=>this.books=data)
 }
 remove(id:number)
 {
    this.lp.deleteData(id).subscribe((data:any)=>{
      this.books=data;
    })
 }
 add()
 {
  this.showForm=true;
  this.editMode=true;
  document.body.style.backgroundColor="cyan";
 }
 stop()
 {
  this.showForm=false;
  document.body.style.backgroundColor='white';
 }
 update(id:number)
 {
  console.log(id)
  this.bookId=id;
  this.showForm=true;

 }
 submitData()
 {
   if(this.editMode)
   {
    let newBook={
      id:this.bookId,
      title:this.bookName,
      image:this.bookImageLink,
    };
    this.lp.putData(newBook,this.bookId).subscribe((data)=>{
      console.log(data);
      window.location.reload();
      
    })
   } else {
    console.log("hiiiiiiiiiiiiii") 
      let newBook = {
         id: this.bookId,
         title: this.bookName,
         image: this.bookImageLink,
       };
       this.lp.postData(newBook).subscribe((data) => {
         console.log(data);
         window.location.reload();
         this.stop();
   });
  }
}}
