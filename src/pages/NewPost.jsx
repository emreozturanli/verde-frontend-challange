import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewPost } from '../features/post/postSlice'
import spinner from "../assets/spinner.gif"

const NewPost = () => {
    const [newPost, setNewPost] = useState({
        title: '',
        detail: ''
    })
    const { loading, addedPost, showAddedPost} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setNewPost({
            ...newPost,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewPost({ newPost }))
    }

    return (
        <section className='container bg-white mt-4 mx-auto p-5 shadow-md'>
            <form onSubmit={handleSubmit} className='m-auto md:w-1/2'>
                <label htmlFor='title' className='font-bold text-lg'>Title</label>
                <input
                    type="text"
                    className='bg-sky-50 rounded p-4 shadow-md w-full'
                    name='title'
                    id='title'
                    value={newPost.title}
                    onChange={handleChange}
                />
                <label htmlFor='detail' className='font-bold text-lg'>Detail</label>
                <textarea
                    name="detail"
                    id="detail"
                    cols="30"
                    rows="10"
                    className='bg-sky-50 rounded p-4 shadow-md w-full'
                    value={newPost.detail}
                    onChange={handleChange}
                ></textarea>
                <button
                    className='rounded-lg bg-sky-500 text-white px-3 py-2 hover:bg-sky-700 m-auto block mt-3'
                >
                    + Add New Post
                </button>

            </form>
            {
                showAddedPost &&
                <div className='m-auto mt-3 md:w-1/2'>
                {
                    loading
                        ?
                        <img className='block m-auto' src={spinner} alt="loading-spinner" />
                        :
                        <div
                            className='bg-sky-100 rounded p-4 shadow-md'

                        >
                            <h3 className='font-bold pb-4'>{addedPost?.title}</h3>
                            <p>{addedPost?.body}</p>
                        </div>

                }
            </div>
            }
        </section>
    )
}

export default NewPost