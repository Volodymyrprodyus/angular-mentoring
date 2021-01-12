// the model of the state goes here

import { CoursesState } from './courses/courses.state';
import { GeneralInfoState } from './generalInfo/general-info.state';


export interface ContextState {
    courses: CoursesState;
    generalInfo: GeneralInfoState;
}
