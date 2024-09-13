import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Form Builder';
}

// import { Component } from '@angular/core';
// // import { FormGroup } from '@angular/forms';
// // import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.sass'],
// })
// export class AppComponent {
//   // form = new FormGroup({});
//   // options: FormlyFormOptions = {};
//   // model = { someInput: '' };
//   // fields: FormlyFieldConfig[] = [
//   //   {
//   //     type: 'button',
//   //     props: {
//   //       text: 'With Function',
//   //       onClick: () => alert('You clicked me!'),
//   //     },
//   //   },
//   // ];
//   // submit() {
//   //   if (this.form.valid) {
//   //     alert(JSON.stringify(this.model));
//   //   }
//   // }
// }
