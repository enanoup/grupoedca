import { Component, OnInit } from '@angular/core';
const $ = (window as any)['jQuery'];

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  windowHeight: any;
  windowWidth: any;

  constructor() { }

  loadCarrusel() {

    $('.fullscreen .flexslider').flexslider({
        animation: 'fade',
        directionNav: 'false',
        controlNav: 'thumbnails'
    });

    this.windowHeight = $(window).height();
    this.windowWidth = $(window).width();

    $('.flexslider-wrap .slides').each(function() {
        const h = $(this).height();
        const w = $(this).width();
        const ratA = w / h;
        const ratI = this.windowWidth / this.windowHeight;
        if (ratA > ratI) {
            const r = w / h;
            $(this).css('height', this.windowHeight);
            $(this).css('width', this.windowHeight * r);
            const m = ((this.windowHeight * r) - this.windowWidth) / 2;
            $(this).css('margin-left', -m);
            $(this).attr('rat', 1);
            $(this).attr('mar', m);
        } else {
            const r = h / w;
            $(this).css('width', this.windowWidth);
            $(this).css('height', this.windowWidth * r);
            const m = ((this.windowWidth * r) - this.windowHeight) / 2;
            $(this).css('margin-top', -m);
            $(this).attr('rat', 0);
            $(this).attr('mar', m);
        }
    });

    this.windowHeight = $(window).height();
    this.windowWidth = $(window).width();

    $('.fullscreen').css('height', this.windowHeight);

    $('.flexslider-wrap .slides li').css('height', window.innerHeight - 0);

      /*-----------------------------------------------------------------------------------*/
      /*  Room Detail Slider
      /*-----------------------------------------------------------------------------------*/

    $('.room-slider .flexslider').flexslider({
          animation: 'fade',
          directionNav: 'true',
          controlNav: 'true'
      });
}

  ngOnInit(): void {
    this.loadCarrusel();
  }

}
