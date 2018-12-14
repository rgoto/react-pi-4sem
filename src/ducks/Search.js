export const CALL_FETCH_SEARCH = 'CALL_FETCH_SEARCH';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILED = 'FETCH_SEARCH_FAILED';

const INITIAL_STATE = {
    data: {},
    loading: {
        fetch: false
    },
    error: {
        fetch: null
    }
};


export default function reducer(state = INITIAL_STATE, action) {

    const {responseDataSearch, error, type } = action;

    switch (type) {
        case CALL_FETCH_SEARCH:
            return {
                ...state,
                error: {
                    ...state.error,
                    fetch: null
                },
                loading: {
                    ...state.loading,
                    fetch: true
                }
            };
        case FETCH_SEARCH_FAILED:
            return {
                ...state,
                error: {
                    ...state.error,
                    fetch: error
                },
                loading: {
                    ...state.loading,
                    fetch: false
                }
            };
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                data: responseDataSearch,
                error: {
                    ...state.error,
                    fetch: null
                },
                loading: {
                    ...state.loading,
                    fetch: false
                }
            };
        default:
            return state;
    }
}

export const fetchSearch = dataSearch => {
  return { type: CALL_FETCH_SEARCH, dataSearch };
};

export const fetchSearchFailed = error => {
    return { type: FETCH_SEARCH_FAILED, error };
};

export const fetchSearchSuccess = responseDataSearch => {
  return { type: FETCH_SEARCH_SUCCESS, responseDataSearch };
};
