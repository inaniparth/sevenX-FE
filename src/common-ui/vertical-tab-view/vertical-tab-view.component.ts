import { Component, Input, OnInit } from '@angular/core';
import { VeritcalTabConfig, VerticalTabViewConfig } from './vertical-tab-view.config';

@Component({
  selector: 'sevenx-vertical-tab-view',
  templateUrl: './vertical-tab-view.component.html',
  styleUrls: ['./vertical-tab-view.component.scss']
})
export class VerticalTabViewComponent implements OnInit {

  @Input()
  config: VerticalTabViewConfig;

  private _selectedTabChange: string;

  @Input()
  set selectedTabCode(value: string) {
    if (value && this._selectedTabChange !== value) {
      this._selectedTabChange = value;
      this.selectedTabChangeHandler();
    }
  }

  get selectedTabCode(): string {
    return this._selectedTabChange;
  }

  viewTemplate: any;

  constructor() { }

  ngOnInit(): void {
    this.setDefaultSelectedTab();
  }

  private setDefaultSelectedTab() {
    if (!this.selectedTabCode) {
      this.selectedTabCode = this.config.tabs[0].code;
    }
  }

  private selectedTabChangeHandler() {
    const selectedTabConfig: VeritcalTabConfig | undefined = this.getSelectedTabConfig();
    if (selectedTabConfig) {
      this.viewTemplate = selectedTabConfig.viewTemplate;
    }
  }

  private getSelectedTabConfig(): VeritcalTabConfig | undefined {
    if (this.selectedTabCode) {
      return this.config.tabs.find((tabConfig: VeritcalTabConfig) => tabConfig && tabConfig.code === this.selectedTabCode);
    }
  }

  tabSelectionChangeHandler(tabConfig: VeritcalTabConfig) {
    if (tabConfig) {
      if (tabConfig.onTabSelection) {
        tabConfig.onTabSelection();
      } 
      this.selectedTabCode = tabConfig.code;
    }
  }

}
