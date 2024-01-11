import { useEffect,useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import{MdOutlineAddBox} from 'react-icons/md'
import BooksCard from '../components/home/BooksCard'
import BooksTable from '../components/home/BooksTable'


const Home = () => {
  const [books,setBooks] = useState([])
  const [loading,setLoading] = useState(true)
  const [view,setView] = useState('table')
  useEffect(()=>{
    axios.get('http://localhost:5555/books').then((response)=>{
      setBooks(response.data.data);
      setLoading(false)
      }
    ).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  },[])
  return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setView("table")}
				>
					Table View
				</button>
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setView("card")}
				>
					Card View
				</button>
			</div>
			<div className="flex justify-between items-center">
				<h1 className="text-3xl my-8"> Books List</h1>
				<Link to="/books/create">
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>
			</div>
			{loading ? (
				<div className="flex justify-center items-center">
					<Spinner />
				</div>
			) : (
				view==="table"? <BooksTable books={books}/>:<BooksCard books={books} />
			)}
		</div>
	);
}

export default Home