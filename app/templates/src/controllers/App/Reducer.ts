import { TYPES } from './Actions';
import { AppInitState } from './StateAndProps';
import I18n from '../../services/I18n';


export function Reducer(state = AppInitState, action): any {
	switch (action.type) {
		case TYPES.DATA_LOADED:
			state.locale = action.data.locale;
			I18n.setLocale({ ...action.data.locale });
			state.data = action.data.data
			return { ...state };

		case TYPES.GET_DEEPLINK:
			state.deeplinkHtml = action.data;
			return { ...state };

		default:
			return state;
	}
}
