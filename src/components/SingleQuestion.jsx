const SingleQuestion = ({ id, title, info }) => {
  return (
    <article key={id}>
      <h2>{title}</h2>
      <p>{info}</p>
      <button>+</button>
    </article>
  )
}

export default SingleQuestion
