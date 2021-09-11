import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStatus, getFormControlValue, setFormControlValue } from 'src/app/app-utils';
import { StartupRegistrationsFormService } from 'src/app/service/api/startup-registrations-form.service';
import { LoginGetModel } from 'src/app/service/models/login.model';
import { StartupRegistrationsFormPostModel } from 'src/app/service/models/startup-registrations-form.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'sevenx-startup-registrations-form',
  templateUrl: './startup-registrations-form.component.html',
  styleUrls: ['./startup-registrations-form.component.scss']
})
export class StartupRegistrationsFormComponent implements OnInit {

  private _screenName: string = null;

  @Input()
  set screenName(val: string) {
    this._screenName = val;
    setFormControlValue('screenName', this._screenName, this.baseForm);
  }

  get screenName(): string {
    return this._screenName;
  }

  baseForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private growlService: GrowlService,
    private startupRegistrationsFormService: StartupRegistrationsFormService
  ) {
    this.initBaseForm();
  }

  ngOnInit(): void {

  }

  initBaseForm() {
    this.baseForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      state: ['', Validators.required],
      screenName: ['', Validators.required]
    });
  }

  registerClickHandler() {
    if (this.baseForm && this.baseForm.status && this.baseForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const startupRegistrationsFormPostModel = new StartupRegistrationsFormPostModel().toRemote({
        name: getFormControlValue('name', this.baseForm),
        email: getFormControlValue('email', this.baseForm),
        contactNo: getFormControlValue('contactNo', this.baseForm),
        state: getFormControlValue('state', this.baseForm),
        screenName: getFormControlValue('screenName', this.baseForm)
      });
      this.registerRequest(startupRegistrationsFormPostModel);
    }
  }

  registerRequest(startupRegistrationsFormPostModel) {
    this.startupRegistrationsFormService.post(startupRegistrationsFormPostModel)
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.data && response.status === 200) {
          this.growlService.successMessageGrowl('Contact details saved Successfully');
          // logic if any
        } else {
          this.growlService.errorMessageGrowl('An Error occured, please contact Admin');
        }
      });
  }


}
