export default function (state={}, action){
    switch(action.type){
        case 'GALLERY_NEWS':
            return{...state, galleryNews: action.payload}
        case 'SELECTED_GALLERY':
            return {...state,selected: action.payload}
        default :
            return state
    }
}
