import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../../components/TaskForm/TaskForm";

const EditTaskPage = () => {
    const [inputsValues, setInputsValues] = useState({ title: '', description: '', heading: '', headings: [] })
    const [checkFields, setCheckFields] = useState(false)

    const { tasks, headhings } = useSelector(state => state.tasks, shallowEqual)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const param = useParams()

    useEffect(() => {
        const task = { ...tasks[param.id] }
        const newStateInputs = { title: task.title, description: task.description, heading: '', headings: headhings }
        setInputsValues(newStateInputs)
        if (task.title = '') {
            console.log('s')
        }
    }, [headhings, param, tasks])

    const onChangeInp = (e) => {
        const copyState = { ...inputsValues }
        copyState[e.target.name] = e.target.value
        setInputsValues(copyState)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (inputsValues.title.trim() !== '' && inputsValues.description.trim() !== '') {
            const newTask = { title: inputsValues.title.trim(), description: inputsValues.description.trim(), headings: inputsValues.headings, status: 'uncomplited' }
            // dispatch(addTask(newTask))
            const uniqueArray = [...headhings, ...inputsValues.headings].filter(function (item, pos) {
                return [...headhings, ...inputsValues.headings].indexOf(item) === pos;
            })
            // dispatch(addHeadings(uniqueArray))
            navigate('/')
        } else {
            setCheckFields(true)
        }
    }

    const addHeadingBtn = () => {
        if (inputsValues.heading.trim() !== '' && inputsValues.headings.indexOf(inputsValues.heading.trim()) === -1) {
            const copyState = { ...inputsValues }
            copyState.headings.push(inputsValues.heading.trim())
            copyState.heading = ''
            setInputsValues(copyState)
        }
    }

    const deleteHeadingBtn = (heading) => {
        const copyState = { ...inputsValues }
        copyState.headings.splice(copyState.headings.indexOf(heading), 1) 
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
