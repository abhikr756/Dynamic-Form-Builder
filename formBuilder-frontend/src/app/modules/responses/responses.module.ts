import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsesRoutingModule } from './responses-routing.module';
import { ResponsesComponent } from './components/responses/responses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTableModule } from '@angular/material/table';
import { FileSaverModule } from 'ngx-filesaver';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ResponsesComponent
  ],
  imports: [
    CommonModule,
    ResponsesRoutingModule,
    SharedModule,
    MatTableModule,
    NgxDatatableModule,
    MatButtonModule,
    MatTooltipModule,
    FileSaverModule,
    MatIconModule
  ]
})
export class ResponsesModule { }
