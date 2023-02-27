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

export const getHeadings = createAsyncThunk(`${namespace}/getHeadings`, async () => {
    try {
        return await apiTasks.getHeadhings()
    } catch (err) {
        console.log(err)
    }
})

export const addHeadings = createAsyncThunk(`${namespace}/addHeadings`, async (headings) => {
    try {
        await apiTasks.addHeadhings(headings)
        return headings
    } catch (err) {
        console.log(err)
    }
})

export const tasksSlice = createSlice({
    name: namespace,
    initialState: {
        tasks: {},
        headhings: []
    },
    extraReducers: builder => {
        builder
            .addCase(getTasks.fulfilled, (state, action) => {
                state.tasks = action.payload || {}
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks[action.payload.key] = action.payload.data 
            })
            .addCase(getHeadings.fulfilled, (state, action) => {
                state.headhings = action.payload || []
            })
            .addCase(addHeadings.fulfilled, (state, action) => {
                state.headhings = action.payload
            })
    }
})