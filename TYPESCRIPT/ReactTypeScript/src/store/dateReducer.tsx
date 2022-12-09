import { TDates, DateAction } from "../type/Type";

const initState = [
    {id: 1, date: '2022-11-29'},
    {id: 2, date: '2022-11-30'},
    {id: 3, date: '2022-12-01'},
    {id: 4, date: '2022-12-02'},
    {id: 5, date: '2022-12-03'}
];

const dateReducer = (state:TDates[] = initState, action: DateAction) => {
    if ( action.type === 'DAY/WRITE' && typeof(action.payload) != "number") {
        state = [...state, action.payload ];
    } else if ( action.type === 'DAY/DELETE' ) {
        state = state.filter((day) => day.id != action.payload );
    }

    return state;
}

export default dateReducer;