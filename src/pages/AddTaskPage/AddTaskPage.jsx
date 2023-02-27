import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskForm from "../../components/TaskForm/TaskForm";
import { addTask } from "../../store/tasks.slice";

const AddTaskPage = () => {
    const [inputsValues, setInputsValues] = useState({ title: '', description: '', heading: '', headings: [] })
    const [checkFields, setCheckFields] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeInp = (e) => {
        const copyState = { ...inputsValues }
        copyState[e.target.name] = e.target.value
        setInputsValues(copyState)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        if (inputsValues.title.trim() !== '' && inputsValues.description.trim() !== '') {
            const newTask = { title: inputsValues.title.trim(), description: inputsValues.description.trim(), headings: inputsValues.headings, status: 'uncomplited' }
            dispatch(addTask(newTask))
            navigate('/')
        } else {
            setCheckFields(true)
        }
    }

    const addHeadingBtn = () => {
        if (inputsValues.heading.trim() !== '' && inputsValues.headings.indexOf(inputsValues.heading.trim()) === -1) {
            const copyState = { ...inputsValues }
            copyState.headings.push(inputsValues.heading.trim().toLowerCase())
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

export default AddTaskPage
