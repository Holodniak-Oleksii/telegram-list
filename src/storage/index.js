import { configureStore } from '@reduxjs/toolkit';
import channelSlice from './channelSlice'
export default configureStore({
    reducer: {
        channel: channelSlice,
    },
});