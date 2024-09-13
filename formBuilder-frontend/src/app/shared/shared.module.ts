import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FieldWrapperComponent } from './components/wrappers/field-wrapper/field-wrapper.component';
import { GroupFieldWrapperComponent } from './components/wrappers/group-field-wrapper/group-field-wrapper.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FieldWrapperComponent,
    GroupFieldWrapperComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatOptionModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [NotificationService],
  exports: [
    HeaderComponent,
    FieldWrapperComponent,
    GroupFieldWrapperComponent,
    NotificationComponent,
  ],
})
export class SharedModule {}
