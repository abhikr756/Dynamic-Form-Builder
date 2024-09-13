import { Component, EventEmitter, Output } from '@angular/core';
import { ViewstateService } from '../../services/viewstate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  buttonText = 'Preview Form';
  formLink = 'http://localhost:4200/forms';
  selectedSize: string = 'desktop';
  @Output() sizeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private viewStateService: ViewstateService,
    private router: Router,
    
  ) {}

  /**
   * Check if in preview mode
   * @returns
   */
  isPreviewMode(): boolean {
    return this.viewStateService.getPreviewMode();
  }

  /**
   * Toggle between edit and preview mode
   */
  togglePreviewMode(): void {
    const currentMode = this.viewStateService.getPreviewMode();
    this.viewStateService.setPreviewMode(!currentMode);
    this.buttonText = currentMode ? 'Preview Form' : 'Edit Form';
  }

  /**
   * Copy form link
   */
  copyToClipboard(): void {
    const inputElement = document.createElement('input');
    inputElement.value = this.formLink;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
  }

  /**
   * navigate to publish site
   */
  navigateToPublish() {
   
    this.router.navigate(['/publish']);
  }

  /**
   * Change size of preview form
   * @param size
   */
  changeFormModalSize(size: string) {
    this.selectedSize = size;
    this.sizeChange.emit(size);
  }
}
