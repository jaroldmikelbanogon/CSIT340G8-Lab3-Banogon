const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
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
  const totalExercises = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      Number of exercises {totalExercises}
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
  const course = {
    name: 'Front-end Web App development',
  
    parts: [
      {
        name: 'Introduction to ReactJS',
        exercises: 10
      },
      {
        name: 'Anatomy of ReactJS',
        exercises: 7
      },
      {
        name: 'JSX, Components and Props',
        exercises: 14
      }
  ]
}
  const footer = {
    name: 'Jarold Mikel Banogon',
    section: 'CSIT340 - G8'
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer name={footer.name} section={footer.section} />
    </div>
  )
}

export default App