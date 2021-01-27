import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ListOption } from 'src/app/models/list-options.model';

@Component({
  selector: 'app-autocomplete-select',
  templateUrl: './autocomplete-select.component.html',
  styleUrls: ['./autocomplete-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AutoCompleteSelectComponent),
      multi: true,
    },
  ],
})
export class AutoCompleteSelectComponent
  implements ControlValueAccessor, Validator, OnInit, OnDestroy, OnChanges {
  @Input() validationMsg: string;
  @Input() label: string;
  @Input() set options(options: ListOption[]) {
    this._options = options
      ? [...options, ...this._options]
      : [...this._options];
  }

  get options(): ListOption[] {
    return this._options;
  }

  get OptionsFormArray(): FormArray {
    return this.formGroup.get('OptionsFormArray') as FormArray;
  }

  @Input() set isErrors(value: boolean) {
    this._isErrors = value;
    if (value) {
      this._sendCheckedOptions();
      this._markFormControlsAsTouched(this.OptionsFormArray);
    }
  }

  @Input() public placeholder = '';
  @Input() public selectedValue = '';
  @Input() public labelField = 'label';
  @Input() public searchField = this.labelField;

  @Output() public validOptionsList = new EventEmitter<Partial<ListOption[]>>();

  public filteredOptions: string[];
  public isMatch = true;
  public isAutocompleteOptionsShown = false;
  public inputValue = '';
  public optionsNames: string[] = [];

  public formGroup: FormGroup;
  private _options: ListOption[] = [];
  private _destroy$: Subject<void> = new Subject();
  private _isErrors = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      OptionsFormArray: new FormArray([], [Validators.required]),
    });
  }

  writeValue(values): void {
    if (Boolean(!values?.length)) {
      return;
    }
    this._options = [...values];
    values.forEach((value) => {
      this.OptionsFormArray.push(
        this.fb.control({ value: value.name, disabled: true })
      );
    });
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.OptionsFormArray.valueChanges
      .pipe(takeUntil(this._destroy$))
      .subscribe(fn);
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public validate(c: FormArray): ValidationErrors | null {
    let isNamefromApi = false;
    if (c.value) {
      isNamefromApi = c.value.every((opt) =>
        this.options.map(({ name }) => name).includes(opt)
      );
    }
    return isNamefromApi
      ? null
      : { invalidForm: { valid: false, message: 'Required field' } };
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (Boolean(changes.options)) {
      if (typeof this.selectedValue === 'string') {
        this.inputValue = this.selectedValue;
      } else {
        this.inputValue = Boolean(this.selectedValue)
          ? this.selectedValue[this.labelField]
          : '';
      }
    }
    this.filteredOptions = Boolean(this.selectedValue)
      ? []
      : this.options.map(({ name }) => name);
    this.onSearch();
  }

  public onSearch(): void {
    this.filteredOptions = this.options
      .map(({ name }) => name)
      .filter((option: string) => {
        const searchString: string =
          typeof option === 'string' ? option : option[this.searchField];

        return (
          searchString?.toLowerCase().indexOf(this.inputValue?.toLowerCase()) >
          -1
        );
      });
    this.isMatch = this.filteredOptions?.length > 0;
    this.isAutocompleteOptionsShown = this.inputValue.length > 0;
  }

  public selectOption(option: string): void {
    this.OptionsFormArray.push(
      this.fb.control({ value: option, disabled: true })
    );
    this.inputValue = '';
    this.filteredOptions = [];
    this.isAutocompleteOptionsShown = false;
  }

  public selectNoMatch(inputValue: string): void {
    this.OptionsFormArray.push(
      this.fb.control({ value: inputValue, disabled: true })
    );
    this.isMatch = true;
  }

  public onselectedDelete(index: number): void {
    this.OptionsFormArray.removeAt(index);
  }

  private _sendCheckedOptions(): void {
    const checkedOptions = this.OptionsFormArray.value.map((name) => {
      return this.options.find((option) => option.name === name);
    });
    this.validOptionsList.emit(checkedOptions);
  }

  private _markFormControlsAsTouched(OptionsFormArray: FormArray): void {
    OptionsFormArray.controls.forEach((control: FormControl) => {
      control.markAsTouched();
    });
  }

  private _onTouched: () => void = () => {};

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
