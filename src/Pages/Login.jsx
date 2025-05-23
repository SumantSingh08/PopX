import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import Input from '../components/Input'
import Button from '../components/Button';
import {useForm} from 'react-hook-form'
import {login} from '../store/authSlice'

function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()

    const submit = async (data) => {
        setError("");
        
        const {email, password} = data;
        try {
            const session = await authService.login(email, password);
            

            if (session) {
                const userData = await authService.getCurrentUser();
                dispatch(login(userData));
                navigate("/account-settings");
            }
        } catch (error) {
            setError(error.message);

        }
    }
    return (
        <div className='w-full min-h-screen bg-slate-300'>
            <div className='w-full min-h-screen flex flex-col  py-6 px-4 md:py-10  md:max-w-xl  md:mx-auto '>
                <h2 className='w-38 md:w-full text-xl font-bold md:text-center'>
                    Signin to your PopX account
                </h2>
                <p className='w-48 mt-2 text-sm text-gray-500  md:w-full md:text-center md:items-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                </p>
                {error && <p className="text-red-600  my-2 text-center">{error}</p>}
                <form onSubmit={handleSubmit(submit)}>
                    <div className='w-full flex flex-col gap-2 mt-4'>

                        <Input
                            label="Email address"
                            type="email"
                            placeholder="Enter email address"
                            className="placeholder:font-normal"
                            {...register("email", {required: true,
                                 validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                             })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            className="placeholder:font-normal"
                            {...register("password", {required: true})}
                        />
                        
                        <Button 
                        type='submit'
                        className='bg-violet-700 text-white font-semibold rounded-md mt-2  cursor-pointer '
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
