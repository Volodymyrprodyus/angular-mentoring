import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteSelectComponent } from './autocomplete-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AutoCompleteSelectComponent', () => {
    let component: AutoCompleteSelectComponent;
    let fixture: ComponentFixture<AutoCompleteSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AutoCompleteSelectComponent],
            imports: [FormsModule, ReactiveFormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AutoCompleteSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should filter options on search', () => {
        component.options = ['one', 'two', 'three'];
        component.inputValue = 'o';
        component.onSearch();
        expect(component.filteredOptions).toEqual(['one', 'two']);
        component.inputValue = 'T';
        component.onSearch();
        expect(component.filteredOptions).toEqual(['two', 'three']);
    });
});
