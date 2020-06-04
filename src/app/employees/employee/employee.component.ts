import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    if(localStorage.getItem('user')==null){
      this.router.navigate(['login']);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: null,
      Name: '',
      username: '',
      passwords: '',
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.ID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
