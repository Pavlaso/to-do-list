import { useState } from 'react'
import { Aside } from '../aside/aside'
import { Content } from './content'

export const TodoList = () => {

    const [index, setIndex] = useState<number | null>(null)

    return <div className="body">
    <div className="container">
      <div className="body__container">
        <Aside setIndex={setIndex} />
        <Content index={index as number} setIndex={setIndex}/>
      </div>
    </div>
  </div>
}