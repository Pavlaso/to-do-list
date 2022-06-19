import { render } from "@testing-library/react"
import { FC } from "react"
import { Provider } from "react-redux"
import { createReduxStore, RootState } from "../../redux/store"

export const renderWithRedux = (component: FC, ititialState: RootState) => {
    const store = createReduxStore(ititialState)
    return render(
        //@ts-ignore
        <Provider store={store}>
            {component}
        </Provider>
    )
}