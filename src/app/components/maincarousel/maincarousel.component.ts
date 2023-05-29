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
    const carousel: any = document.querySelector(".carousel"),
    arrowIcons: any = document.querySelectorAll(".wrapper i");
  let  firstImg = carousel.querySelectorAll("img")[0]
  let isDragStart = false, isDragging = false, prevPageX: any, prevScrollLeft: any, positionDiff: any;
  const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
  }
  arrowIcons.forEach((icon: any) => {
    icon.addEventListener("click", () => {
      firstImg = carousel.querySelectorAll("img")[0];
      let firstImgWidth = firstImg.clientWidth + 100; // getting first img width & adding 14 margin value
      // if clicked icon is left, reduce width value from the carousel scroll left else add to it
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
      setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
  });
  const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    firstImg = carousel.querySelectorAll("img")[0];
    let firstImgWidth = firstImg.clientWidth + 100;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
      return carousel.scrollLeft += positionDiff > firstImgWidth / this.data.length ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / this.data.length ? valDifference : -positionDiff;
  }
  const dragStart = (e: any) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  }
  const dragging = (e: any) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  }
  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  }
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);
  document.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);
  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);
  }
}


