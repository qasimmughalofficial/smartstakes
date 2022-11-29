import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import BreadcrumbReducer from "./BreadcrumbReducer"

const store = createStore(BreadcrumbReducer, composeWithDevTools(applyMiddleware()))

export default store