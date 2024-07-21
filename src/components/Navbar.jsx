import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaTimes, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { HiArrowSmUp, HiMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [backToTop, setBackToTop] = useState(false);
	const [showShadowNav, setShowShadowNav] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setBackToTop(true);
				setShowShadowNav(true);
			} else {
				setBackToTop(false);
				setShowShadowNav(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);


	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleClick = () => {
		setNav(!nav);
		setBackToTop(false);
	};

	return (
		<div className={!showShadowNav ? 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#10101a] text-gray-300 z-20' : 'fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#10101a] text-gray-300 z-20'}>
			<div className="pl-5">
				<img src={Logo} alt="logo" style={{ width: "35px" }} />
			</div>

			<ul className="hidden md:flex">
				<li className="hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
					<Link to='home' smooth={true} duration={500}>Home</Link>
				</li>
				<li className="hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
					<Link to='about' smooth={true} duration={500}>About</Link>
				</li>
				<li className="hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
					<Link to='skill' smooth={true} duration={500}>Skills</Link>
				</li>
				<li className="hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
					<Link to='work' smooth={true} duration={500}>Projects</Link>
				</li>
				<li className="hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
					<Link to='contact' smooth={true} duration={500}>Contact</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <BsGridFill size={30} className="cursor-pointer" /> : <FaTimes size={30} className="cursor-pointer" />}
			</div>

			{/* Mobile menu */}
			<div className={
				!nav
					? "hidden"
					: "absolute top-0 left-0 w-full h-screen bg-[#10101a] flex flex-col justify-center items-center transition ease-in-out duration-300 delay-700"
			}>
				<div>
					<img src={Logo} alt="logo" style={{ width: "50px" }} className="mb-7" />
				</div>
				<ul
					className='w-full flex flex-col justify-center items-center'
				>
					<li className="py-6 text-4xl hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
						<Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
					</li>
					<li className="py-6 text-4xl hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
						<Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
					</li>
					<li className="py-6 text-4xl hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
						<Link onClick={handleClick} to='skill' smooth={true} duration={500}>Skills</Link>
					</li>
					<li className="py-6 text-4xl hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
						<Link onClick={handleClick} to='work' smooth={true} duration={500}>Projects</Link>
					</li>
					<li className="py-6 text-4xl hover:text2-gradient-custom hover:translate-y-1 hover:duration-200 active:text2-gradient-custom">
						<Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
					</li>
				</ul>
			</div>

			{backToTop && (
				<div className="fixed flex-col top-[90%] right-2 md:right-6 animate-bounce bg-white text-[#3A1078] rounded-full">
					<button onClick={scrollUp} className="p-3">
						<HiArrowSmUp size={20} />
					</button>
				</div>
			)}

			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
						<a
							href="https://www.linkedin.com/in/raj-kumar-1029"
							target="_blank"
							className="flex justify-between items-center w-full text-[#0e0e3f]"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
						<a
							href="https://github.com/raj-71"
							target="_blank"
							className="flex justify-between items-center w-full text-[#0e0e3f]"
						>
							Github <FaGithub size={30} />
						</a>
					</li>

					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-200 rounded-e-2xl font-semibold">
						<a
							href="mailto:roopak1029@gmail.com"
							target="_blank"
							className="flex justify-between items-center w-full text-[#0e0e3f]"
						>
							Email <HiMail size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;