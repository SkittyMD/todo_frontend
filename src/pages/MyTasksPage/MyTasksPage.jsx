import TaskList from "../../components/TaskList/TaskList";
import Headhingsbar from "../../components/UI/Headhingsbar/Headhingsbar";

const MyTasksPage = () => {
    const a = [{
        id: 2,
        title: 'Купить хлеб',
        description: 'Пойти в магнит и купить хлеб',
        status: 'uncomplited',
        headings: ['дом', 'покупки']

    },
    {
        id: 4,
        title: 'Пойти на тренировку',
        description: 'Отжаться 30 раз',
        status: 'uncomplited',
        headings: ['спорт']
    }]
    const somefn = () => {
        console.log('a')
    }
    return (
        <div>
            <Headhingsbar headhings={['дом', 'работа', 'спорт']} />
            <TaskList
                tasks={a}
                onClickTask={somefn}
                deleteBtn={somefn}
                editBtn={somefn}
            />
        </div>
    )
};

export default MyTasksPage
