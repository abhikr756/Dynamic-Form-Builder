import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { FormResponse } from 'src/app/interfaces/form-response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  @Input()
  type?: string;

  constructor(private data: DataService, private router: Router) {}

  /**
   * new form
   */
  newForm() {
    // console.log('new Form');
    this.data
      .newForm()
      .pipe(
        tap((form: FormResponse) => {
          if (form) {
            // form exists
            const formId = form.formId;
            this.router.navigateByUrl('/builder/' + formId);
          } else {
            // form id does not exists
            alert('Error- Form not found');
          }
        })
      )
      .subscribe();
  }

  /**
   * open existing form
   */
  openForm() {
    // console.log('open Form');
    this.router.navigateByUrl('/');
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
