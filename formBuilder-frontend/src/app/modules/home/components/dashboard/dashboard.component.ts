import { NotificationService } from './../../../../shared/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { FormSummary } from 'src/app/interfaces/form-summary';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass',
})
export class DashboardComponent implements OnInit {
  forms: FormSummary[] = [];
  baseUrl: string;

  constructor(
    private dataService: DataService,
    private notificationService: NotificationService
  ) {
    this.baseUrl = window.location.origin;
  }

  ngOnInit(): void {
    this.fetchforms();
  }

  fetchforms() {
    this.dataService
      .getAllFormsSummary()
      .pipe(
        tap((response) => {
          this.forms = response;
        }),
        catchError(() => {
          // console.log(error);
          this.notificationService.error(
            'Unknown error occured while fetching form'
          );
          return [];
        })
      )
      .subscribe();
  }

  copyToClipboard(link: string): void {
    const inputElement = document.createElement('input');
    inputElement.value = link;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    // send notification
    this.notificationService.success('Link Copied');
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }

  deleteForm(id: string, index: number) {
    if (confirm('Are you sure you want to Delete form?')) {
      this.dataService
        .deleteFormById(id)
        .pipe(
          tap(() => {
            this.notificationService.success('Form deleted successfully');
          }),
          catchError(() => {
            this.notificationService.error('Unknown error in form deletion');
            return [];
          })
        )
        .subscribe();
      this.forms.splice(index, 1);
      // window.location.reload();
    }
  }
}
