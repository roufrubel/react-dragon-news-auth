import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="w-3/5 mx-auto mt-10">
            <div className="bg-slate-100 p-6">
             <h4 className="text-center">Please Register</h4>
        <form onSubmit={handleRegister}>
          <input className="w-full" type="text" name="name" placeholder="your name" id="" /><br /><br/>
          <input className="w-full" type="text" name="photo" placeholder="your photo" id="" /><br /><br/>
          <input className="w-full"  type="email" name="email" placeholder="your email" id="" /><br /><br/>
          <input className="w-full" type="password" name="password" placeholder="your password" id="" /> <br /><br/>
          <input  className="w-full bg-blue-200 font-semibold cursor-pointer" type="submit" value="Submit" />
        </form>
        <p>Already have account? <Link to='/login' className="text-blue-700 font-semibold">Login</Link></p>
      </div>
        </div>
        </>
    );
};

export default Register;