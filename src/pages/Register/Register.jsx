import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'))
    }
    return (
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
    );
};

export default Register;