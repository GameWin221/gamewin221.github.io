import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft   } from "react-icons/md";

function Project({ name, head, link, year, month, day }: { name: string, head: string, link: string, year: string, month: string, day: string }) {
    return (
    <div className='bg-secondaryColor w-1/2 mb-12 rounded-xl shadow-xl drop-shadow-md p-5'>
        <div className='flex flex-row justify-between'>
            <h1 className='text-6xl text-left'>{name}</h1>
            <h1 className='text-2xl'>{day} {month} {year}</h1>
        </div>

        <h2 className='text-xl text-left mb-10'>{head}</h2>
        <a href={link} className='float-left flex flex-row items-center hover:text-activeColor hover:scale-125 transition ease-in-out duration-150'><MdKeyboardArrowRight/>&nbsp;Check it out&nbsp;<MdKeyboardArrowLeft/></a>
    </div>
    );
}

export default Project;