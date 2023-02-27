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
                        description={tasks[task].description}
                        headings={tasks[task].headings}
                        onClickTask={() => onClickTask(task)}
                        changeStatusBtn={() => changeStatusBtn(task, tasks[task])}
                        deleteBtn={() => deleteBtn(task)}
                        editBtn={() => editBtn(task)}
                    />
                } else {
                    if (checkHeadhings(tasks[task].headings)) {
                        return <TaskListItem
                            key={task}
                            status={tasks[task].status}
                            title={tasks[task].title}
                            description={tasks[task].description}
                            headings={tasks[task].headings}
                            onClickTask={() => onClickTask(task)}
                            changeStatusBtn={() => changeStatusBtn(task, tasks[task])}
                            deleteBtn={() => deleteBtn(task)}
                            editBtn={() => editBtn(task)}
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
