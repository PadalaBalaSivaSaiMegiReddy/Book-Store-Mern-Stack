import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {
	return (
		<div key={book._id} className="bg-gray-100 p-4 rounded-lg shadow-lg m-2">
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">{book.title}</h1>
				<Link to={`/books/details/${book._id}`}>
					<BsInfoCircle className="text-green-800 text-2xl mx-2" />
				</Link>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex gap-x-2">
					<BiUserCircle className="text-2xl text-blue-300" />
					<p className="text-gray-400">{book.author}</p>
				</div>
				<div className="flex gap-x-2">
					<PiBookOpenTextLight className="text-2xl text-blue-300" />
					<p className="text-gray-400">{book.publishYear}</p>
				</div>
			</div>
			<div className="flex justify-between items-center mt-4">
				<Link to={`/books/edit/${book._id}`}>
					<AiOutlineEdit className="text-yellow-800 text-2xl mx-2" />
				</Link>
				<Link to={`/books/delete/${book._id}`}>
					<MdOutlineDelete className="text-red-800 text-2xl mx-2" />
				</Link>
			</div>
		</div>
	);
};

export default BookSingleCard;
