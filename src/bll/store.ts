import {combineReducers, legacy_createStore as createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {appReducer} from "./app-reducer";



export const rootReducer = combineReducers({
    app: appReducer
})
export const store = createStore(rootReducer)
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector


export type AppStateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type RootReducerType = any






//@ts-ignore для проверки состояния через консоль
window.store = store;