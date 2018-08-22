import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzTabComponent } from 'ng-zorro-antd/src/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {

  }

  tabs = [];
  selectedIndex = 0;

  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }

    // this.router.navigate(['/tab0']);
  }

  onSelectChange(event: any): void {
    console.log('onSelectChange', event);
    this.router.navigate([`/tab${event.index}`]);
  }
}
