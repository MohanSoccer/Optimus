import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartTableService } from './smart-table.service';



@NgModule({
  imports: [
    CommonModule,
  ],
  // providers: [
  //   ...SERVICES,
  // ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [
        SmartTableService,
      ],
    };
  }
}
