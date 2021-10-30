import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'sevenx-login-signup-dialog',
  templateUrl: './login-signup-dialog.component.html',
  styleUrls: ['./login-signup-dialog.component.scss']
})
export class LoginSignupDialogComponent implements OnInit {

  isLoginComponentSelected: boolean = true;

  constructor(
    private dialogRef: MatDialogRef<LoginSignupDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  closeLoginSignupDialog() {
    this.dialogRef.close();
  }

}
