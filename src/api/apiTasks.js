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
    getHeadhings = async () => {
        try {
            const response = await instance.get('/headings.json')
            return response.data
        } catch (err) {
            console.log(err)
        }
    }
    addHeadhings = async (headings) => {
        try {
            await instance.put('/headings.json', headings)
        } catch (err) {
            console.log(err)
        }
    }
}

export const apiTasks = new ApiTasks()