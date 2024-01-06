import {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const CreateBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSaveBook=()=>{
    const data={
      title,
      author,
      publishYear
    }
    setLoading(true)
    axios.post('http://localhost:5555/books',data).then(()=>{
      setLoading(false)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
      alert('Error in creating book. Please check console for details')
    }
    )
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading && <Spinner/>}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' className='border-2 border-sky-400 rounded-md p-2 my-2' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor='author'>Author</label>
        <input type='text' id='author' className='border-2 border-sky-400 rounded-md p-2 my-2' value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <label htmlFor='publishYear'>Publish Year</label>
        <input type='text' id='publishYear' className='border-2 border-sky-400 rounded-md p-2 my-2' value={publishYear} onChange={(e)=>setPublishYear(e.target.value)}/>
        <button className='bg-sky-400 text-white rounded-md p-2 my-2' onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBooks