import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';
import { PublishFormsRoutingModule } from './publish-forms-routing.module';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { FieldWrapperComponent } from 'src/app/shared/components/wrappers/field-wrapper/field-wrapper.component';
import { GroupFieldWrapperComponent } from 'src/app/shared/components/wrappers/group-field-wrapper/group-field-wrapper.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioButton } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormlyMatSliderModule } from '@ngx-formly/material/slider';


@NgModule({
  declarations: [FormModalComponent],
  imports: [
    CommonModule,
    PublishFormsRoutingModule,
    FormlyModule.forChild({
      wrappers: [
        { name: 'input-field', component: FieldWrapperComponent },
        { name: 'group-input-field', component: GroupFieldWrapperComponent },
      ],
    }),

    ReactiveFormsModule,
    FormlyMaterialModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    FormsModule,
    FormlyMatNativeSelectModule,
    MatRadioButton,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    MatSlideToggleModule,
    FormlyMatSliderModule,   
  ],
  exports: [FormModalComponent],
})
export class PublishFormsModule {}
