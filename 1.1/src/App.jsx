const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Footer = (props) => {
  return (
    <div>
      <p>{props.name} - {props.section}</p>
    </div>
  )
}

const App = () => {
  const course = 'Front-end Web App development'
  const part1 = 'Introduction to ReactJS'
  const exercises1 = 10
  const part2 = 'Anatomy of ReactJS'
  const exercises2 = 7
  const part3 = 'JSX, Components and Props'
  const exercises3 = 14
  const name = 'Jarold Mikel Banogon'
  const section = 'CSIT340 - G8'

  return (
    <div>
      <Header course={course} />
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      <Footer name={name} section={section} />
    </div>
  )
}

export default App