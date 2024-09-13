import { Component, OnInit } from '@angular/core';
import { ViewstateService } from '../../services/viewstate.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.sass'],
})
export class BuilderComponent implements OnInit {
  isPreviewMode = false;
  selectedSize: string = 'desktop';
  identityTypes: string[] = [];

  constructor(private viewStateService: ViewstateService) {}

  ngOnInit(): void {
    this.viewStateService.isPreviewMode$.subscribe((isPreviewMode) => {
      this.isPreviewMode = isPreviewMode;
    });
  }

  onSizeChange(size: string) {
    this.selectedSize = size;
  }

  onIdentitiesChange(identityTypes: string[]){
    this.identityTypes = identityTypes;
  }
}
