import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        MatButtonModule,
        MatCheckboxModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, FooterComponent]
})
export class LayoutModule { }
