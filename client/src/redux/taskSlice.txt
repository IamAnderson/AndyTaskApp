import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getTasksAsync = createAsyncThunk('tasks/getTasksAsync', async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        let tasks = (response.data)
        return { tasks }
});

// export const addTasksAsync = createAsyncThunk(
// 	'tasks/addTasksAsync',
// 	async (payload) => {
// 		const resp = await fetch('http://localhost:5000/tasks', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({ text: payload.text }),
// 		});

// 		if (resp.ok) {
// 			const task = await resp.json();
// 			return { task };
// 		}
// 	}
// );

export const addTasksAsync = createAsyncThunk('tasks/addTasksAsync', async (payload) => {
    const response = await axios.post('http://localhost:5000/tasks', {text: payload.text});
    const task = response.data
    return { task }
});

// export const toggleCompleteAsync= createAsyncThunk('tasks/completeTasksAsync', async (payload) => {
//     const response = await axios.put(`http://localhost:5000/tasks/completed/${payload.id}`, {completed: payload.completed});
//     const task = (response.data)
//     // return { task }
//     return { id: task.id, completed: task.completed }
// });

export const toggleCompleteAsync = createAsyncThunk(
'tasks/completeTasksAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:5000/tasks/completed/${payload.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: payload.completed }),
		});

		if (resp.ok) {
			const task = await resp.json();
			return { task };
		}
	}
);

export const updateTaskAsync = createAsyncThunk(
    'task/updateTaskAsync',
        async (payload) => {
            const resp = await fetch(`http://localhost:5000/tasks/${payload.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: payload.text }),
            });
    
            if (resp.ok) {
                const task = await resp.json();
                return { task };
            }
        }
    );

// export const deleteTaskAsync = createAsyncThunk("/tasks/deleteTasksAsync", async (payload) => {
//     await axios.delete(`http://localhost:5000/tasks/completed/${payload.id}`)
//     return { id: payload.id }
// })

export const deleteTaskAsync = createAsyncThunk(
	'task/deleteTaskAsync',
	async (payload) => {
		const resp = await fetch(`http://localhost:5000/tasks/${payload.id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: payload.id };
		}
	}
);

// export const getTasksAsync = createAsyncThunk(
// 	'tasks/getTasksAsync',
// 	async () => {
// 		const resp = await fetch('http://localhost:5000/tasks');
// 		if (resp.ok) {
// 			const tasks = await resp.json();
// 			return { tasks };
// 		}
// 	}
// );

const taskSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = ({
                id: Date.now(),
                text: action.payload.text,
                completed: false
            })
            state.push(newTask);
        },

        toggleComplete: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].completed = action.payload.completed;   
        },

        deleteTask: (state, action) => {
            return state.filter((task) => task.id !== action.payload.id);
        }
    },
    extraReducers: {
        [getTasksAsync.pending]: (state, action) => {
		    console.log("fetching..")
		},
        [getTasksAsync.fulfilled]: (state, action) => {
            console.log("Data has been fetched..")
			return action.payload.tasks;
		},
        [addTasksAsync.fulfilled]: (state, action) => {
            state.push(action.payload.task);
        },
        [toggleCompleteAsync.fulfilled]: (state, action) => {
			const index = state.findIndex((task) => task.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
        [updateTaskAsync.fulfilled]: (state, action) => {
            const index = state.findIndex((task) => task.id === action.payload.id);
            state[index].text = state.push(action.payload.task);
        },
        [deleteTaskAsync.fulfilled]: (state, action) => {
            state.filter((task) => task.id !== action.payload.id);
		},
    }
})

export const { addTask, toggleComplete, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;