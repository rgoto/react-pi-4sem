/* Category */
export const CALL_FETCH_CATEGORY = "CALL_FETCH_CATEGORY";
export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";
export const FETCH_CATEGORY_FAILED = "FETCH_CATEGORY_FAILED";

/* Genry */
export const CALL_FETCH_GENRY = "CALL_FETCH_GENRY";
export const FETCH_GENRY_SUCCESS = "FETCH_GENRY_SUCCESS";
export const FETCH_GENRY_FAILED = "FETCH_GENRY_FAILED";

/* Type */
export const CALL_FETCH_TYPE = "CALL_FETCH_TYPE";
export const FETCH_TYPE_SUCCESS = "FETCH_TYPE_SUCCESS";
export const FETCH_TYPE_FAILED = "FETCH_TYPE_FAILED";

/* Content Rating */
export const CALL_FETCH_CONTENT_RATING = "CALL_FETCH_CONTENT_RATING";
export const FETCH_CONTENT_RATING_SUCCESS = "FETCH_CONTENT_RATING_SUCCESS";
export const FETCH_CONTENT_RATING_FAILED = "FETCH_CONTENT_RATING_FAILED";

/* Android Version */
export const CALL_FETCH_ANDROID_VERSION = "CALL_FETCH_ANDROID_VERSION";
export const FETCH_ANDROID_VERSION_SUCCESS = "FETCH_ANDROID_VERSION_SUCCESS";
export const FETCH_ANDROID_VERSION_FAILED = "FETCH_ANDROID_VERSION_FAILED";

/* Initial State */
const INITIAL_STATE = {
  data: [],
  loading: {
    fetch: false
  },
  error: {
    fetch: null
  }
};

export default function reducer(state = INITIAL_STATE, action) {
  const {
    error,
    type,
    androidVersion,
    categories,
    contentRating,
    genry,
    typeFilter
  } = action;

  switch (type) {
    case CALL_FETCH_CATEGORY ||
      CALL_FETCH_TYPE ||
      CALL_FETCH_GENRY ||
      CALL_FETCH_ANDROID_VERSION ||
      CALL_FETCH_CONTENT_RATING:
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
    case FETCH_ANDROID_VERSION_FAILED ||
      FETCH_CONTENT_RATING_FAILED ||
      FETCH_TYPE_FAILED ||
      FETCH_GENRY_FAILED ||
      FETCH_CATEGORY_FAILED:
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
    case FETCH_ANDROID_VERSION_SUCCESS:
      return {
        ...state,
        androidVersion: Object.keys(androidVersion).map(
          key => androidVersion[key]
        ),
        error: {
          ...state.error,
          fetch: null
        },
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: categories,
        error: {
          ...state.error,
          fetch: null
        },
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case FETCH_CONTENT_RATING_SUCCESS:
      return {
        ...state,
        contentRating: contentRating,
        error: {
          ...state.error,
          fetch: null
        },
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case FETCH_GENRY_SUCCESS:
      return {
        ...state,
        genry: genry,
        error: {
          ...state.error,
          fetch: null
        },
        loading: {
          ...state.loading,
          fetch: false
        }
      };
    case FETCH_TYPE_SUCCESS:
      return {
        ...state,
        typeFilter: Object.keys(typeFilter).map(key => typeFilter[key]),
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

export const fetchCategories = () => {
  return { type: CALL_FETCH_CATEGORY };
};

export const fetchCategoriesSuccess = categories => {
  return { type: FETCH_CATEGORY_SUCCESS, categories };
};

export const fetchCategoriesFailed = error => {
  return { type: FETCH_CATEGORY_FAILED, error };
};

export const fetchGenry = () => {
  return { type: CALL_FETCH_GENRY };
};

export const fetchGenrySuccess = genry => {
  return { type: FETCH_GENRY_SUCCESS, genry };
};

export const fetchGenryFailed = error => {
  return { type: FETCH_GENRY_FAILED, error };
};

export const fetchType = () => {
  return { type: CALL_FETCH_TYPE };
};

export const fetchTypeSuccess = typeFilter => {
  return { type: FETCH_TYPE_SUCCESS, typeFilter };
};

export const fetchTypeFailed = error => {
  return { type: FETCH_TYPE_FAILED, error };
};

export const fetchContentRating = () => {
  return { type: CALL_FETCH_CONTENT_RATING };
};

export const fetchContentRatingSuccess = contentRating => {
  return { type: FETCH_CONTENT_RATING_SUCCESS, contentRating };
};

export const fetchContentRatingFailed = error => {
  return { type: FETCH_CONTENT_RATING_FAILED, error };
};

export const fetchAndroidVersion = () => {
  return { type: CALL_FETCH_ANDROID_VERSION };
};

export const fetchAndroidVersionSuccess = androidVersion => {
  return { type: FETCH_ANDROID_VERSION_SUCCESS, androidVersion };
};

export const fetchAndroidVersionFailed = error => {
  return { type: FETCH_ANDROID_VERSION_FAILED, error };
};
