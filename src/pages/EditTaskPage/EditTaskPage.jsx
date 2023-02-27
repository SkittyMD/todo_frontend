import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../../components/TaskForm/TaskForm";
import { changeTask, getTasks } from "../../store/tasks.slice";

const EditTaskPage = () => {
    const [inputsValues, setInputsValues] = useState({ title: '', description: '', heading: '', headings: [], dateDeadline: '' })
    const [checkFields, setCheckFields] = useState(false)

    const { tasks } = useSelector(state => state.tasks, shallowEqual)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const param = useParams()

    useEffect(() => {
        const task = { ...tasks[param.id] }
        const newStateInputs = { title: task.title, description: task.description, heading: '', headings: task.headings || [], dateDeadline: task.dateDeadline || '' }
        setInputsValues(newStateInputs)
        if (task.title === undefined) {
            dispatch(getTasks())
        }
    }, [param, tasks, dispatch])

    const onChangeInp = (e) => {
        const copyState = { ...inputsValues }
        copyState[e.target.name] = e.target.value
        setInputsValues(copyState)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (inputsValues.dateDeadline.trim() === '') {
            console.log(inputsValues.dateDeadline)
            const newTask = { title: inputsValues.title.trim(), description: inputsValues.description.trim(), headings: inputsValues.headings, status: 'uncomplited', dateCreate: new Date().toISOString(), dateDeadline: inputsValues.dateDeadline.trim() === '' ? '' : new Date(inputsValues.dateDeadline).toISOString() }
            dispatch(changeTask({ id: param.id, task: newTask }))
            navigate('/')
        } else {
            try {
                if (Date.parse(new Date()) > Date.parse(new Date(inputsValues.dateDeadline))) {
                    setCheckFields(true)
                } else {
                    const newTask = { title: inputsValues.title.trim(), description: inputsValues.description.trim(), headings: inputsValues.headings, status: 'uncomplited', dateCreate: new Date().toISOString(), dateDeadline: new Date(inputsValues.dateDeadline).toISOString() || '' }
                    dispatch(changeTask({ id: param.id, task: newTask }))
                    navigate('/')
                }
            } catch (err) {
                setCheckFields(true)
            }
        }
        // if (inputsValues.title.trim() !== '' && inputsValues.description.trim() !== '') {
        //     try {
        //         if (Date.parse(new Date()) > Date.parse(new Date(inputsValues.dateDeadline))) {
        //             setCheckFields(true)
        //         } else {
        //             const newTask = { title: inputsValues.title.trim(), description: inputsValues.description.trim(), headings: inputsValues.headings, status: 'uncomplited', dateCreate: new Date().toISOString(), dateDeadline: new Date(inputsValues.dateDeadline).toISOString() || '' }
        //             dispatch(changeTask({ id: param.id, task: newTask }))
        //             navigate('/')
        //         }
        //     } catch (err) {
        //         setCheckFields(true)
        //     }
        // } else {
        //     setCheckFields(true)
        // }
    }

    const addHeadingBtn = () => {
        if (inputsValues.heading.trim() !== '' && inputsValues.headings.indexOf(inputsValues.heading.trim()) === -1) {
            const copyHeadnigs = [...inputsValues.headings]
            copyHeadnigs.push(inputsValues.heading.trim().toLowerCase())
            const copyState = { ...inputsValues }
            copyState.heading = ''
            copyState.headings = copyHeadnigs
            setInputsValues(copyState)
        }
    }

    const deleteHeadingBtn = (heading) => {
        const copyHeadnigs = [...inputsValues.headings]
        copyHeadnigs.splice(copyHeadnigs.indexOf(heading), 1)
        const copyState = { ...inputsValues }
        copyState.headings = copyHeadnigs
        setInputsValues(copyState)
    }

    return (
        <div>
            <TaskForm
                values={inputsValues}
                onChangeInp={onChangeInp}
                onSubmitForm={onSubmitForm}
                checkFields={checkFields}
                addHeadingBtn={addHeadingBtn}
                deleteHeadingBtn={deleteHeadingBtn}
            />
        </div>
    )
};

export default EditTaskPage
