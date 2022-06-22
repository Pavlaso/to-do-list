import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { createReduxStore, RootState } from "../../redux/store"

export const renderWithRedux = (component: any, ititialState: any = {}) => {
    const store = createReduxStore(ititialState)
    return render(
        <Provider store={store}>
            {component}
        </Provider>
    )
}