import { Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'grupo-edca';


loadInitAnimation() {
  let loader;

  function loadNow( opacity) {
      setTimeout(function() {
        displayContent();
    }, 7500);

}

  function displayContent() {
    loader.classList.remove('load-gif');
    loader.style.display = 'none';
    const content = document.getElementById('content-wrap');
    content.classList.remove('display-none');
    content.classList.add('fadeIn');
  }

  document.addEventListener('DOMContentLoaded', function() {
    loader = document.getElementById('loader');
    loadNow(1);
  });
}

  ngOnInit(){

    this.loadInitAnimation();

  }
}
