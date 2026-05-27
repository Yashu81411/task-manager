import { useEffect, useState } from "react";
import API from "../services/api";

function TaskForm({
    fetchTasks,
    editingTask,
    setEditingTask,
}) {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        due_date: "",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editingTask) {
            setFormData(editingTask);
        }
    }, [editingTask]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            if (editingTask) {
                await API.patch(
                    `/tasks/${editingTask.id}`,
                    formData
                );
            } else {
                await API.post("/tasks", formData);
            }

            alert(
                editingTask
                    ? "Task updated successfully"
                    : "Task created successfully"
            );

            setFormData({
                title: "",
                description: "",
                status: "todo",
                priority: "medium",
                due_date: "",
            });

            fetchTasks();
            setEditingTask(null);

        } catch (error) {
            console.error(error);
            alert("Failed to save task");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "30px auto",
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2
                style={{
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                {editingTask ? "Edit Task" : "Create Task"}
            </h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Title</label>

                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Description</label>

                    <textarea
                        name="description"
                        placeholder="Enter description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Status</label>

                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    >
                        <option value="todo">Todo</option>
                        <option value="in_progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Priority</label>

                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div style={{ marginBottom: "20px" }}>
                    <label>Due Date</label>

                    <input
                        type="date"
                        name="due_date"
                        value={formData.due_date}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "5px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "12px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#0d6efd",
                        color: "#fff",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    {loading
                        ? "Saving..."
                        : editingTask
                            ? "Update Task"
                            : "Create Task"}
                </button>
            </form>
        </div>
    );
}

export default TaskForm;