import {WORK_ACTION, workAction} from '../actions/WorkAction';


const work = (rec) => {
    console.log("Work", rec);
    alert(JSON.stringify(rec));
};


const WorkReducer = (state = {}, action) => {
    if (action.type === WORK_ACTION) {
        work(action.payload);
        return Object.assign({}, state, workAction());
    }
    return state;
};


export default WorkReducer;