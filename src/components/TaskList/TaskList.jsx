import TaskListItem from "./TaskListItem/TaskListItem";

const TaskList = ({ tasks, onClickTask, changeStatusBtn, deleteBtn, editBtn }) => {
    return (
        <div>
            {tasks.map(task => {
                return <TaskListItem
                    key={task.id}
                    status={task.status}
                    title={task.title}
                    description={task.description}
                    headings={task.headings}
                    onClickTask={onClickTask}
                    changeStatusBtn={changeStatusBtn}
                    deleteBtn={deleteBtn}
                    editBtn={editBtn}
                />
            })}
        </div>
    )
};

export default TaskList
