import {
  GET_ALL_SCHOOLS_SUCCESS,
  GET_ALL_SCHOOLS_FAILURE,
  SUBMIT_NEW_SCHOOL_FORM_SUCCESS,
  SUBMIT_NEW_SCHOOL_FORM_FAILURE,
  SUBMIT_EDIT_SCHOOL_FORM_SUCCESS,
  SUBMIT_EDIT_SCHOOL_FORM_FAILURE,
} from '../actions/schools'

export default (state = { schools: [] }, action) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS_SUCCESS:
      return {
        ...state,
        schools: [...action.schools],
      }
    case GET_ALL_SCHOOLS_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case SUBMIT_NEW_SCHOOL_FORM_SUCCESS:
      const newSchool = action.school
      return {
        ...state,
        schools: [...state.schools, newSchool],
      }
    case SUBMIT_NEW_SCHOOL_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case SUBMIT_EDIT_SCHOOL_FORM_SUCCESS:
      return {
        ...state,
        schools: [...action.schools],
      }
    case SUBMIT_EDIT_SCHOOL_FORM_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
