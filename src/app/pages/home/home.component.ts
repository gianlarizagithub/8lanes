import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  repeat = false;
  noArrows = false;
  noBullets = false;
  container!: HTMLElement;
  slide!: NodeListOf<Element>;
  slideTotal!: number;
  slideCurrent = -1;
  ngOnInit(): void {
    // this.setMapToCurrentPosition();
    if (isPlatformBrowser(this.platformId)) {
      this.container = document.querySelector('.slider-container')!;
      this.slide = this.container.querySelectorAll('.slider-single');
      this.slideTotal = this.slide.length - 1;

      this.initBullets();
      this.initArrows();

      setTimeout(() => {
        this.slideRight();
      }, 500);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setMapToCurrentPosition();
    }
  }

  initArrows() {
    if (this.noArrows) {
      return;
    }
    const leftArrow = document.createElement('a');
    const iLeft = document.createElement('i');
    iLeft.classList.add('fa', 'fa-arrow-left');
    leftArrow.classList.add('slider-left');
    leftArrow.appendChild(iLeft);
    leftArrow.addEventListener('click', () => {
      this.slideLeft();
    });

    const rightArrow = document.createElement('a');
    const iRight = document.createElement('i');
    iRight.classList.add('fa', 'fa-arrow-right');
    rightArrow.classList.add('slider-right');
    rightArrow.appendChild(iRight);
    rightArrow.addEventListener('click', () => {
      this.slideRight();
    });

    this.container.appendChild(leftArrow);
    this.container.appendChild(rightArrow);
  }
  slideLeft() {
    if (this.slideCurrent > 0) {
      this.slideCurrent--;
    } else {
      this.slideCurrent = this.slideTotal;
    }

    if (this.slideCurrent < this.slideTotal) {
      var proactiveSlide = this.slide[this.slideCurrent + 1];
    } else {
      var proactiveSlide = this.slide[0];
    }
    var activeSlide = this.slide[this.slideCurrent];
    if (this.slideCurrent > 0) {
      var preactiveSlide = this.slide[this.slideCurrent - 1];
    } else {
      var preactiveSlide = this.slide[this.slideTotal];
    }
    this.slide.forEach((elem) => {
      var thisSlide = elem;
      if (thisSlide.classList.contains('proactive')) {
        thisSlide.classList.remove('preactivede');
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.add('proactivede');
      }
      if (thisSlide.classList.contains('proactivede')) {
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.remove('proactivede');
        thisSlide.classList.add('preactivede');
      }
    });

    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    this.updateBullet();
  }
  slideRight() {
    if (this.slideCurrent < this.slideTotal) {
      this.slideCurrent++;
    } else {
      this.slideCurrent = 0;
    }

    if (this.slideCurrent > 0) {
      var preactiveSlide = this.slide[this.slideCurrent - 1];
    } else {
      var preactiveSlide = this.slide[this.slideTotal];
    }
    var activeSlide = this.slide[this.slideCurrent];
    if (this.slideCurrent < this.slideTotal) {
      var proactiveSlide = this.slide[this.slideCurrent + 1];
    } else {
      var proactiveSlide = this.slide[0];
    }

    this.slide.forEach((elem) => {
      var thisSlide = elem;
      if (thisSlide.classList.contains('preactivede')) {
        thisSlide.classList.remove('preactivede');
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.add('proactivede');
      }
      if (thisSlide.classList.contains('preactive')) {
        thisSlide.classList.remove('preactive');
        thisSlide.classList.remove('active');
        thisSlide.classList.remove('proactive');
        thisSlide.classList.remove('proactivede');
        thisSlide.classList.add('preactivede');
      }
    });
    preactiveSlide.classList.remove('preactivede');
    preactiveSlide.classList.remove('active');
    preactiveSlide.classList.remove('proactive');
    preactiveSlide.classList.remove('proactivede');
    preactiveSlide.classList.add('preactive');

    activeSlide.classList.remove('preactivede');
    activeSlide.classList.remove('preactive');
    activeSlide.classList.remove('proactive');
    activeSlide.classList.remove('proactivede');
    activeSlide.classList.add('active');

    proactiveSlide.classList.remove('preactivede');
    proactiveSlide.classList.remove('preactive');
    proactiveSlide.classList.remove('active');
    proactiveSlide.classList.remove('proactivede');
    proactiveSlide.classList.add('proactive');

    this.updateBullet();
  }

  updateBullet() {
    if (!this.noBullets) {
      document.querySelectorAll('.bullet').forEach((elem, i) => {
        elem.classList.remove('active');
        if (i === this.slideCurrent) {
          elem.classList.add('active');
        }
      });
    }
    this.checkRepeat();
  }
  checkRepeat() {
    if (!this.repeat) {
      if (this.slideCurrent === this.slide.length - 1) {
        this.slide[0].classList.add('not-visible');
        this.slide[this.slide.length - 1].classList.remove('not-visible');
        if (!this.noArrows) {
          document.querySelector('.slider-right')?.classList.add('not-visible');
          document
            .querySelector('.slider-left')
            ?.classList.remove('not-visible');
        }
      } else if (this.slideCurrent === 0) {
        this.slide[this.slide.length - 1].classList.add('not-visible');
        this.slide[0].classList.remove('not-visible');
        if (!this.noArrows) {
          document.querySelector('.slider-left')?.classList.add('not-visible');
          document
            .querySelector('.slider-right')
            ?.classList.remove('not-visible');
        }
      } else {
        this.slide[this.slide.length - 1].classList.remove('not-visible');
        this.slide[0].classList.remove('not-visible');
        if (!this.noArrows) {
          document
            .querySelector('.slider-left')
            ?.classList.remove('not-visible');
          document
            .querySelector('.slider-right')
            ?.classList.remove('not-visible');
        }
      }
    }
  }

  initBullets() {
    if (this.noBullets) {
      return;
    }
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container');
    this.slide.forEach((elem, i) => {
      const bullet = document.createElement('div');
      bullet.classList.add('bullet');
      bullet.id = `bullet-index-${i}`;
      bullet.addEventListener('click', () => {
        this.goToIndexSlide(i);
      });
      bulletContainer.appendChild(bullet);
      elem.classList.add('proactivede');
    });
    this.container.appendChild(bulletContainer);
  }

  goToIndexSlide(index: any) {
    const sliding =
      this.slideCurrent > index
        ? () => this.slideRight()
        : () => this.slideLeft();
    while (this.slideCurrent !== index) {
      sliding();
    }
  }
  setMapToCurrentPosition() {
    (mapboxgl as typeof mapboxgl).accessToken =
      'pk.eyJ1IjoiZWRkaWVzb24xMyIsImEiOiJjanV3dGhnc2MwZzhzNDRwdmE0NTdzMTV6In0.gTi-HrGl2LtL4hnXjGL9dQ';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [121.718241, 17.625362], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
    const marker = new mapboxgl.Marker() // Initialize a new marker
      .setLngLat([121.718241, 17.625362]) // Marker [lng, lat] coordinates
      .addTo(map); // Add the marker to the map
    map.addControl(new mapboxgl.NavigationControl());
  }
}
