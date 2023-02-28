import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import './TaskForm.scss'
import { useNavigate } from "react-router-dom";

const TaskForm = ({ onSubmitForm, values, onChangeInp, checkFields, addHeadingBtn, deleteHeadingBtn }) => {
    const navigate = useNavigate()

    return (
        <>
            <form className="TaskForm" onSubmit={onSubmitForm}>
                <p className="text">Заголовок</p>
                <Input
                    nameInp='title'
                    value={values.title || ''}
                    placeholder='Введите заголовок'
                    onChange={(e) => onChangeInp(e)}
                />
                <p className="text">Описание задачи</p>
                <Input
                    nameInp='description'
                    value={values.description || ''}
                    placeholder='Введите описание задачи'
                    onChange={(e) => onChangeInp(e)}
                />
                <div className="TaskForm_headings_block">
                    {
                        values.headings.map(heading => {
                            return <p className="TaskForm_headings_block_item" key={heading}>{heading} <Button closeX type="button" onClick={() => deleteHeadingBtn(heading)}>Х</Button></p>
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
                <p className="date__text">Формат даты "2022-02-25T11:40"</p>
                <Input
                    nameInp='dateDeadline'
                    value={values.dateDeadline || ''}
                    placeholder='Добавьте сроки сдачи (не обязательно)'
                    onChange={(e) => onChangeInp(e)}
                />
                <div className="buttons">
                    <Button>Подтвердить</Button>
                </div>
            </form>
            <div className="buttons">
                <Button onClick={() => { navigate('/') }}>Вернуться к задачам</Button>
            </div>
            {checkFields ? <p className="warning">Заполните поля (заполните дату согласно формату, дедлайн будущим числом)</p> : null}
        </>
    )
}

export default TaskForm