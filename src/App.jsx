import { useState } from 'react'

import data from './data.js'
import SingleQuestion from './components/SingleQuestion.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <section>
        <h2>Questions</h2>
        <section>
          {questions.map((question) => {
            return <SingleQuestion {...question} key={question.id} />
          })}
        </section>
      </section>
    </main>
  )
}
export default App
