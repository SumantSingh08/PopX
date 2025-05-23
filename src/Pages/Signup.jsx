import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import Input from '../components/Input';
import {useForm} from 'react-hook-form'
import Button from '../components/Button';
function Signup() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()

    const submit = async (data) => {
        setError("");
        
        const {email, username, password} = data;
        try {
            const userData = await authService.createAccount({email, password, userName: username});
            

            if (userData) {
                await authService.login(email, password);

                const currentUser = await authService.getCurrentUser();
                dispatch(login(currentUser));
                navigate("/account-settings");
            }
        } catch (error) {
            setError(error.message);

        }
    }
    return (
        <div className='w-full min-h-screen bg-slate-300'>
            <div className='w-full min-h-screen md:h-screen md:max-w-xl flex flex-col md:py-8 md:mx-auto  py-6 px-4'>
                <h2 className='w-38 text-xl font-bold md:w-full md:text-center'>
                    Create Your PopX account
                </h2>
                {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
                <form onSubmit={handleSubmit(submit)}>
                    <div className='w-full flex flex-col gap-2 mt-4'>
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="Enter Name"
                            className="placeholder:font-normal"
                            {...register("username", {required: true})}
                        />
                        <Input
                            label="Phone number"
                            type="text"
                            placeholder="Enter Phone number"
                            className="placeholder:font-normal"
                            {...register("phoneNo", {required: true})}
                        />
                        <Input
                            label="Email address"
                            type="email"
                            placeholder="Enter Email"
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
                        <Input
                            label="Company Name"
                            type="text"
                            placeholder="Enter Company Name"
                            className="placeholder:font-normal"
                            {...register("company", {required: true})}
                        />
                        <label className='mt-3'>Are You an Agency?</label>
                        <div className='flex gap-3'>
                            <div className='flex items-center gap-3'>
                                <Input
                            type="radio"
                            value="yes"
                            className="cursor-pointer"
                            {...register("agency", {required: true})}
                            />
                            <label >Yes</label>
                            </div>
                            
                           <div className='flex items-center gap-3'>
                            <Input
                            type="radio"
                            value="no"
                            className="cursor-pointer"
                            {...register("agency", {required: true})}
                            />
                            <label >No</label>
                           </div>
    
                        </div>
                        <Button 
                        type='submit'
                        className='bg-violet-700 text-white font-semibold rounded-md mt-16 md:mt-10 cursor-pointer '
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
