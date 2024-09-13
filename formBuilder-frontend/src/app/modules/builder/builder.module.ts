import { FormlyMatSliderModule } from '@ngx-formly/material/slider';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './components/builder/builder.component';
import { BuilderRoutingModule } from './builder-routing.module';
import { ControlTableComponent } from './components/control-table/control-table.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCheckboxComponent } from './components/fields/edit-checkbox/edit-checkbox.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditRadioButtonComponent } from './components/fields/edit-radio-field/edit-radio-field.component';
import { EditEmailComponent } from './components/fields/edit-email/edit-email.component';
import { EditHeaderComponent } from './components/fields/edit-heading/edit-header.component';
import { EditDropdownComponent } from './components/fields/edit-dropdown/edit-dropdown.component';
import { EditMultiselectComponent } from './components/fields/edit-multiselect/edit-multiselect.component';
import { EditAddressComponent } from './components/fields/edit-address/edit-address.component';
import { EditDatepickerComponent } from './components/fields/edit-datepicker/edit-datepicker.component';
import { EditPhonenumberComponent } from './components/fields/edit-phonenumber/edit-phonenumber.component';
import { EditFullnameComponent } from './components/fields/edit-fullname/edit-fullname.component';
import { EditRatingComponent } from './components/fields/edit-rating/edit-rating.component';
import { EditSubmitbtnComponent } from './components/fields/edit-submitbtn/edit-submitbtn.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EditTextareaComponent } from './components/fields/edit-textarea/edit-textarea.component';
import { FormlyModule } from '@ngx-formly/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FieldWrapperComponent } from 'src/app/shared/components/wrappers/field-wrapper/field-wrapper.component';
import { GroupFieldWrapperComponent } from 'src/app/shared/components/wrappers/group-field-wrapper/group-field-wrapper.component';
import { PublishFormsModule } from '../forms/publish-forms.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { EditTextComponent } from './components/fields/edit-text/edit-text.component';

@NgModule({
  declarations: [
    BuilderComponent,
    ControlTableComponent,
    FormBuilderComponent,
    NavbarComponent,
    EditRadioButtonComponent,
    EditEmailComponent,
    EditHeaderComponent,
    EditDropdownComponent,
    EditMultiselectComponent,
    EditCheckboxComponent,
    EditTextareaComponent,
    EditAddressComponent,
    EditDatepickerComponent,
    EditPhonenumberComponent,
    EditFullnameComponent,
    EditRatingComponent,
    EditSubmitbtnComponent,
    EditTextComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BuilderRoutingModule,
    PublishFormsModule,
    FormlyModule.forChild({
      wrappers: [
        { name: 'input-field', component: FieldWrapperComponent },
        { name: 'group-input-field', component: GroupFieldWrapperComponent },
      ],
    }),

    ReactiveFormsModule,
    FormsModule,
    FormlyMaterialModule,
    DragDropModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    FormlyMatNativeSelectModule,
    MatNativeDateModule,
    FormlyMatDatepickerModule,
    FormlyMatSliderModule,
    MatSidenavModule,
    MatCardModule,
  ],
})
export class BuilderModule {}
