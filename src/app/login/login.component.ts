import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public Employees:Employee=new Employee;
  constructor(private service: EmployeeService, private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  Myfunction(){
    debugger
   this.service.loginSystem(this.Employees).subscribe(data=>{
    if(data!=null){
      localStorage.setItem('user',data.toString());
      this.router.navigate(['employee']);
    }else{
        this.toastr.error("Username or Password wrong");
    }
   })
  
   
  }

}
