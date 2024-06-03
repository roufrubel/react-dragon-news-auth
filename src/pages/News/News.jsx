import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { IoArrowBackSharp } from "react-icons/io5";


const News = () => {
    
    const {id} = useParams();    
    const news = useLoaderData();
    // console.log(news)

    const newsContent = news.find(singleNews => singleNews._id === id);
    // console.log(newsContent)


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="grid md:col-span-3 mr-4">
                <div className=" p-5">
                <h4 className="py-3 text-xl font-semibold">{newsContent?.title}</h4>
                <img src={newsContent?.image_url} alt="" />
                <p className="mt-2 mb-4">{newsContent?.details}</p>
                <Link to='/'><button className="btn btn-secondary flex text-white font-bold"> <IoArrowBackSharp className="font-bold text-lg" /> All news in this category</button></Link>
                </div>
                
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;