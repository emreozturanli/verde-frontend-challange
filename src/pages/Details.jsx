import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';

const Details = () => {
  const { posts } = useSelector(state => state.posts)
  const { postId } = useParams()

  const post = posts.find(item => item.id === +postId)

  return (
    <section className='container bg-white mt-4 mx-auto p-5 shadow-md flex gap-6'>
      <aside>
        <button className='bg-sky-100 hover:bg-sky-200 rounded-full p-2'>
          <BsArrowLeft size={30} className='' />
        </button>
      </aside>
      <article className='md:w-9/12 xl:w-1/2 w-full flex flex-col gap-4'>
        <div className="detail-top flex justify-between">
          <h3 className='font-bold text-2xl'>Posts</h3>
          <button className='rounded-lg bg-sky-500 text-white px-3 py-2 hover:bg-sky-700'>+ New Post</button>
        </div>
        <h4 className='font-bold text-lg'>Title</h4>
        <div
          className='bg-sky-50 rounded p-4 shadow-md'
        >
          <p className='font-bold text-xl'>{post?.title}</p>
        </div>
        <h4 className='font-bold text-lg'>Detail</h4>
        <div
          className='bg-sky-50 rounded p-4 shadow-md'
        >
          <p className=' text-xl'>{post?.body}</p>
        </div>

        <div className="btn-container flex justify-end gap-10 mt-8">
          <button className='rounded-lg bg-red-600 text-white px-3 py-1 hover:bg-red-700'>
            Delete
          </button>
          <button className='rounded-lg bg-sky-500 text-white px-3 py-1 hover:bg-sky-700'>Update</button>
        </div>
      </article>
    </section>
  )
}

export default Details