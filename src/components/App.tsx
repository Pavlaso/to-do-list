import { TodoList } from './todoList/todoList'
import { Header } from './header/header'

export const App = () => {
  return <div className="wrapper">
      <Header />
      <TodoList />
  </div>
}


