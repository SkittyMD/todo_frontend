import Button from "../../UI/Button/Button";
import './TaskListItem.scss'

const TaskListItem = ({ status, onClickTask, changeStatusBtn, deleteBtn, editBtn, title, description, headings, dateCreate, dateDeadline }) => {
    return (
        <div className={status + ' TaskListItem'} onClick={onClickTask}>
            <h2 className="TaskListItem_title">{title}</h2>
            <p className="TaskListItem_description">{description}</p>
            <p className="TaskListItem_date">Дата создания/обновления: <span className="TaskListItem_date_span">{(new Date(dateCreate)).toLocaleString()}</span></p>
            {!!dateDeadline ?
                <p className="TaskListItem_date">Деадлайн до: <span className="TaskListItem_date_span">{(new Date(dateDeadline)).toLocaleString()}</span></p>
                : null}
            <div className="TaskListItem_btns_block">
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
            <div className="TaskListItem_headings_block">
                {headings === undefined ? null : headings.map(heading => {
                    return <p
                        key={heading}
                        className="TaskListItem_headings_block_item"
                    >
                        {heading}
                    </p>
                })}
            </div>
        </div>
    )
};

export default TaskListItem
