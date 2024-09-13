import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NotificationType } from 'src/app/enums/NotificationType';
import { Notification } from 'src/app/interfaces/notification';

@Injectable()
export class NotificationService {
  private notificationSubject$ = new BehaviorSubject<Notification | null>(null);
  private notification$: Observable<Notification | null> =
    this.notificationSubject$.asObservable();

  /**
   * Display success message.
   *
   * @param message
   * @param duration
   */
  success(message: string, duration?: number) {
    this.notify(message, NotificationType.Success, duration);
  }

  /**
   * Display error message
   *
   * @param message
   * @param duration
   */
  error(message: string, duration?: number) {
    this.notify(message, NotificationType.Error, duration);
  }

  /**
   * add new notification.
   *
   * @param message
   * @param type
   * @param duration
   */
  private notify(message: string, type: NotificationType, duration?: number) {
    duration = !duration ? 3000 : duration;
    this.notificationSubject$.next({
      message: message,
      type: type,
      duration: duration,
    } as Notification);
  }

  get notification(): Observable<Notification | null> {
    return this.notification$;
  }
}
