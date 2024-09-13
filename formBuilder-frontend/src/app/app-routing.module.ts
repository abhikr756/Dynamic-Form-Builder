import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PublishformComponent } from './modules/publish/publishform/publishform.component';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/builder',
    // pathMatch: 'full',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'builder/:formId',
    loadChildren: () =>
      import('./modules/builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./modules/builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'publish',
    // component: PublishformComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'responses/:formId',
    // component: PublishformComponent,
    loadChildren: () =>
      import('./modules/responses/responses.module').then((m) => m.ResponsesModule),
  },
  {
    path: 'forms/:formId',
    loadChildren: () =>
      import('./modules/forms/publish-forms.module').then(
        (m) => m.PublishFormsModule
      ),
  },
  { path: 'error', component: ErrorComponent },
  // { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
