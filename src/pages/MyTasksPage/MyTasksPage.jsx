import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/instances";
import WithLoader from "../../hoc/WithLoader";
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
        const copyTasks = { ...tasks }
        Object.keys(copyTasks).forEach(key => {
            if (copyTasks[key].headings) {
                newHeadings = [...newHeadings, ...copyTasks[key].headings]
            }
        })
        dispatch(addHeadings(Array.from(new Set(newHeadings))))

    }, [tasks, dispatch])

    // useEffect(() => {
    //     const check = false
    //     const copyTasks = { ...tasks }
    //     Object.keys(copyTasks).forEach(key => {
    //         if(copyTasks[key])
    //         // let a = Date.parse(new Date())
    //         // if (a > Date.parse(copyTasks[key].dateDeadline)) {
    //         //     const copyTask = { ...copyTasks[key] }
    //         //     copyTask.status = 'overdue'
    //         //     dispatch(changeTask({ id: key, task: copyTask }))
    //         // }
    //     })
    // }, [tasks, dispatch])

    const editBtn = (key, e) => {
        e.stopPropagation()
        navigate(`/edit-task/${key}`)
    }

    const deleteBtn = (key, e) => {
        e.stopPropagation()
        dispatch(deleteTask({ id: key }))
    }

    const somefn = () => {
        console.log('a')
    }

    const changeStatusBtn = (id, task, e) => {
        e.stopPropagation()
        const copyTask = { ...task }
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

export default WithLoader(MyTasksPage, instance);
