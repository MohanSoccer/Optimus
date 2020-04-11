import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { DialogComponent } from '../../../_common/modal-overlays/dialog/dialog.component';
import { DeleteButtonComponent } from '../../../_common/custom-buttons/delete-button/delete-button.component';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {


  filter: boolean = false;

  settings = {
    hideSubHeader: true,
    mode: 'external',
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: "Edit",
      custom: [{ name: 'Edit', title: '<i class="nb-edit"></i>' }],
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        filter: false
      },
      firstName: {
        title: 'First Name',
        type: 'string',
        filter: false
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
        filter: false
      },
      username: {
        title: 'Username',
        type: 'string',
        filter: false
      },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false
      },
      age: {
        title: 'Age',
        type: 'number',
        filter: false
      },
      delete: {
        title: 'Delete',
        filter: false,
        type: 'custom',
        // valuePrepareFunction: (value, row, cell) => {
        //   return "nb-edit";
        // },
        renderComponent: DeleteButtonComponent,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private route:Router,private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  edit(event) {
    alert(13);
  }

  onCustomAction(event) {
    this.route.navigate([`/pages/forms/layouts/${event.data.id}`]);
  }

}
