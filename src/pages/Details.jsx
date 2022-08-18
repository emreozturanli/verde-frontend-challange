import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { changeEdit, deletePost, removeDeleteText, updatePost } from '../features/post/postSlice';
import spinner from "../assets/spinner.gif"
import { useEffect, useState } from 'react';
import Comments from '../components/Comments';

const Details = () => {
  const { postId } = useParams()
  const { posts, deleteText, loading, isEdit, updatedPost, showUpdated } = useSelector(state => state.posts)
  const [comments,setComments] = useState([])
  
  const post = posts.find(item => item.id === +postId)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getComments = async () =>{
      const url = `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      const response = await fetch(url);
      const data = await response.json()
      setComments(data)
  }


  const [updateText, setUpdateText] = useState({
    title: post?.title,
    body: post?.body
  })

  const handleDelete = () => {
    dispatch(deletePost({ id: post.id }))
  }

  const handleUpdate = () => {
    dispatch(updatePost({
      id: post.id,
      title: updateText.title,
      body: updateText.body
    }))
    dispatch(changeEdit(false))
  }

  useEffect(() => {
    if (!post) {
      navigate('/')
    }
    else{
      getComments()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    setUpdateText({
      ...updateText,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    <section className='container bg-white mt-4 mx-auto p-5 shadow-md flex gap-6'>
      <aside>
        <button
          className='bg-sky-100 hover:bg-sky-200 rounded-full p-2'
          onClick={() => navigate('/')}
        >
          <BsArrowLeft size={30} className='' />
        </button>
      </aside>
      <article className='md:w-9/12 xl:w-1/2 w-full flex flex-col gap-4'>
        <div className="detail-top flex justify-between">
          <h3 className='font-bold text-2xl'>Posts</h3>
          <button
            className='rounded-lg bg-sky-500 text-white px-3 py-2 hover:bg-sky-700'
            onClick={() => navigate('/newpost')}
          >
            + New Post
          </button>
        </div>
        <h4 className='font-bold text-lg'>Title</h4>
        <div
          className='bg-sky-50 rounded p-4 shadow-md cursor-pointer'
          onClick={() => dispatch(changeEdit(true))}
        >
          {
            !isEdit
              ?
              <p className='font-bold text-xl'>{post?.title}</p>
              :
              <textarea
                className=' text-xl w-full bg-sky-50'
                cols="30"
                rows="3"
                value={updateText.title}
                name='title'
                onChange={handleChange}></textarea>

          }
        </div>
        <h4 className='font-bold text-lg'>Detail</h4>
        <div
          className='bg-sky-50 rounded p-4 shadow-md cursor-pointer'
          onClick={() => dispatch(changeEdit(true))}
        >
          {
            !isEdit
              ?
              <p className=' text-xl'>{post?.body}</p>
              :
              <textarea
                className=' text-xl w-full bg-sky-50'
                cols="30"
                rows="5"
                value={updateText.body}
                name='body'
                onChange={handleChange}></textarea>

          }
        </div>

        <div className="btn-container flex justify-end gap-10 mt-8">
          <div className='bg-green-700 rounded-md  text-white flex items-center'>
            {
              loading
                ?
                <img className="block m-auto w-6 h-6" src={spinner} alt="loading-spinner" />
                :
                deleteText && <p className='mx-3 flex gap-2'>
                  {deleteText}
                  <RiCloseFill
                    className='text-white cursor-pointer'
                    size={25}
                    onClick={() => dispatch(removeDeleteText())}
                  /></p>
            }
          </div>
          <button
            className='rounded-lg bg-red-600 text-white px-3 py-1 hover:bg-red-700 flex items-center gap-2'
            onClick={handleDelete}
          >
            <RiDeleteBinLine />
            Delete
          </button>
          <button className='rounded-lg bg-sky-500 text-white px-3 py-1 hover:bg-sky-700 flex items-center gap-2'
            onClick={handleUpdate}
          >
            <MdOutlineModeEditOutline />
            Update</button>
        </div>
        {
          showUpdated &&
          <div className='m-auto mt-3 w-full'>
            {
              loading
                ?
                <img className='block m-auto' src={spinner} alt="loading-spinner" />
                :
                <div
                  className='bg-sky-100 p-4 rounded shadow-md'

                >
                  <h3 className='font-bold pb-4'>{updatedPost?.title}</h3>
                  <p>{updatedPost?.body}</p>
                </div>

            }
          </div>
        }
      </article>
    </section>
    <section className='container bg-white mx-auto p-5 shadow-md'>
      <h2 className='md:w-9/12 xl:w-1/2  mt-3 ml-16 font-bold'>Comments</h2>
        {
          comments?.map((comment,index)=><Comments key={index} {...comment}/>)
        }
    </section>
    </>
  )
}

export default Details