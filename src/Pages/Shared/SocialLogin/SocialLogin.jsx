
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {
    const {signInWithGoogle} =useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";


    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email, photoURL: loggedUser.photoURL}  //!manage user info in database
            fetch('http://localhost:5000/users', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            }) 
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })
          
            
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;