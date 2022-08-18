import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getPosts } from "../features/post/postSlice"
import spinner from "../assets/spinner.gif"
import Card from "../components/Card"

const Home = () => {
  const { posts, loading, error } = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    const id = 1
    dispatch(getPosts({ id }))
  }, [])

  return (
    <>
      {
        loading
          ?
          <main className="container bg-white mt-4 mx-auto p-5 shadow-md ">
            <img className="block m-auto" src={spinner} alt="loading-spinner" />
          </main>
          :
          error ? alert('Can not get the data!!!') :
          <main className='container bg-white mt-4 mx-auto p-5 shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5' >
            {
              posts.map((post,index)=><Card key={index} {...post}/>)
            }
           
          </main>
      }
    </>
  )
}

export default Home