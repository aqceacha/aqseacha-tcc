import { Component, Input, OnInit } from '@angular/core';

let loading = false;
let id = 0;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  @Input()
  data: any = [];
  id = 0;

  constructor() { }

  loadSlides() {
    loading = true;
    id += 1;
    this.id = id;
    let carousel: any = document.getElementById("carousel" + id),
      arrowIcons: any = document.getElementById("wrapper" + id);
    console.log(arrowIcons)
    arrowIcons = [arrowIcons.childNodes[0], arrowIcons.lastChild]
    console.log(arrowIcons);
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
    loading = false;
  }

  trySlides() {
    if (loading) {
      setTimeout(this.trySlides, 1000);
      return;
    }
    this.loadSlides();
  }

  async ngOnInit() {
    setTimeout(() => {
      this.trySlides()
    }, 1000)
  }

}
