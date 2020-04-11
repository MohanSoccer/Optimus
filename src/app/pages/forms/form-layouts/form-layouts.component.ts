import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NbToastrService } from '@nebular/theme';

export class UserModel {
  id?:any;
  firstName:string;
  lastName:string;
  username:string;
  email:string;
  age:any;
}

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent implements OnInit {

  constructor(private route:Router,private activateRoute:ActivatedRoute , private toaster:NbToastrService, private service: SmartTableData) {}

  userModel:UserModel = new UserModel();
  isEdit:boolean = false;

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get("id");

    if(id) {
      this.isEdit = true;
      this.get(id);
    }
  }

  submit() {
    if(this.isEdit) {
      this.service.update(this.userModel);
      this.toaster.success("Success" , "Updated Successfully" );

    } else {
      this.service.add(this.userModel);
      this.toaster.success("Success" , "Created Successfully" );
    }
    this.route.navigate(["/pages/tables/smart-table"]);
  }

  get(id) {
    console.log(this.service.getOne(id));
   this.userModel = this.service.getOne(id);
  }

}
