import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete=() => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Error in deleting book. Please check console for details");
      });
  };
	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Delete Book</h1>
			{loading && <Spinner />}
			<div className=" flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
				<h3 className="text-xl">Are you sure you want to delete this book?</h3>
				<button
					className="bg-red-600 text-white p-4 m-8 mb-1 w-full"
					onClick={handleDelete}
				>
					Yes, delete it
				</button>
				<button
					className="bg-green-600 text-white p-4 m-8 mb-1 w-full"
					onClick={() => navigate("/")}
				>
					No, go back
				</button>
			</div>
		</div>
	);
};

export default DeleteBook;
