// the model of the state goes here

import { AuthState } from './auth/auth.state';
import { CoursesState } from './courses/courses.state';
import { GeneralInfoState } from './generalInfo/general-info.state';


export interface ContextState {
    auth: AuthState;
    courses: CoursesState;
    generalInfo: GeneralInfoState;
}
