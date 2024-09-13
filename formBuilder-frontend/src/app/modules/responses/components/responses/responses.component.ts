import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, switchMap, tap, map } from 'rxjs';
import { FormSaveResponse } from 'src/app/interfaces/form-save-response';
import { DataService } from 'src/app/services/data.service';
import * as JsonToCSV from 'json-2-csv';
import { FileSaverService } from 'ngx-filesaver'; 
import { NotificationService } from 'src/app/shared/services/notification.service';


@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrl: './responses.component.sass',
})
export class ResponsesComponent implements OnInit {
  formResponses: FormSaveResponse[] = [];
  rows: any[] = [];
  columns: any[] = [];
  displayColumns?: any[];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private fileSaverService : FileSaverService,
    private notificationService: NotificationService
  ) { }
  downloadCSV() {
    // const csv =  JsonToCSV.json2csv(this.formResponses, {expandNestedObjects:true, emptyFieldValue:"", });
    const csv =  JsonToCSV.json2csv(this.rows, {emptyFieldValue:""});
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const filename = 'responses.csv';
    try {
      this.fileSaverService.save(blob, filename);
      this.notificationService.success("Responses Downloaded");
    }
    catch (e)
    {
      this.notificationService.error(
        'Unknown error occured while Downloading form responses'
      );
      console.log(e) ;
    }
  }



  displayData() {
    if (this.formResponses.length === 0) {
      console.log("No form responses to display");
      return;
    }

    let tempData: any[] = [];
    const allKeys = new Set<string>();
    
    this.formResponses.forEach(response => {
      const row: { [key: string]: any } = {};
    
      // a recursive function to extract keys from nested objects
      const extractEntries = (data: any) => {
        if (typeof data === 'object' && data !== null && !Array.isArray(data) ) { 
            Object.entries(data).forEach(([key, value]) => {
            if( typeof value != 'object' || Array.isArray(value)){

              allKeys.add(key);
              row[key] = value;            
            }
           
            extractEntries(data[key]); // Recurse into nested objects
          });
        }
      };
    
      extractEntries(response.formData);
      extractEntries(response.identities);
    
      tempData.push(row);
    });
    
    this.rows = tempData;
    this.columns = Array.from(allKeys);
    this.displayColumns = this.columns;
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((param) => {
          // get form id from parameter
          const id = param.get('formId');
          if (id) {
            return this.dataService.getFormResponsesById(id).pipe(
              tap((formResponses: FormSaveResponse[]) => {
                if (formResponses) {
                  // form exists
                  this.formResponses = formResponses;
                  // console.log(
                  //   'form responses' + JSON.stringify(this.formResponses)
                  // );

                  this.formResponses.map((response) => {
                    response.formData = JSON.parse(response.formData);
                  });
                  console.log(this.formResponses)
                  this.displayData();
                  this.notificationService.success('All form responses loaded');
                } else {
                  // form id does not exists
                  this.notificationService.error('Form not found');
                }

              }),
              catchError(() => {
                this.notificationService.error(
                  'Unknown error occured while loading form'
                );
                return [];
              })
            );
          } else {
            this.notificationService.error('Error - Form ID is invalid');
            return [];
          }
        }),
        catchError(() => {
          this.notificationService.error(
            'Unknown error occured while loading form'
          );
          return [];
        })
      )
      .subscribe();
  }
}
