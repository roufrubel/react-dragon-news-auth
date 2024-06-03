import { FaRegBookmark } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";


const NewsCard = ({nw}) => {
    return (
        <div className="mt-8">

            <div className="flex justify-between items-center bg-slate-100 p-4 rounded-t-md">
                <div className="flex justify-between items-center space-x-3">
                    <img className="w-10 h-10 rounded-full" src={nw.author.img} alt="" />
                    <div>
                    <h4>{nw.author.name}</h4>
                    <p>{nw.author.published_date}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center space-x-3">
                <button><FaRegBookmark/></button>
                <button><IoMdShare/></button>
                </div>
            </div>

            <div className="p-5 rounded-b-md border">
                <h4 className="py-3 text-xl font-semibold">{nw.title}</h4>
                <img src={nw.image_url} alt="" />
                <p className="mt-2">{nw.details.slice(0, 200)}...</p>
                <Link to={`/news/${nw._id}`} className="text-[#FF8C47] font-semibold ">Read More</Link>
                <div className="flex justify-between items-center p-4 mt-4 border-t">
                <div className="flex justify-between items-center space-x-3">
                    <span className="flex space-x-1 text-[#FF8C47]"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
                    <span>{nw.rating.number}</span>
                </div>
                <div className="flex justify-between items-center space-x-3">
                <span><IoEyeSharp/></span>
                    <span>{nw.total_view}</span>
                </div>
            </div>

            </div>

        </div>
    );
};

export default NewsCard;