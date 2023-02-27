import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apiTasks } from "../api/apiTasks"

const namespace = 'tasks'

export const getTasks = createAsyncThunk(`${namespace}/getTasks`, async () => {
    try {
        return await apiTasks.getTasks()
    } catch (err) {
        console.log(err)
    }
})

export const addTask = createAsyncThunk(`${namespace}/addTask`, async (task) => {
    try {
        const response = await apiTasks.addTask(task)
        return { key: response.name, data: task }
    } catch (err) {
        console.log(err)
    }
})

export const changeTask = createAsyncThunk(`${namespace}/changeTask`, async (action) => {
    try {
        await apiTasks.changeTask(action.id, action.task)
        return action
    } catch (err) {
        console.log(err)
    }
})

export const deleteTask = createAsyncThunk(`${namespace}/deleteTask`, async (action) => {
    try {
        console.log(action.id)
        await apiTasks.deleteTask(action.id)
        return action.id
    } catch (err) {
        console.log(err)
    }
})

export const tasksSlice = createSlice({
    name: namespace,
    initialState: {
        tasks: {},
        headings: []
    },
    reducers: {
        addHeadings(state, action) {
            try {
                state.headings = action.payload
            } catch (err) {
                console.log(err)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                state.tasks = action.payload || {}
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks[action.payload.key] = action.payload.data
            })
            .addCase(changeTask.fulfilled, (state, action) => {
                state.tasks[action.payload.id] = action.payload.task
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                delete state.tasks[action.payload]
            })
    }
})

export const {
    addHeadings
} = tasksSlice.actions