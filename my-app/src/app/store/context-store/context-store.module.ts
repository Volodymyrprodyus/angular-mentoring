import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpService } from 'src/app/core/service/http.service';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from './auth/auth.reducer';
import { AuthorsEffects } from './authors/authors.effects';
import { authorsReducer } from './authors/authors.reducer';
import { FEATURE_NAME } from './context.store.config';
import { CoursesEffects } from './courses/courses.effects';
import { coursesReducer } from './courses/courses.reducer';
import { generalInfoReducer } from './generalInfo/general-info.reducer';
import { ContextStoreFacadeService } from './services/store-facade.service';

@NgModule({
    imports: [
        StoreModule.forFeature(FEATURE_NAME, {
            auth: authReducer,
            courses: coursesReducer,
            authors: authorsReducer,
            generalInfo: generalInfoReducer,
        }),
        EffectsModule.forFeature([CoursesEffects, AuthEffects, AuthorsEffects]),
    ],
    providers: [ContextStoreFacadeService, HttpService],
})
export class ContextStoreModule {}
