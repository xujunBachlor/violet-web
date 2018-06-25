import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';

@Component({
  selector: 'app-ahri',
  templateUrl: './ahri.component.html',
  styleUrls: ['./ahri.component.css']
})
export class AhriComponent implements OnInit {

  constructor(private service: AppService) { }

  dataList = [];
  ngOnInit() {
    this.service.getData('/violet').subscribe((data: Config) => this.dataList = data.violet);
  }

}
