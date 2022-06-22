import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../../assets/helpers/renderWithRedux";
import { TaskContent } from "../../../components/todoList/taskContent";
import { taskObjectType } from "../../../redux/reducers/task";

describe("taskContent", () => {
    let task: taskObjectType;
    beforeEach(() => {
        task = {
            text: 'str',
            task: false,
            folderIndex: 0,
            isWorking: false
        }
    })
    it('Task text redered', () => {
        renderWithRedux(<TaskContent setId={jest.fn()} item={task} num={0} taskArray={[task]}/>)
        expect(screen.getByText(/str/i)).toBeInTheDocument()
        expect(screen.getByAltText(/cross/i)).toBeInTheDocument()
    })
    it('setActiveTask works', () => {
        renderWithRedux(<TaskContent setId={jest.fn()} item={task} num={0} taskArray={[task]}/>)
        userEvent.click(screen.getByRole('checkbox'))
        expect(screen.getByRole('checkbox')).toBeChecked()
    })
    it('deleteTaskFunc works', () => {
        renderWithRedux(<TaskContent setId={jest.fn()} item={task} num={0} taskArray={[task]}/>)
        const cross = screen.getByAltText(/cross/i)

        userEvent.click(cross)
        expect(cross.onclick).toBeTruthy()
    })
    it('taskContent snapshot', () => {
        const taskElem = renderWithRedux(<TaskContent setId={jest.fn()} item={task} num={0} taskArray={[task]}/>)
        expect(taskElem).toMatchSnapshot()
    })
})