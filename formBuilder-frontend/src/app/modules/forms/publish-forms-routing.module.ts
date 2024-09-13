import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormModalComponent } from './components/form-modal/form-modal.component';

const routes: Routes = [
  {
    path: '',
    component: FormModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishFormsRoutingModule {}
