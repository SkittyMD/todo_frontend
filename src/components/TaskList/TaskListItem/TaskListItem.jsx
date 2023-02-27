import Button from "../../UI/Button/Button";
import './TaskListItem.css'

const TaskListItem = ({ status, onClickTask, changeStatusBtn, deleteBtn, editBtn, title, description, headings, dateCreate, dateDeadline }) => {
    return (
        <div className={status} onClick={onClickTask}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Дата создания/обновления: {(new Date(dateCreate)).toLocaleString()}</p>
            {!!dateDeadline ?
            <p>Деадлайн до: {(new Date(dateDeadline)).toLocaleString()}</p>
            : null}
            <div>
                <Button onClick={deleteBtn}>Удалить</Button>
                <Button onClick={editBtn}>Редактировать</Button>
                {
                    status === 'overdue'
                        ?
                        null
                        :
                        <Button
                            onClick={changeStatusBtn}
                        >Отметить как {status === 'complited' ? 'невыполненое' : 'выполненное'}</Button>
                }
            </div>
            <div>
                {headings === undefined ? null : headings.map(heading => {
                    return <p
                        key={heading}
                        className="heading_task"
                    >
                        {heading}
                    </p>
                })}
            </div>
        </div>
    )
};

export default TaskListItem
