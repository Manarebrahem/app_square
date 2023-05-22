import { createStore } from "redux";
import { App } from './App';
const initialState={
  width:'50%'
}
  const store = createStore( (state = initialState, action) => {
    if (action.type==="WidthOne") {
        return (state = action.payload);
    }
        return state;
    
  });
 ;
 function WidthOne(value) {
  return {
    type: "WidthOne",
    payload: value,
  }}
 export function Btton() {
  store.dispatch(WidthOne("100%"));
};
store.subscribe(App());

export { store };