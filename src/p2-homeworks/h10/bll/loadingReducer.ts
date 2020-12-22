type ActionType = ReturnType<typeof loadingAC>

export type LoadingReducerType = {
   loading: boolean
}
export const initState = {
   loading: false
};

export const loadingReducer = (state = initState, action: ActionType): LoadingReducerType => { // fix any
    switch (action.type) {
        case "loading": {
            return {...state, loading:action.loading}
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean) => {
    return {type: "loading", loading} as const
};


