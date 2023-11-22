import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex justify-center items-center flex-col w-full h-screen bg-white]">
        <div>
            <h1 className="text-4xl font-sans before:w-3 before:h-3 before:inline-block before:bg-[#593cfb]
            font-bold before:mr-[-10px]">
                Escolha um quizz para jogar: 
            </h1>
        </div>
        <div className="flex gap-10 my-28 w-full justify-center">
            <NavLink
            className="p-2 bg-blue-600 rounded-md w-full max-w-[200px] text-center text-white font-bold
            animate-ping hover:bg-blue-900 duration-300" 
            to="/computacao">
                Computação
            </NavLink>
            <NavLink
            className="p-2 bg-blue-600 rounded-md w-full max-w-[200px] text-center text-white font-bold
            animate-ping hover:bg-blue-900 duration-300"
            to="/geografia">
                Geografia
            </NavLink>
        </div>
    </main>
  )
}

export default Home;