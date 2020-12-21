export type StateType = {
    _id: number
    name: string
    age: number
}
export type SortUpACType = {
    type: "sort"
    payload: "up"
}
export type SortDownACType = {
    type: "sort"
    payload: "down"
}
export type Check18AC = {
    type: "check"
    payload: 18
}
export type SortAgeUp={
    type: "sortAge"
    payload: "age-up"
}
export type SortAgeDown={
    type: "sortAge"
    payload: "age-down"
}
export type ActionType = SortUpACType | SortDownACType | Check18AC | SortAgeUp |SortAgeDown


export const homeWorkReducer = (state: Array<StateType>, action: ActionType): Array<StateType> => {
        switch (action.type) {
            case "sort": {
                if (action.payload === 'up') {
                    return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1
                        }
                        if (a.name < b.name) {
                            return -1
                        }
                        return 0
                    })]
                } else if (action.payload === 'down') {
                    return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return -1
                        }
                        if (a.name < b.name) {
                            return 1
                        }
                        return 0
                    })]
                }
            }

            case "check": {

                return [...state.filter(p => p.age > 18)]
            }
            case "sortAge":{
                if (action.payload==="age-up"){
                    return [...state.sort(function (a,b){
                        return (a.age-b.age)
                    })]
                }
           else if (action.payload==="age-down"){
                return [...state.sort(function(a,b){
                    return(b.age-a.age)
                })]
            }}

            default:
                return state
        }
    }

;

