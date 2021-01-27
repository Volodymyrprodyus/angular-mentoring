import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


const DATE_PATTERN: RegExp = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseDateComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CourseDateComponent),
    multi: true,
  }],
})
export class CourseDateComponent implements ControlValueAccessor, OnInit, OnDestroy, Validators {
  @Input() placeholder = 'dd/mm/yyyy';
  @Input() disabled: boolean;
  @Input() set isValidForm(val: boolean) {
    this._isValidForm = val;
    if (val) {
      this._markFormAsTouched(this.formControl);
    }
  }
  get isValidForm(): boolean {
    return this._isValidForm;
  }

  @Input() validationMsg: string;

  public isDateValid = true;
  private _isValidForm = false;
  public formControl: FormControl;
  private _destroy$: Subject<void> = new Subject();

  private _onChange: () => void = () => {};
  private _onTouched: () => void = () => {};

  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required, this.forbidenDateValidator(DATE_PATTERN)]);
  }

  public forbidenDateValidator(dateRe: RegExp): ValidatorFn {
      return  (control: AbstractControl): {[key: string]: any} | null => {
      const isDateValid = dateRe.test(control.value);
      return isDateValid ? null : { invalidForm: { valid: false, message: 'Required field' } };
    };
  }

    public writeValue(val: any): void {
    if (!val) {
      return;
    }
    this.formControl.setValue(val.substring(0, 10), { emitEvent: false, onlySelf: true });
    this.isDateValid = this.formControl.valid;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public registerOnChange(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public validate(): ValidationErrors | null {
    this.isDateValid = this.formControl.valid;
    return this.formControl.valid ? null : { invalidForm: { valid: false, message: 'Date is required field' } };
  }

  private _markFormAsTouched(formControl: FormControl): void {
    formControl.markAsTouched();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
