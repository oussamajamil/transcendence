import React from 'react'
import Lottie from 'react-lottie';
import { ReactComponent as Welcome } from '../../assets/welcome.svg';
import loginAnimations from "../../assets/lottie/login.json"
import { Button } from 'rsuite';
import {ReactComponent as Intra} from '../../assets/42Icons.svg';
import {ReactComponent as Google} from '../../assets/google.svg';
function Login() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimations,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
  return (
    <div className='w-full h-full flex justify-center items-center '>
        <div className='w-11/12 min-w-[20rem] max-w-[80rem] rounded-xl bg-white shadow-xl flex  p-4 [&>*]:flex-1'>
            <div className='lg:h-[35rem] h-[20rem]  flex flex-col  items-center gap-[2rem]  pt-4'>
                <span className='text-4xl flex justify-center items-center gap-3'>Welcomme <Welcome className='text-2xl'/></span>
                <span className='text-[#A19E99] text-sm'>please login with</span>
                <Button className='w-[80%] h-[5rem] shadow-lg bg-[#5F9FFF] flex'>
                    <div className='w-[15%] shadow  h-[100%] flex justify-center items-center'><Intra/></div>
                    <div className='h-[100%] w-[80%] flex items-center justify-center text-white text-3xl'>Intra</div>
                </Button>
                <div className='flex items-center justify-center gap-8 w-[80%]'>
                    <div className='flex-1 h-1 border border-[#000] bg-black'></div>
                    <span className='text-xl '>or</span>
                    <div className='flex-1 h-1 border border-[#000] bg-black'></div>
                </div>
                
                <Button disabled className='w-[80%] h-[5rem] shadow-lg bg-[#FF5C5C]/40 flex'>
                    <div className='w-[15%] shadow  h-[100%] flex justify-center items-center'><Google/></div>
                    <div className='h-[100%] w-[80%] flex items-center justify-center text-white text-3xl'>Google</div>
                </Button>
            </div>
            <div className='lg:h-[35rem] h-[20rem]  hidden md:flex'>
                <Lottie options={defaultOptions} />
            </div>
        </div>
    </div>
  )
}
export default Login;