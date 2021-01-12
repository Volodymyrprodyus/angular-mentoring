import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpService } from 'src/app/core/service/http.service';
import { FEATURE_NAME } from './context.store.config';
import { CoursesEffects } from './courses/courses.effects';
import { coursesReducer } from './courses/courses.reducer';
import { generalInfoReducer } from './generalInfo/general-info.reducer';
import { ContextStoreFacadeService } from './services/store-facade.service';

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, {
            courses: coursesReducer,
            generalInfo: generalInfoReducer,
        }),
        EffectsModule.forFeature([CoursesEffects]),
    ],
    providers: [ContextStoreFacadeService, HttpService],
})
export class ContextStoreModule {}
