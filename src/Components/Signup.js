import React,{useState,useContext,useEffect} from 'react'
import { Link,useNavigate  } from "react-router-dom";
import ErrorMessage from './ErrorMessage';
import SignupSuccessMessage from './SignupSuccessMessage';
import { UserContext } from './UserContext';
const Signup = (props) => {

    
    // const [users, setUsers] = useState(props.users);
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showerror,setShowerror] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
     const { users,setNewUser } = useContext(UserContext);
     const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
     
        const isDuplicateUser = users.some((user) => user.number === number);

        if (isDuplicateUser) {
        setShowSuccessMessage(false)
          setErrorMessage('User with this number already exists.');
          setShowerror(true)

        }else{
            
            const newUser = {
                number: number,
                password: password,
                isAdmin:false
              };
              try {
                // Example of an asynchronous operation using setTimeout
                await new Promise((resolve) => setTimeout(resolve, 1000));
                
                // Set the new user in the context or update the users array
                setNewUser(newUser);
          
                setShowSuccessMessage(true);
                setSuccessMessage('Signup successful! Welcome aboard.');
                
                console.log(users);
          
                // Reset form fields
                setNumber('');
                setPassword('');
                
              } catch (error) {
                // Handle any errors that occur during the asynchronous operation
                setShowSuccessMessage(false);
                setErrorMessage('Error occurred during signup.');
                setShowerror(true);
              }
              
        }

      };

      const handleNumberChange = (e) => {
        setNumber(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };


      useEffect(() => {
        let timeoutId;
    
        if (errorMessage) {
          timeoutId = setTimeout(() => {
            setShowerror(false) 
            setErrorMessage('') 
          }, 1000);
        }
    
        return () => clearTimeout(timeoutId);
      }, [errorMessage]);

      useEffect(() => {
        let timeoutId;
    
        if (successMessage) {
          timeoutId = setTimeout(() => {
            setShowSuccessMessage(false)
            setSuccessMessage('') 
            navigate('/login');
          }, 1000);
        }
    
        return () => clearTimeout(timeoutId);
      }, [successMessage]);


  return (

    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        {showerror && <ErrorMessage message={errorMessage} />}
        { showSuccessMessage && (
        <SignupSuccessMessage message={successMessage} />
       
      )}
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample pic"
        />
      </div>
      <form className="md:w-1/3 max-w-sm" onSubmit={handleSubmit}>

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="tel"
          placeholder="Enter your mobile number"
          onChange={handleNumberChange}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          required
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Confirm password"
          onChange={handlePasswordChange}
          required
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit" 
            onSubmit={handleSubmit}
          >
            Signup
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/login"
          >
                Login
          </Link>
        </div>
      </form>
      
    </section>
    
  )
}

export default Signup
