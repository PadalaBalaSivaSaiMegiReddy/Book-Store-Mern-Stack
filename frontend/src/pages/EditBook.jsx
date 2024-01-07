import { useState,useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const EditBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
  const {id}=useParams()

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`).then((res)=>{
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setLoading(false)
    }).catch((err)=>{
      console.log(err)
      alert('Error in fetching book. Please check console for details')
    })
  },[])
	const handleEditBook = () => {
		const data = {
			title,
			author,
			publishYear,
		};
		setLoading(true);
		axios
			.put(`http://localhost:5555/books/${id}`, data)
			.then(() => {
				setLoading(false);
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				alert("Error in creating book. Please check console for details");
			});
	};
	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Edit Book</h1>
			{loading && <Spinner />}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					id="title"
					className="border-2 border-sky-400 rounded-md p-2 my-2"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label htmlFor="author">Author</label>
				<input
					type="text"
					id="author"
					className="border-2 border-sky-400 rounded-md p-2 my-2"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<label htmlFor="publishYear">Publish Year</label>
				<input
					type="text"
					id="publishYear"
					className="border-2 border-sky-400 rounded-md p-2 my-2"
					value={publishYear}
					onChange={(e) => setPublishYear(e.target.value)}
				/>
				<button
					className="bg-sky-400 text-white rounded-md p-2 my-2"
					onClick={handleEditBook}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default EditBook;
