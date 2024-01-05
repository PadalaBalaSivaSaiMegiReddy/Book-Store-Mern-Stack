import React from 'react'
import { useEffect,useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import{MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'


const Home = () => {
  const [books,setBooks] = useState([])
  const [loading,setLoading] = useState(true)
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
				<table className="w-full border-separate border-spacing-2">
					<thead>
						<tr>
							<th className="border border-slate-600 rounded-md">No</th>
							<th className="border border-slate-600 rounded-md">Title</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Author
							</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Publish Year
							</th>
							<th className="border border-slate-600 rounded-md">Operations</th>
						</tr>
					</thead>
					<tbody>
						{books.map((book, index) => (
							<tr key={book._id} className=" h-8">
								<td className="border border-slate-700 rounded-md text-center">
									{index+1}
								</td>
                <td className="border border-slate-700 rounded-md text-center">
									{book.title}
								</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
									{book.author}
								</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
									{book.publishYear}
								</td>

                <td className="border border-slate-700 rounded-md text-center">
									<div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-green-800 text-2xl mx-2" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-yellow-800 text-2xl mx-2" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-red-800 text-2xl mx-2" />
                    </Link>
                  </div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default Home