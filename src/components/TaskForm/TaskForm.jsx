import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import './TaskForm.css'
import { useNavigate } from "react-router-dom";

const TaskForm = ({ onSubmitForm, values, onChangeInp, checkFields, addHeadingBtn, deleteHeadingBtn }) => {
    const navigate = useNavigate()

    return (
        <>
            <form className="TaskForm" onSubmit={onSubmitForm}>
                <p className="text__TaskForm">Заголовок:</p>
                <Input
                    nameInp='title'
                    value={values.title || ''}
                    placeholder='Введите заголовок'
                    onChange={(e) => onChangeInp(e)}
                />
                <p className="text__TaskForm">Описание задачи:</p>
                <Input
                    nameInp='description'
                    value={values.description || ''}
                    placeholder='Введите описание задачи'
                    onChange={(e) => onChangeInp(e)}
                />
                <div>
                    {
                        values.headings.map(heading => {
                            return <p key={heading}>{heading} <Button type="button" onClick={() => deleteHeadingBtn(heading)}>Х</Button></p>
                        })
                    }
                </div>
                <Input
                    nameInp='heading'
                    value={values.heading || ''}
                    placeholder='Добавить заголовок к задаче'
                    onChange={(e) => onChangeInp(e)}
                />
                <Button type="button" onClick={addHeadingBtn}>Добавить заголовок</Button>
                <div className="buttons__TaskForm">
                    <Button>Подтвердить</Button>
                </div>
            </form>
            <div className="buttons__TaskForm">
                <Button onClick={() => { navigate('/') }}>Вернуться к задачам</Button>
            </div>
            {checkFields ? <p className="warning">Заполните поля</p> : null}
        </>
    )
}

export default TaskForm