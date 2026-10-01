const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

const Footer = (props) => {
  return ( 
      <p>
        {props.name} - {props.section}
      </p>
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
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Footer name={name} section={section} />
    </div>
  )
}

export default App