import { createAction, props } from '@ngrx/store';
import { GeneralInfoActionTypes } from './general-info.action-types';

export const getTokenSuccess = createAction(GeneralInfoActionTypes.GetTokenSuccess);
export const getTokenError = createAction(GeneralInfoActionTypes.GetTokenError);
export const getIsOnlineStatus = createAction(GeneralInfoActionTypes.GetIsOnlineStatus, props<{ isOnline: boolean }>());
