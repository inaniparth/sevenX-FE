import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { FormStatus, getFormControlValue, getScreenNameDropdownList, ScreenNameDropDown, setFormControlValue } from 'src/app/app-utils';
import { UploadDocumentsService } from 'src/app/service/api/upload-documents.service';
import { UploadDocumentGetModel, UploadDocumentPostModel } from 'src/app/service/models/upload-document.model';
import { GrowlService } from 'src/common-ui/growl/growl.service';

@Component({
  selector: 'sevenx-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.scss']
})
export class UploadDocumentsComponent implements OnInit {

  baseForm: FormGroup;

  screenList: ScreenNameDropDown[] = getScreenNameDropdownList();

  filteredScreenList: ScreenNameDropDown[];

  displayWithScreenNameFn = (screen: ScreenNameDropDown) => screen && `${screen.screenName || ''}`;

  constructor(
    private formBuilder: FormBuilder,
    private growlService: GrowlService,
    private uploadDocumentsService: UploadDocumentsService
  ) {
    this.initBaseForm();
  }

  ngOnInit(): void {

  }

  initBaseForm() {
    this.baseForm = this.formBuilder.group({
      document: ['', [Validators.required]],
      documentFor: ['', [Validators.required]],
      documentTitle: ['', Validators.required],
      screenName: ['', Validators.required]
    });
  }

  screenNameInputChangeHandler(searchedValue: string) {
    searchedValue = searchedValue ? searchedValue.toLowerCase().trim() : '';
    this.filteredScreenList = this.screenList.filter((screen: ScreenNameDropDown) => {
      return screen && screen.screenName && screen.screenName.toLowerCase().includes(searchedValue);
    });
  }

  screenNameFieldCloseHandler(screenNameInputElement: HTMLInputElement) {
    if (screenNameInputElement) {
      this.setScreenNameFormControlValue(screenNameInputElement.value);
      screenNameInputElement.blur();
    }
  }

  setScreenNameFormControlValue(searchedString: string) {
    searchedString = searchedString ? searchedString.toLowerCase().trim() : '';
    let matchedValue: ScreenNameDropDown = null;
    if (searchedString) {
      matchedValue = this.screenList.find((screen: ScreenNameDropDown) => {
        return screen && screen.screenName && screen.screenName.toLowerCase() === searchedString;
      }) || null;
    }
    setFormControlValue('screenName', matchedValue, this.baseForm);
  }

  uploadDocument() {
    if (this.baseForm && this.baseForm.status && this.baseForm.status.toUpperCase() === FormStatus.INVALID.toUpperCase()) {
      return;
    } else {
      const document = getFormControlValue('document', this.baseForm);
      const formData = new FormData();
      formData.append("document", document, document.name);
      formData.set("documentFor", getFormControlValue('documentFor', this.baseForm));
      formData.set("documentTitle", getFormControlValue('documentTitle', this.baseForm));
      formData.set("screenName", getFormControlValue('screenName', this.baseForm).screenCode);
      this.documentUploadRequest(formData);
    }
  }

  documentUploadRequest(uploadDocumentPostModel) {
    this.uploadDocumentsService.post(uploadDocumentPostModel)
      .pipe(take(1))
      .subscribe((response) => {
        if (response && response.data && response.status === 200) {
          this.growlService.successMessageGrowl('Document Upload Successfully');
          setFormControlValue('document', null, this.baseForm);
          this.baseForm.reset();
        } else {
          this.growlService.errorMessageGrowl();
        }
      }, () => {
        this.growlService.errorMessageGrowl();
      });
  }

  onDocumentChange(event: any) {
    if (event && event.target && event.target.files && event.target.files.length && event.target.files[0]) {
      setFormControlValue('document', event.target.files[0], this.baseForm);
      setFormControlValue('documentTitle', event.target.files[0].name, this.baseForm);
    }
  }
}
