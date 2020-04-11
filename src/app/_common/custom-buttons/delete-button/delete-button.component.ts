import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { DialogNamePromptComponent } from '../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';
import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-showcase-dialog',
  template: `<i style = "font-size: 27px; cursor:pointer;" class="nb-trash" (click) = "deleteRow()" ></i>`

})
export class DeleteButtonComponent implements OnInit{
  @Input() value; // data from table
  @Input() rowData;

  constructor(private toaster:NbToastrService ,private dialogService: NbDialogService,private service: SmartTableData) {}

  ngOnInit()
  {

  }

  deleteRow(){
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(isConfirmed => {
        if(isConfirmed) {
          const deleted = this.service.remove(this.rowData.id);
          this.toaster.success("Success" , "User deleted successfully");
        }
      })
  }

}
