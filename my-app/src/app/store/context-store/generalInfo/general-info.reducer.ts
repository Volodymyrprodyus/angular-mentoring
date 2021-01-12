import { Action, createReducer, on } from '@ngrx/store';
import * as generalInfoActions from './general-info.actions';
import { generalInfoInitialState } from './general-info-initial-state';
import { GeneralInfoState } from './general-info.state';
const reducer = createReducer(
    generalInfoInitialState,
    on(
        generalInfoActions.getIsOnlineStatus,
        (state: GeneralInfoState, { isOnline }: { isOnline: boolean }): GeneralInfoState => ({
            ...state,
            isOnline,
        })
    )
);

export function generalInfoReducer(state: GeneralInfoState | undefined, action: Action) {
    return reducer(state, action);
}
