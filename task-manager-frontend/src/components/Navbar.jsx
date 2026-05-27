function Navbar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

<div
  className="collapse navbar-collapse justify-content-center"
  id="navbarSupportedContent"
>
  <form
    className="d-flex gap-2 w-75 justify-content-center"
    role="search"
    onSubmit={(e) => e.preventDefault()}
  >

    <input
      className="form-control"
      type="search"
      placeholder="Search tasks..."
      aria-label="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      className="form-select"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
    >
      <option value="">All Status</option>
      <option value="todo">Todo</option>
      <option value="in_progress">In Progress</option>
      <option value="done">Done</option>
    </select>

    <select
      className="form-select"
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value)}
    >
      <option value="">All Priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => {
        setSearch("");
        setStatusFilter("");
        setPriorityFilter("");
      }}
    >
      Clear
    </button>

  </form>
</div>
      </div>
    </nav>
  );
}

export default Navbar;