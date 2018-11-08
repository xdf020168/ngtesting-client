import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { RequestService } from '../request';

@Injectable()
export class IssuePageSolutionService {
  constructor(private _reqService: RequestService) { }
  _apiBase = 'admin/issue_page_solution/';

  load() {
    return this._reqService.post(this._apiBase + 'load', {});
  }

  get(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'get', model);
  }
  getConfig(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'getConfig', model);
  }

  addTab(tab: any) {
    return this._reqService.post(this._apiBase + 'addTab', tab);
  }
  getTab(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'getTab', model);
  }

  addField(elem: any) {
    return this._reqService.post(this._apiBase + 'addField', elem);
  }

  save(model: any) {
    return this._reqService.post(this._apiBase + 'save', model);
  }

  delete(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'delete', model);
  }

  setDefault(id: number) {
    const model = { id: id };
    return this._reqService.post(this._apiBase + 'setDefault', model);
  }
  changeOrder(id: number, act: string) {
    const model = { id: id, act: act };
    return this._reqService.post(this._apiBase + 'changeOrder', model);
  }

}

