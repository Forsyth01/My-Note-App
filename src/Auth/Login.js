import React from 'react';

const Login = () => {
    return (
        <div>
            <div className="flex flex-col sm:h-[75%] xl:h-[50vh] h-[50vh] justify-center items-center m-auto w-[80%]">
                <form className="space-y-8 xl:w-[50%] md:w-[75%] w-[100%]">
                    <div className="">
                        <h1 className="font-bold text-4xl text-center text-white">Log<span className='text-yellow-500'>in</span></h1>
                    </div>
                    <div className="">
                        <input type="text" className="w-[100%] py-5 px-3 rounded-xl outline-none" placeholder='Username'/>
                    </div>
                    <div className="">
                        <input type="password"  className="w-[100%] py-5 px-3 rounded-xl outline-none" placeholder='Password'/>
                    </div>
                    <div className="">
                        <button className="bg-yellow-500 hover:bg-yellow-400 font-semibold xl:px-20 px-16 rounded-xl py-4">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;