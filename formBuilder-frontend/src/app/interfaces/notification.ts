import { NotificationType } from '../enums/NotificationType';

/**
 * Interface to represent notification data.
 */
export interface Notification {
  message: string;
  type: NotificationType;
  duration: number;
}
