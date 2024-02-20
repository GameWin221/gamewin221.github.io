import React from 'react';
import Project from './project'
import Panel from './panel'
import TechIcon from './tech_icon'

function scrollTo(toId: string) {
	const elem = document.getElementById(toId) as HTMLElement;
	const rect = elem.getBoundingClientRect();
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const barHeight = 3.5;

	window.scrollTo({
		behavior: 'smooth',
		left: 0,
		top: document.documentElement.scrollTop + Math.round(rect.top - (barHeight * rem))
	});
}

function App() {
	return (
	<main className='bg-primaryColor'>
		<div className='w-full h-bar fixed bg-primaryColor drop-shadow-lg z-10'>
			<div className='h-full w-50 flex flex-row items-center justify-around'>
				<div className='flex flex-row items-center h-full'>
					<h2 onClick={()=>{scrollTo('about-me-section')}} id='home-ref' className='text-left font-medium text-5xl cursor-pointer'>Home</h2>
				</div>

				<div className='flex flex-row justify-between space-x-8 items-center h-full'>
					<h2 onClick={()=>{scrollTo('about-me-section')}} id='about-me-ref' className='text-xl cursor-pointer'>About Me</h2>
					<h2 onClick={()=>{scrollTo('projects-section')}} id='projects-ref' className='text-xl cursor-pointer'>Projects</h2>
					<h2 onClick={()=>{}} id='blog-ref' className='text-xl line-through cursor-default text-gray-400'>Blog (Work in progress)</h2>
				</div>
			</div>
		</div>
		
		<div className='h-bar'></div>

		<div id='about-me-section' className='pt-6 flex flex-col w-full items-center h-screen-no-bar bg-primaryColor'>	
			<div className='w-2/3 flex flex-row pt-8'>
				<div className='w-1/2 flex flex-col items-center'>
					<img src='/profile.png' className='rounded-full w-[12rem] h-[12rem] drop-shadow-xl' alt='Profile'/>
					<h1 className='text-left text-4xl font-bold mt-6'>Mateusz Antkiewicz</h1>
					<h2 className='text-left text-xl'>Hobbyist Programmer</h2>
					<p className='Email: mateusz.ant8@gmail.com'></p>
					<p className='Discord: gamewin221'></p>
				</div>

				<div className='w-1/2'>
					<h1 className='text-7xl mb-8 font-medium'>About Me</h1>
					<p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit dolorum sapiente aspernatur provident similique tenetur, obcaecati voluptates ea! Eum unde expedita dignissimos pariatur quae suscipit iste laboriosam. Minus, accusamus.</p>
					<p className='text-xl'>This website is early in development...</p>
				</div>
			</div>

			<div className='w-3/4 pt-32'>
				<h1 className='text-7xl mb-12 font-medium text-center hidden'>Experienced with:</h1>

				<div className='flex flex-row flex-nowrap justify-between mt-10'>
					<div className='flex flex-wrap flex-col items-center w-1/3'>
						<h1 className='text-3xl text-center mb-4'>Programming:</h1>
						<div className='flex flex-wrap justify-center items-center w-2/3'>
							<TechIcon href='.' src='/tech_icons/CPPIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/CSIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/RustIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/VulkanIcon.png' className='m-2 brightness-0 w-[8 rem] h-20'/>
							<TechIcon href='.' src='/tech_icons/OpenGLIcon.png' className='m-2 brightness-0 w-[5 rem] h-20'/>
						</div>
					</div>

					<div className='flex flex-wrap flex-col items-center w-1/3'>
						<h1 className='text-3xl text-center mb-4'>Apps:</h1>
						<div className='flex flex-wrap justify-center items-center w-2/3'>
							<TechIcon href='.' src='/tech_icons/GitIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/KiCadIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/NSightIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/RenderDocIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/Fusion360Icon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/VisualStudioIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/CLionIcon.png' className='m-2 brightness-0 w-20 h-20'/>
						</div>
					</div>

					<div className='flex flex-wrap flex-col items-center w-1/3'>
						<h1 className='text-3xl text-center mb-4'>Game Engines:</h1>
						<div className='flex flex-wrap justify-center items-center w-2/3'>
							<TechIcon href='.' src='/tech_icons/UnityIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/UnrealIcon.png' className='m-2 brightness-0 w-20 h-20'/>
							<TechIcon href='.' src='/tech_icons/GodotIcon.png' className='m-2 brightness-0 w-20 h-20'/>
                        </div>
					</div>
				</div>
			</div>
		</div>

		<div id='projects-section' className='w-full justify-center items-center bg-secondaryColor'>
			<h1 className='text-center text-7xl mb-4 font-medium pt-8'>Projects</h1>
			<div className='h-4'></div>
			<div className='flex flex-col items-center justify-between'>
				<Project name='Gemino' 		      head='High-Performance Vulkan Renderer' link='https://github.com/GameWin221/Gemino' year='2023' month='Dec' day='10'/>
				<Project name='Pico Game Console' head='Game console made with Raspberry Pi Pico' link='https://github.com/GameWin221/PicoGameConsole' year='2023' month='Nov' day='17'/>
				<Project name='OxiTrace' 		  head='Raytracer made with Rust and Ash (Vulkan API for rust)' link='https://github.com/GameWin221/oxi-trace' year='2023' month='Apr' day='08'/>
				<Project name='Rusticle Sim' 	  head='Particle life simulation made in Rust' link='https://github.com/GameWin221/rusticle_sim' year='2023' month='Jan' day='14'/>
				<Project name='Eruption Engine'   head='My first rendering engine made with Vulkan' link='https://github.com/GameWin221/Eruption-Engine' year='2022' month='Apr' day='02'/>
				<Project name='balsjourny'   head='My first rendering engine made with Vulkan' link='https://github.com/GameWin221/Eruption-Engine' year='2022' month='Apr' day='02'/>
			</div>
		</div>

		<div id='copyright-section' className='w-full items-center bg-tetraryColor'>
			<h1 className='text-center text-2xl font-light text-primaryColor pt-2 pb-2'>&copy;&nbsp;2024 Mateusz&nbsp;Antkiewicz</h1>
		</div>
	</main>
	);
}

export default App;
