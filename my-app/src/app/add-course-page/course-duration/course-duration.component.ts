import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DURATION_PATTERN = '^[0-9]*$';
@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseDurationComponent),
    multi: true
  },
  {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CourseDurationComponent),
    multi: true,
  }],
})
export class CourseDurationComponent implements ControlValueAccessor, OnInit, OnDestroy, Validators{
  @Input() placeholder = 'minutes';
  @Input() disabled: boolean;
  @Input() set isValidForm(val: boolean) {
    this._isValidForm = val;
    if (val) {
      this._markFormControlAsTouched(this.formControl);
    }
  }
  get isValidForm(): boolean {
    return this._isValidForm;
  }

  @Input() validationMsg: string;

  public isDurationValid = true;
  private _isValidForm = false;
  public formControl: FormControl;
  private _destroy$: Subject<void> = new Subject();

  private _onChange: () => void = () => {};
  private _onTouched: () => void = () => {};

  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required, Validators.pattern(DURATION_PATTERN)]);
  }

  writeValue(val: any): void {
    if (!val) {
      return;
    }
    this.formControl.setValue(val, { emitEvent: false, onlySelf: true });
    this.isDurationValid = this.formControl.valid;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  validate(c: any): ValidationErrors | null {
    this.isDurationValid = this.formControl.valid;
    return this.formControl.valid ? null : { invalidForm: { valid: false, message: 'Duration is required field' } };
  }

  private _markFormControlAsTouched(formControl: FormControl): void {
    formControl.markAsTouched();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
