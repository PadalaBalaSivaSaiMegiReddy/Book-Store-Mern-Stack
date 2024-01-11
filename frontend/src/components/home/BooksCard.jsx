import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksCard = ({ books }) => {
    return (
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{books.map((item) => (
					<div
						key={item._id}
						className="bg-gray-100 p-4 rounded-lg shadow-lg m-2"
					>
						<div className="flex justify-between items-center">
							<h1 className="text-2xl font-bold">{item.title}</h1>
							<Link to={`/books/details/${item._id}`}>
								<BsInfoCircle className="text-green-800 text-2xl mx-2" />
							</Link>
						</div>
						<div className="flex justify-between items-center">
							<div className="flex gap-x-2">
								<BiUserCircle className="text-2xl text-blue-300" />
								<p className="text-gray-400">{item.author}</p>
							</div>
							<div className="flex gap-x-2">
								<PiBookOpenTextLight className="text-2xl text-blue-300" />
								<p className="text-gray-400">{item.publishYear}</p>
							</div>
						</div>
						<div className="flex justify-between items-center mt-4">
							<Link to={`/books/edit/${item._id}`}>
								<AiOutlineEdit className="text-yellow-800 text-2xl mx-2" />
							</Link>
							<Link to={`/books/delete/${item._id}`}>
								<MdOutlineDelete className="text-red-800 text-2xl mx-2" />
							</Link>
						</div>
					</div>
				))}
			</div>
		);
}

export default BooksCard;