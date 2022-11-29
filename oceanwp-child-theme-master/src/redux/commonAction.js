import { BREADCRUMB_SPORTS, BREADCRUMB_MATCH_BETWEEN, MATCH_DETALS_URL } from "./commonTypes";

export const currentSports = (data) => {
    return {
        type: BREADCRUMB_SPORTS,
        payload: data,
    }
}

export const currentMatches = (data) => {
    return {
        type: BREADCRUMB_MATCH_BETWEEN,
        payload: data,
    }
}

export const currentURL = (data) => {
    return {
        type: MATCH_DETALS_URL,
        payload: data,
    }
}