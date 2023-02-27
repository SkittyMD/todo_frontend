import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskList from "../../components/TaskList/TaskList";
import Headingsbar from "../../components/UI/Headingsbar/Headingsbar";
import { getHeadings, getTasks } from "../../store/tasks.slice";

const MyTasksPage = () => {
    const { tasks, headhings } = useSelector(state => state.tasks, shallowEqual)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getTasks())
        dispatch(getHeadings())
    }, [dispatch])

    const editBtn = (key) => {
        navigate(`/edit-task/${key}`)
    }

    const somefn = () => {
        console.log('a')
    }
    return (
        <div>
            <Headingsbar headhings={headhings} />
            <TaskList
                tasks={tasks}
                onClickTask={somefn}
                deleteBtn={somefn}
                editBtn={editBtn}
            />
        </div>
    )
};

export default MyTasksPage
