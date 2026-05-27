function TaskTable({
  tasks,
  handleDelete,
  setEditingTask,
}) {

  const getStatusBadge = (status) => {

    switch (status) {

      case "todo":
        return "badge bg-secondary";

      case "in_progress":
        return "badge bg-warning";

      case "done":
        return "badge bg-success";

      default:
        return "badge bg-info";
    }
  };

  const getPriorityBadge = (priority) => {

    switch (priority) {

      case "low":
        return "badge bg-success";

      case "medium":
        return "badge bg-warning";

      case "high":
        return "badge bg-danger";

      default:
        return "badge bg-info";
    }
  };

  return (

    <div className="card">

      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-3">

          <h4 className="card-title mb-0">
            Tasks List
          </h4>

          <span className="badge bg-primary">
            {tasks.length} Tasks
          </span>

        </div>

        <div className="table-responsive">

          <table className="table table-striped align-middle">

            <thead>

              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {tasks.length === 0 ? (

                <tr>
                  <td colSpan="6" className="text-center">
                    No tasks found
                  </td>
                </tr>

              ) : (

                tasks.map((task) => (

                  <tr key={task.id}>

                    <td>
                      <strong>{task.title}</strong>
                    </td>

                    <td>
                      {task.description || "N/A"}
                    </td>

                    <td>

                      <span className={getStatusBadge(task.status)}>

                        {task.status}

                      </span>

                    </td>

                    <td>

                      <span className={getPriorityBadge(task.priority)}>

                        {task.priority}

                      </span>

                    </td>

                    <td>
                      {task.due_date || "N/A"}
                    </td>

                    <td>

                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => setEditingTask(task)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(task.id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default TaskTable;