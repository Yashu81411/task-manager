import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import TaskTable from "./components/TaskTable";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {

    const keyword = search.toLowerCase();

    const matchesSearch =
      task.title.toLowerCase().includes(keyword) ||
      task.description?.toLowerCase().includes(keyword);

    const matchesStatus =
      statusFilter === "" ||
      task.status === statusFilter;

    const matchesPriority =
      priorityFilter === "" ||
      task.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });


  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (error) {

      console.error(error);

      alert("Failed to delete task");
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");

      setTasks(response.data.data);
    } catch (err) {
      setError("Failed to fetch tasks");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (

    <>

      <Navbar
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />


      <div style={{ padding: "20px" }}>

        <TaskForm fetchTasks={fetchTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask} />

        <TaskTable
          tasks={filteredTasks}
          handleDelete={handleDelete}
          setEditingTask={setEditingTask}
        />
      </div>
    </>
  );
}

export default App;