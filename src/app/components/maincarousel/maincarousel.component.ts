import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincarousel',
  templateUrl: './maincarousel.component.html',
  styleUrls: ['./maincarousel.component.scss'],
})
export class MaincarouselComponent  implements OnInit {

  @Input()
  data: any = [];

  constructor() { }

  ngOnInit() {
    const maincarousel: any = document.querySelector(".maincarousel"),
    arrowIcons: any = document.querySelectorAll(".mainwrapper i");
  let  firstImg = maincarousel.querySelectorAll("img")[0]
  let isDragStart = false, isDragging = false, prevPageX: any, prevScrollLeft: any, positionDiff: any;
  const showHideIcons = () => {
    // showing and hiding prev/next icon according to maincarousel scroll left value
    let scrollWidth = maincarousel.scrollWidth - maincarousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = maincarousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = maincarousel.scrollLeft == scrollWidth ? "none" : "block";
  }
  arrowIcons.forEach((icon: any) => {
    icon.addEventListener("click", () => {
      firstImg = maincarousel.querySelectorAll("img")[0];
      let firstImgWidth = firstImg.clientWidth + 100; // getting first img width & adding 14 margin value
      // if clicked icon is left, reduce width value from the maincarousel scroll left else add to it
      maincarousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
  });
  const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (maincarousel.scrollLeft - (maincarousel.scrollWidth - maincarousel.clientWidth) > -1 || maincarousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    firstImg = maincarousel.querySelectorAll("img")[0];
    let firstImgWidth = firstImg.clientWidth + 100;
    // getting difference value that needs to add or reduce from maincarousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if (maincarousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
      return maincarousel.scrollLeft += positionDiff > firstImgWidth / this.data.length ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    maincarousel.scrollLeft -= positionDiff > firstImgWidth / this.data.length ? valDifference : -positionDiff;
  }
  const dragStart = (e: any) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = maincarousel.scrollLeft;
  }
  const dragging = (e: any) => {
    // scrolling images/maincarousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    maincarousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    maincarousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  }
  const dragStop = () => {
    isDragStart = false;
    maincarousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  }
  maincarousel.addEventListener("mousedown", dragStart);
  maincarousel.addEventListener("touchstart", dragStart);
  document.addEventListener("mousemove", dragging);
  maincarousel.addEventListener("touchmove", dragging);
  document.addEventListener("mouseup", dragStop);
  maincarousel.addEventListener("touchend", dragStop);
  }
}


