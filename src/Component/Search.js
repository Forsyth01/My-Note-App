import React from 'react';
import { Input } from "@material-tailwind/react";

const Search = () => {
    return (
        <div className='w-[80%] m-auto'>
            <form class="">
                <div className="w-[100%]">
                    <Input label="" icon={<i className="fa fa-search" />} className="text-xl w-[100%] py-3 rounded-xl outline-none px-3 bg-transparent border text-white" placeholder='Search your notes here'/>
                </div>
            </form>
        </div>
    );
};

export default Search;