import { useState } from 'react'

const SingleQuestion = ({ id, title, info }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setToggle(!toggle)}>
          {toggle ? '-' : '+'}
        </button>
      </header>
      {toggle && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
