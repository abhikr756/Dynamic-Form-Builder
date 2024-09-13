import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewstateService {
  private _formId = '';
  private _formName = '';
  private isPreviewModeSubject = new BehaviorSubject<boolean>(false);
  isPreviewMode$: Observable<boolean> =
    this.isPreviewModeSubject.asObservable();

  setPreviewMode(isPreviewMode: boolean): void {
    this.isPreviewModeSubject.next(isPreviewMode);
  }

  getPreviewMode(): boolean {
    return this.isPreviewModeSubject.value;
  }

  set formId(id: string) {
    this._formId = id;
  }

  get formId(): string {
    return this._formId;
  }

  set formName(name: string) {
    this._formName = name;
  }

  get formName(): string {
    return this._formName;
  }
}
