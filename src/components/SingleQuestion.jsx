const SingleQuestion = ({ id, title, info, toggleId, handleToggle }) => {
  const isActive = id === toggleId

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          onClick={() => handleToggle(isActive ? null : id)}
        >
          {isActive ? '-' : '+'}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
