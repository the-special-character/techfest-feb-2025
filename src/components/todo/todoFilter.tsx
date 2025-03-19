import TodoFilterButton from "./todoFilterButton";


const TodoFilter = ({ filter }) => {
  return (
    <footer className="w-full flex">
      <TodoFilterButton filter={filter}>All</TodoFilterButton>
      <TodoFilterButton filter={filter} type="pedning">
        Pending
      </TodoFilterButton>
      <TodoFilterButton filter={filter} type="completed">
        Completed
      </TodoFilterButton>
    </footer>
  );
};

export default TodoFilter;
