import { TodoList } from './components/todoList/todoList'
import { Header } from './components/header/header'

export const App = () => {
  return <div className="wrapper">
      <Header />
      <TodoList />
  </div>
}


