export const initialState = {
    name: '',


} as InitialStateType

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "APP-REDUCER/ADD-NAME": {
            return {...state, name: action.name}
        }
        default:
            return {...state}
    }
}
export const addNameAC = (name: string) => ({
    type: 'APP-REDUCER/ADD-NAME',
    name
})


export type addNameACType = ReturnType<typeof addNameAC>
export type AppActionType = addNameACType
export type InitialStateType = {
    name: string
    request: {
        addDate: string,
        type: string,
        status: string,
        author:string,
        requestText: string
    }
}