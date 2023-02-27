const TaskListItem = ({ status, onClickTask, changeStatusBtn, deleteBtn, editBtn, title, description, headings }) => {
    return (
        <div className={status} onClick={onClickTask}>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <button onClick={deleteBtn}>Удалить</button>
                <button onClick={editBtn}>Редактировать</button>
                {
                    status === 'overdue'
                        ?
                        null
                        :
                        <button
                            onClick={changeStatusBtn}
                        >Отметить как {status === 'complited' ? 'невыполненое' : 'выполненное'}</button>
                }
            </div>
            <div>
                {headings.map(heading => {
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
