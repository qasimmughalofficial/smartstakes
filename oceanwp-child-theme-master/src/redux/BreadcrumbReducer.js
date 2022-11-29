import { BREADCRUMB_SPORTS, BREADCRUMB_MATCH_BETWEEN, MATCH_DETALS_URL } from "./commonTypes";

const initialState = {
    sports: null,
    matchDetail: null,
    matchURL: ''
}

const BreadcrumbReducer = (state = initialState, action) => {
    switch (action.type) {
        case BREADCRUMB_SPORTS : return {
            ...state,
            sports: action.payload,
        }
        case BREADCRUMB_MATCH_BETWEEN : return {
            ...state,
            matchDetail: action.payload,
        }
        case MATCH_DETALS_URL: return {
            ...state,
            matchURL: action.payload,
        }
        default : return state;
    }
}
export default BreadcrumbReducer;