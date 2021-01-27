import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteSelectComponent } from './autocomplete-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AutoCompleteSelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AutoCompleteSelectComponent],
})
export class AutocompleteSelectModule {}
