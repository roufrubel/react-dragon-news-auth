import { FaGoogle } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';


const RightSideNav = () => {
    return (
        <>
        <div className="p-4 space-y-2 mb-4">
            <h2 className="text-2xl font-semibold">Login With</h2>
            <button className="btn flex w-full btn-outline rounded-lg"><FaGoogle/> Google</button>
            <button className="btn flex w-full btn-outline rounded-lg"><BsGithub/> GitHub</button>
        </div>

        <div className="p-4 mb-4">
            <h2 className="text-2xl font-semibold mb-2">Find Us On</h2>
            <a className="flex w-full border rounded-t-lg items-center p-4" href=""><FaFacebookF className="mr-2" /> Facebook</a>
            <a className="flex w-full border-x items-center p-4" href=""><FaTwitter className="mr-2" /> Twitter</a>
            <a className="flex w-full border rounded-b-lg items-center p-4" href=""><FaInstagram className="mr-2" /> Instagram</a>
        </div>

        <div className="p-4 space-y-4 bg-slate-100">
            <h2 className="text-2xl font-semibold mb-2
            ">Q-Zone</h2>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
        </div>
        </>
    );
};

export default RightSideNav;