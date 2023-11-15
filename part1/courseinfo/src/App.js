const App = () => {
  const COURSES = {
    title: "Half Stack application development",
    modules: [
      {
        part: "Fundamentals of React",
        exercises: 10,
      },
      {
        part: "Using props to pass data",
        exercises: 7,
      },
      {
        part: "State of a component",
        exercises: 14,
      },
    ],
  };

  const TOTAL_EXERCISES = COURSES.modules
    .map((module) => module.exercises)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const Header = ({ title }) => {
    return <h1>{title}</h1>;
  };

  const Content = ({ content }) => {
    const Part = ({ part }) => {
      return (
        <p>
          {part.part} {part.exercises}
        </p>
      );
    };

    return (
      <>
        {content.map((part) => {
          return (
            <div key={part.part}>
              <Part part={part} />
            </div>
          );
        })}
      </>
    );
  };

  const Total = ({ totalCount }) => {
    return <p>Number of exercises {totalCount}</p>;
  };

  return (
    <div>
      <Header title={COURSES.title}></Header>
      <Content content={COURSES.modules}></Content>
      <Total totalCount={TOTAL_EXERCISES}></Total>
    </div>
  );
};

export default App;
