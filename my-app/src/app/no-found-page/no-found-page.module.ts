import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageComponent } from './no-found-page.component';
import { HeaderModule } from '../shared/components/header';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FakeLogoModule } from '../shared/components/fake-logo';


@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    FormsModule,
    FakeLogoModule
  ]
})
export class NotFoundPageModule { }
