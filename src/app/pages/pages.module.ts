import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ModalOverlaysModule } from '../_common/modal-overlays/modal-overlays.module';
import { ShowcaseDialogComponent } from '../_common/modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from '../_common/modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,

  ],
  declarations: [
    PagesComponent,

    // ShowcaseDialogComponent,
    // DialogNamePromptComponent,
  ],
  entryComponents:[
    ShowcaseDialogComponent,
    DialogNamePromptComponent,
  ]
})
export class PagesModule {
}
