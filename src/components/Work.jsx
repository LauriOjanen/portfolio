import React from 'react'
import landing from '../assets/landing-pic.png'
import portfolio from '../assets/portfolio-pic.png'
import weather from '../assets/weather-pic.png'
import kauppa from '../assets/kauppa.png'
import rps from '../assets/rps.png'
import todo from '../assets/todo.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>

            {/* Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                 {/* Grid item*/}
                <div style={{backgroundImage: `url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-white tracking-wider'>
                            <p className='text-2xl'>Weather App</p>
                            React JS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lauriojanen.github.io/weather-app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/LauriOjanen/weather-app">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-white tracking-wider'>
                            <p className='text-2xl'>Portfolio</p>
                            React + Tailwind CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lauriojanen.eu">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/LauriOjanen/portfolio">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${kauppa})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-white tracking-wider'>
                            <p className='text-2xl'>aikuistenlelukauppa.fi</p>
                            Wordpress
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://www.aikuistenlelukauppa.fi">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://www.aikuistenlelukauppa.fi">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${rps})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-white tracking-wider'>
                            <p className='text-2xl'>Rock Paper Scissors</p>
                            Javascript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lauriojanen.github.io/rock-paper-scissors/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/LauriOjanen/rock-paper-scissors">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${landing})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 p-10'>
                        <span className='font-bold text-white tracking-wider'>
                            <p className='text-2xl'>Landing Page</p>
                            React + Vite + Tailwind CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lauriojanen.github.io/landing-page-react-vite/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/LauriOjanen/landing-page-react-vite">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${todo})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='font-bold text-white tracking-wider'>
                            <p className='text-2xl'>To-Do App</p>
                            Javascript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lauriojanen.github.io/TODO/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/LauriOjanen/TODO">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work