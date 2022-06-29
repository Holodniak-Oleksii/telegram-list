import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosChannel = createAsyncThunk(
    'channels/axiosChannel',
    async function(_, {rejectWithValue}){
        try{ 
            const {data} = await axios.get(process.env.REACT_APP_API_URL)
            return data
        }catch(e){
            return rejectWithValue(e.message);
        }
    }
)
export const axiosAddChannel = createAsyncThunk(
    'channels/axiosAddChannel',
    async function(obj, {rejectWithValue, dispatch}){ 
        try{ 
            const {data} = await axios.post(process.env.REACT_APP_API_URL, obj)
            dispatch(addChannel(data))
        }catch(e){
            return rejectWithValue(e.message);
        }
    }
)
export const axiosRemoveChannel = createAsyncThunk(
    'channels/axiosRemoveChannel',
    async function(id, {rejectWithValue, dispatch}){ 
        try{ 
            await axios.delete(`${process.env.REACT_APP_API_URL}/${id.id}`)
            dispatch(removeChannel(id))
        }catch(e){
            return rejectWithValue(e.message);
        }
    }
)

export const axiosEditChannel = createAsyncThunk(
    'channels/axiosEditChannel',
    async function(data, {rejectWithValue, dispatch}){ 
        try{ 
            await axios.patch(`${process.env.REACT_APP_API_URL}/${data.isEdit.id}`,
            {name: data.form.name, img: data.form.img, 
                description: data.form.description, type: data.form.type})
            dispatch(updateChannel(data))
        }catch(e){
            return rejectWithValue(e.message);
        }
    }
)
export const axiosFavoriteChannel = createAsyncThunk(
    'channels/axiosFavoriteChannel',
    async function (el, {rejectWithValue, dispatch}) {
        try {
            await axios.patch(`${process.env.REACT_APP_API_URL}/${el.id}`,{favorite: !el.favorite})
            dispatch(favoriteChannel(el))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const axiosFilterChannel = createAsyncThunk(
    'channels/axiosFilterChannel',
    async function (data, {rejectWithValue}) {
        try {
            if(data.category === 'all'){ 
                const all = await axios.get(process.env.REACT_APP_API_URL)
                return all.data
            }
            if(data.category === 'random') {
                const all = await axios.get(process.env.REACT_APP_API_URL)
                let random = Math.floor(Math.random() * all.data.length) + 1
                const response = await axios.get(`${process.env.REACT_APP_API_URL}?id=${random}`)
                return response.data
            }
             const response = await axios.get(`${process.env.REACT_APP_API_URL}?type=${data.category}`)
             return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const channelSlice = createSlice({
    name: 'channels',
    initialState: {
        channels: [],
        status: null,
        error: null,
    },
    reducers: {
        addChannel(state, action) {
            state.channels.push(action.payload);
        },
        removeChannel(state, action) {
            state.channels = state.channels.filter((item) => item.id !== action.payload.id);
        },
        updateChannel(state, action) {
            const change = state.channels.find(channel => channel.id === action.payload.isEdit.id);
            state.channels[state.channels.indexOf(change)] = action.payload.form;
        },
        favoriteChannel(state, action) {
            const change = state.channels.find(channel => channel.id === action.payload.id);
            change.favorite = !change.favorite;
        },
    },
    extraReducers: {
        [axiosChannel.pending]: (state) =>{
            state.status = 'loading';
            state.error = null;
        },
        [axiosChannel.fulfilled]: (state, action) =>{
            state.channels = action.payload;
            state.status = 'resolved';
        },
        [axiosChannel.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },

        [axiosFilterChannel.pending]: (state) =>{
            state.status = 'loading';
            state.error = null;
        },
        [axiosFilterChannel.fulfilled]: (state, action) =>{
            state.channels = action.payload;
            state.status = 'resolved';
        },
        [axiosFilterChannel.rejected]: (state, action) =>{
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});

const {addChannel, removeChannel, updateChannel, favoriteChannel} = channelSlice.actions;

export default channelSlice.reducer;