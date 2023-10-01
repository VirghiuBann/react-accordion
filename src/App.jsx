import { useState } from 'react'

import data from './data.js'
import SingleQuestion from './components/SingleQuestion.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [toggleId, setToggleId] = useState(null)

  const handleToggle = (activeId) => {
    setToggleId(activeId)
  }

  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        <section>
          {questions.map((question) => {
            return (
              <SingleQuestion
                {...question}
                key={question.id}
                handleToggle={handleToggle}
                toggleId={toggleId}
              />
            )
          })}
        </section>
      </section>
    </main>
  )
}
export default App
