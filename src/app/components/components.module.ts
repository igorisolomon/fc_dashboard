import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    DashboardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    DashboardComponent
  ]
})
export class ComponentsModule { }
