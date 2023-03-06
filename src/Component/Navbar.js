import React from 'react';
import { IoIosMenu } from "react-icons/io"
import { Link } from 'react-router-dom';
import Search from './Search';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

const Navbar = () => {
    return (
        <div>
            <div className="m-auto w-[80%]">
                <div className="flex justify-between items-center  py-10">
                    <div className="">
                        <Link to="/" className="">
                            <h1 className="font-extrabold text-2xl text-yellow-500">My Notes</h1>
                        </Link>
                    </div>
                    <div className="menu ">
                        <Menu className="">
                            <MenuHandler>
                                <Button variant=""> <IoIosMenu className='text-4xl text-white' /></Button>
                            </MenuHandler>
                            <MenuList className='flex flex-col  xl:w-[10%] w-[40%] bg-gray-100 space-y-2 text-white'>
                                <MenuItem className='hover:bg-[#444] bg-[#555] hover:text-white py-3'><Link to="/" className='text-center w-[100%]'>Home</Link></MenuItem>
                                <MenuItem className='hover:bg-[#444] bg-[#555] hover:text-white py-3'>Logout</MenuItem>
                            </MenuList>
                        </Menu>

                    </div>
                </div>
                <div className="">
                    {/* <Search /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;