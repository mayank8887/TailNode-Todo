import * as types from "./actiontypes"

const initialState = {
    todos:[],
    isLoading:false,
    isError:false
}


const reducer =(state = initialState,action)=>{

    const {type,payload}=action;

    switch(type){
        case types.GET_TODO_LISTS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        case types.GET_TODO_LISTS_SUCCESS:
            return{
                ...state,
                todos:payload,
                isLoading:false,
                isError:false
            }
        case types.GET_TODO_LISTS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true
            }

        case types.ADD_TODO_LISTS_REQUEST:
             return{
                ...state,
                isLoading:true,
                isError:false
                 
             }

        case types.ADD_TODO_LISTS_SUCCESS:
            let newTodos = [...state.todos,payload]
            return{
                ...state,
                todos:newTodos,
                isLoading:false,
                isError:false,
                

            }

        case types.ADD_TODO_LISTS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true

            }

        case types.TOGGLE_TODO_REQUEST:
                return{
                   ...state,
                   isLoading:true,
                   isError:false
                    
                }
   
        case types.TOGGLE_TODO_SUCCESS:
               let newToggledTodos = state.todos.map(item =>item.id ===payload.id? payload: item)
               return{
                   ...state,
                   todos:newToggledTodos,
                   isLoading:false,
                   isError:false,
                   
   
               }
   
        case types.TOGGLE_TODO_FAILURE:
               return{
                   ...state,
                   isLoading:false,
                   isError:true
   
               }

         case types.DELETE_TODO_REQUEST:
                return{
                   ...state,
                   isLoading:true,
                   isError:false
                    
                }
   
        case types.DELETE_TODO_SUCCESS:
              const lefttodos = state.todos.filter(item => item.id !== payload)
               return{
                   ...state,
                   todos:lefttodos,
                   isLoading:false,
                   isError:false,
                   
   
               }
   
        case types.DELETE_TODO_FAILURE:
               return{
                   ...state,
                   isLoading:false,
                   isError:true
   
               }
        
        case types.EDIT_TODO_REQUEST:
                return{
                   ...state,
                   isLoading:true,
                   isError:false
                    
                }
   
        case types.EDIT_TODO_SUCCESS:
              const editedtodo = state.todos.map(item =>item.id ===payload.id? payload: item)
               return{
                   ...state,
                   todos:editedtodo,
                   isLoading:false,
                   isError:false,
                   
   
               }
   
        case types.EDIT_TODO_FAILURE:
               return{
                   ...state,
                   isLoading:false,
                   isError:true
   
               }

        case types.RESET_TODO_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }

        case types.RESET_TODO_SUCCESS:
            let new_Todos = [];
            return{
                todos:new_Todos,
                isLoading:false,
                isError:false,
            }
        
        case types.RESET_TODO_FAILURE:
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}

export {reducer};