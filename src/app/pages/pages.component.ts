import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
    `
    .example-container {
  width: 100%;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}

.example-sidenav-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.example-sidenav {
  padding: 20px;
}
    `
  ]
})
export class PagesComponent {

}
