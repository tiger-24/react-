
const defaultState = {
    data:{},
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case "MODAL_CHANGE":
            let modalState = JSON.parse(JSON.stringify(state));
            // console.log(modalState);
            modalState = action.value;  
            // console.log(modalState);
            return modalState;
    }
    return state;
}

