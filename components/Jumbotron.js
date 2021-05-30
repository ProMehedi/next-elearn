const Jumbotron = ({ title, desc }) => {
  return (
    <div className='jumbotron text-center text-white bg-primary py-5'>
      {title && <h1 className='mb-2'>{title}</h1>}
      {desc && <p>{desc}</p>}
    </div>
  )
}

export default Jumbotron
