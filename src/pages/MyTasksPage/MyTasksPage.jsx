import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api/instances";
import WithLoader from "../../hoc/WithLoader";
import TaskList from "../../components/TaskList/TaskList";
import Headingsbar from "../../components/UI/Headingsbar/Headingsbar";
import Modal from "../../components/UI/Modal/Modal"
import { addHeadings, changeTask, deleteTask, getTasks } from "../../store/tasks.slice";

const MyTasksPage = () => {
    const [activeModal, setActiveModal] = useState(false)
    const [dataModal, setDataModal] = useState({title: '', description: ''})

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

    const editBtn = (key, e) => {
        e.stopPropagation()
        navigate(`/edit-task/${key}`)
    }

    const deleteBtn = (key, e) => {
        e.stopPropagation()
        dispatch(deleteTask({ id: key }))
    }

    const changeStatusBtn = (id, task, e) => {
        e.stopPropagation()
        const copyTask = { ...task }
        const newStatus = task.status === 'complited' ? 'uncomplited' : 'complited'
        copyTask.status = newStatus
        dispatch(changeTask({ id: id, task: copyTask }))
    }

    const onClickTask = (id) => {
        setDataModal({title: tasks[id].title, description: tasks[id].description})
        setActiveModal(true)
    }

    return (
        <div>
            <Headingsbar headhings={headings} />
            <TaskList
                tasks={tasks}
                onClickTask={onClickTask}
                deleteBtn={deleteBtn}
                editBtn={editBtn}
                changeStatusBtn={changeStatusBtn}
            />
            <Modal
                active={activeModal}
                setActive={setActiveModal}
            >
                <h2 className="Modal_title">{dataModal.title}</h2>
                <p className="Modal_text">{dataModal.description}</p>
            </Modal>
        </div>
    )
};

export default WithLoader(MyTasksPage, instance);
