import { instance } from "./instances"

class ApiTasks {
    getTasks = async () => {
        try {
            const response = await instance.get('/tasks.json')
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
    addTask = async (task) => {
        try {
            const response = await instance.post('/tasks.json', task)
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
    changeTask = async (id, task) => {
        try {
            await instance.put(`/tasks/${id}.json`, task)
        } catch (err) {
            console.log(err)
        }
    }
    deleteTask = async (id) => {
        try {
            await instance.delete(`/tasks/${id}.json`)
        } catch (err) {
            console.log(err)
        }
    }
}

export const apiTasks = new ApiTasks()