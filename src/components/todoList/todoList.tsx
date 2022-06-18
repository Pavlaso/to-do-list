import { useState } from 'react'
import { Aside } from '../aside/aside'
import { Content } from './content'

export const TodoList = () => {

    const [index, setIndex] = useState<any>(null)

    return <div className="body">
    <div className="container">
      <div className="body__container">
        <Aside setIndex={setIndex} />
        <Content index={index} setIndex={setIndex}/>
      </div>
    </div>
  </div>
}