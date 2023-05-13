import "./App.css";

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 22,
      name: "John",
      job: "Developer",
    },
    {
      img: 23,
      name: "Jack",
      job: "Designer",
    },
    {
      img: 24,
      name: "David",
      job: "Boss",
    },
  ];

  return (
    <section>
      <Person person={people[0]} />;
      <Person person={people[1]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex labore molestias incidunt reiciendis blanditiis enim.
      </Person>
      <Person person={people[2]} />;
    </section>
  );
};

const Person = (props) => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="random_user_generator" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
