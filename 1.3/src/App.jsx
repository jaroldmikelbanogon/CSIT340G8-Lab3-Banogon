const Header = (props) => {
  console.log(props)
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
    <div>    
      <p>{props.name} - {props.section}</p>
    </div>
  )
}

const App = () => {
  const course = 'Front-end Web App development'
  const part1 = {
    name: 'Introduction to ReactJS',
    exercises: 10
  }
  const part2 = {
    name: 'Anatomy of ReactJS',
    exercises: 7
  }
  const part3 = {
    name: 'JSX, Components and Props',
    exercises: 14
  }
  const footer = {
    name: 'Jarold Mikel Banogon',
    section: 'CSIT340 - G8'
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Footer name={footer.name} section={footer.section} />
    </div>
  )
}

export default App