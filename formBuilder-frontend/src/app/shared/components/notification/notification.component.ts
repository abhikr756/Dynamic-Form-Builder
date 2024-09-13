import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { NotificationType } from 'src/app/enums/NotificationType';
import { tap } from 'rxjs';
import { Notification } from 'src/app/interfaces/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.sass',
})
export class NotificationComponent implements OnInit {
  @ViewChild('notificationContainer')
  container!: ElementRef<HTMLDivElement>;

  private classMap: Map<NotificationType, string>;

  constructor(
    private notification: NotificationService,
    private renderer: Renderer2
  ) {
    this.classMap = new Map<NotificationType, string>();
  }

  ngOnInit(): void {
    this.classMap.set(NotificationType.Success, 'success');
    // this.classMap.set(NotificationType.Warning, 'warning');
    this.classMap.set(NotificationType.Error, 'error');

    this.notification.notification
      .pipe(
        tap((message: Notification | null) => {
          if (message) {
            this.render(message);
          }
        })
      )
      .subscribe();
  }

  /**
   * Method to create and inject a notification box
   *
   * @param notification
   */
  private render(notification: Notification) {
    if (this.container) {
      const notificationDiv = this.renderer.createElement('div');
      const content = this.renderer.createElement('div');

      const boxColorClass = this.classMap.get(notification.type) || '';
      const classesToAdd = ['message-box', boxColorClass];
      classesToAdd.forEach((x) => this.renderer.addClass(notificationDiv, x));

      this.renderer.setStyle(notificationDiv, 'transition', `opacity 200ms`);
      this.renderer.setStyle(notificationDiv, 'opacity', '1');

      const text = this.renderer.createText(notification.message);
      this.renderer.appendChild(content, text);
      this.renderer.appendChild(notificationDiv, content);

      this.renderer.appendChild(this.container.nativeElement, notificationDiv);

      setTimeout(() => {
        this.renderer.setStyle(notificationDiv, 'opacity', '0');
        setTimeout(() => {
          this.renderer.removeChild(
            this.container.nativeElement,
            notificationDiv
          );
        }, 1000);
      }, notification.duration);
    }
  }
}
