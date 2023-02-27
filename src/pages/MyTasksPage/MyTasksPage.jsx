import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskList from "../../components/TaskList/TaskList";
import Headingsbar from "../../components/UI/Headingsbar/Headingsbar";
import { addHeadings, changeTask, deleteTask, getTasks } from "../../store/tasks.slice";

const MyTasksPage = () => {
    const { tasks, headings } = useSelector(state => state.tasks, shallowEqual)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])
    
    useEffect(() => {
        let newHeadings = []
        const copyTasks = {...tasks}
        Object.keys(copyTasks).forEach(key => {
            if (copyTasks[key].headings){
                newHeadings = [...newHeadings, ...copyTasks[key].headings]
            }
        })
        dispatch(addHeadings(Array.from(new Set(newHeadings))))
    }, [tasks, dispatch])

    const editBtn = (key) => {
        navigate(`/edit-task/${key}`)
    }

    const deleteBtn = (key) => {
        dispatch(deleteTask({id: key}))
    }

    const somefn = () => {
        console.log('a')
    }

    const changeStatusBtn = (id, task) => {
        const copyTask = {...task}
        const newStatus = task.status === 'complited' ? 'uncomplited' : 'complited'
        copyTask.status = newStatus
        dispatch(changeTask({ id: id, task: copyTask }))
    }

    return (
        <div>
            <Headingsbar headhings={headings} />
            <TaskList
                tasks={tasks}
                onClickTask={somefn}
                deleteBtn={deleteBtn}
                editBtn={editBtn}
                changeStatusBtn={changeStatusBtn}
            />
        </div>
    )
};

export default MyTasksPage
