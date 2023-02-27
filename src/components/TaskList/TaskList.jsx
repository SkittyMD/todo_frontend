import TaskListItem from "./TaskListItem/TaskListItem";

const TaskList = ({ tasks, onClickTask, changeStatusBtn, deleteBtn, editBtn }) => {
    return (
        <div>
            {tasks ? Object.keys(tasks).map(task => {
                return <TaskListItem
                    key={task}
                    status={tasks[task].status}
                    title={tasks[task].title}
                    description={tasks[task].description}
                    headings={tasks[task].headings}
                    onClickTask={() => onClickTask(task)}
                    changeStatusBtn={changeStatusBtn}
                    deleteBtn={deleteBtn}
                    editBtn={() => editBtn(task)}
                /> 
            })
            : null}
        </div>
    )
};

export default TaskList
