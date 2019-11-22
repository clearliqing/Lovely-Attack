// const initState = [{
//     id:1,
//     title:"pingguo",
//     price:999,
//     amount:10
// },{
//     id:2,
//     title:"huawei",
//     price:969,
//     amount:120
// }]

  

// export default (state = initState, action) => {
//     switch(action.type) {
//         default:
//            return state
//     }
        
    
// }
import actionTypes from "../actions/actionTypes"
const initState = {
    list: [{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },{
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla" 
    }],
    errMsg:"",
    isLoading:"false"
}
export default (state=initState, action) => {
    switch(action.type) {
        case actionTypes.START_FETCH_BLOG_LIST:
            return {
                ...state,
                isLoading:true
            }
        case actionTypes.FETCH_BLOG_LIST_SUCCESS:
            return {
                ...state,
                list:action.payload.list,
                isLoading: false,
                errMsg: ''

                
            }
        case  actionTypes.FETCH_BLOG_LIST_FAILED:
            return {
                ...state,
                isLoading: false,
                errMsg:"有些不正常…"
            }
        default:
            return state
            
    }
}

