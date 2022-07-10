import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../features/posts/PostsSlice";

const store = configureStore({
    reducer:{
        posts:PostsSlice
    }
})

export default store;