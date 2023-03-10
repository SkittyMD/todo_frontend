import { useParams } from "react-router-dom";
import TaskListItem from "./TaskListItem/TaskListItem";

const TaskList = ({ tasks, onClickTask, changeStatusBtn, deleteBtn, editBtn }) => {
    const param = useParams()
    const checkHeadhings = (headings) => {
        if (!!headings) {
            if (headings.indexOf(param.headings) !== -1) {
                return true
            } else {
                return false
            }
        }
    }
    return (
        <div>
            {tasks ? Object.keys(tasks).map(task => {
                checkHeadhings(tasks[task].headings)
                if (!!!param.headings) {
                    return <TaskListItem
                        key={task}
                        status={tasks[task].status}
                        title={tasks[task].title}
                        headings={tasks[task].headings}
                        onClickTask={() => onClickTask(task)}
                        changeStatusBtn={(e) => changeStatusBtn(task, tasks[task], e)}
                        deleteBtn={(e) => deleteBtn(task, e)}
                        editBtn={(e) => editBtn(task, e)}
                        dateCreate={tasks[task].dateCreate}
                        dateDeadline={tasks[task].dateDeadline}
                    />
                } else {
                    if (checkHeadhings(tasks[task].headings)) {
                        return <TaskListItem
                            key={task}
                            status={tasks[task].status}
                            title={tasks[task].title}
                            headings={tasks[task].headings}
                            onClickTask={() => onClickTask(task)}
                            changeStatusBtn={(e) => changeStatusBtn(task, tasks[task], e)}
                            deleteBtn={(e) => deleteBtn(task, e)}
                            editBtn={(e) => editBtn(task, e)}
                            dateCreate={tasks[task].dateCreate}
                            dateDeadline={tasks[task].dateDeadline}
                        />
                    }
                }
                return true
            })
                : null}
        </div>
    )
};

export default TaskList
