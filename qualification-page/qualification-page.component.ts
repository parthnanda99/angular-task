import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-qualification-page',
  templateUrl: './qualification-page.component.html',
  styleUrls: ['./qualification-page.component.scss']
})
export class QualificationPageComponent implements OnInit {

  constructor(private location: Location) { }

  back() : void{
    this.location.back();
  }

  ngOnInit(): void {
    
const ap1 = document.querySelector('.ap1') as HTMLElement;
const ap2 = document.querySelector('.ap2') as HTMLElement;
const fresher = document.querySelector('.fresher') as HTMLElement;
const experienced = document.querySelector('.experienced') as HTMLElement;
const on1 = document.querySelector(".on1") as HTMLElement;
const on2 = document.querySelector(".on2") as HTMLElement;
const off1 = document.querySelector(".off1") as HTMLElement;
const off2 = document.querySelector(".off2") as HTMLElement;
const yes = document.querySelector(".yes") as HTMLElement;
const no = document.querySelector(".no") as HTMLElement;
const noticeInfo = document.querySelector(".notice-info") as HTMLElement;

const on3 = document.querySelector(".on3") as HTMLElement;
const on4 = document.querySelector(".on4") as HTMLElement;
const off3 = document.querySelector(".off3") as HTMLElement;
const off4 = document.querySelector(".off4") as HTMLElement;

ap1.addEventListener('click',(e)=>{
    experienced.style.display="none";
    fresher.style.display="block";
    on1.style.display="block"
   off1.style.display="none"
   on2.style.display="none"
   off2.style.display="block"
})
ap2.addEventListener('click',(e)=>{
    fresher.style.display="none";
    experienced.style.display="block";
    on2.style.display="block";
    off2.style.display="none";
    on1.style.display="none";
    off1.style.display="block";
})
yes.addEventListener('click',(e)=>{
    noticeInfo.style.display="flex";
    on3.style.display="block";
   off3.style.display="none";
   on4.style.display="none";
   off4.style.display="block";
})
no.addEventListener('click',(e)=>{
    noticeInfo.style.display="none";
    on4.style.display="block";
    off4.style.display="none";
    on3.style.display="none";
    off3.style.display="block";
})
  }


}
