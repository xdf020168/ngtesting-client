import { Component, ViewEncapsulation, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalState } from '../../../../../global.state';

import { CONSTANT } from '../../../../../utils/constant';
import { Utils } from '../../../../../utils/utils';
import { RouteService } from '../../../../../service/route';
import { IssuePageService } from '../../../../../service/admin/issue-page';

@Component({
  selector: 'issue-page-main',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./main.scss'],
  templateUrl: './main.html',
})
export class IssuePageMain implements OnInit, AfterViewInit {
  pages: any[];
  solutions: any[];

  constructor(private _routeService: RouteService, private _state: GlobalState,
              private fb: FormBuilder, private el: ElementRef,
              private issuePageService: IssuePageService) {
  }

  ngOnInit() {
    const that = this;

    that.loadData();
  }

  ngAfterViewInit() {

  }

  loadData() {
    this.issuePageService.load().subscribe((json: any) => {
      this.pages = json.pages;
      this.solutions = json.solutions;
    });
  }

}
