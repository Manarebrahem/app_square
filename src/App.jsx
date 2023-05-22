
import React from "react";
import { store } from "./index";
import { Btton } from "./index";
export function App() {
  console.log(store.getState().width);
  const root = document.getElementById("root");
  root.append(
  <div className='container'>
    <div className='row'>
      <div className='col-md-6 border-end-1 vh-100 w-50'>
        <div className='text-center'>
        <h2>Side One</h2>
        </div>
      </div>
     
      <div className='col-md-6 vh-100' onClick={Btton}  style={{width:store.getState().width}}  >
      <div className='text-center'>
        <h2>Side Two</h2>
        </div>
      </div>
</div>
</div>
  )
   
  
  
  
}
export default App;