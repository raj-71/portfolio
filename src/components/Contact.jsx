import React, { useEffect } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		AOS.init();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
	
		// Basic validation example
		if (!formData.name || !formData.email || !formData.message) {
		  alert('Please fill in all fields.');
		  return;
		}

		console.log(formData);
	
		// Submit the form
		e.target.submit();
	};

	return (
		<div
			name="contact"
			className="w-full bg-[#10101a] text-gray-300 py-12 md:py-32 px-10"
		>
			<div className="flex flex-col justify-center items-center w-full h-full text-white">
				{/* Heading */}
				<p className="text-4xl font-bold inline border-b-4 border-gradient-custom">
					Contact
				</p>
				{/* Description */}
				<p className="py-6">
					Submit the form below or send me an email -{" "}
					<span className="font-bold cursor-pointer" onClick={() => window.location.href = 'mailto:roopak1029@gmail.com'}>roopak1029@gmail.com</span>
				</p>

				{/* Form */}
				<div className="flex justify-center">
					<form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
						<input
							type="text"
							placeholder="Name"
							name="name"
							value={formData.name}
        					onChange={handleInputChange}
							required
							className="bg-gray-100 text-gray-950 p-2 w-full rounded-md outline-none"
							data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={formData.email}
        					onChange={handleInputChange}
							required
							className="my-4 p-2 bg-gray-100 text-gray-950 w-full rounded-md outline-none"
							data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
						/>
						<textarea
							name="message"
							value={formData.message}
        					onChange={handleInputChange}
							required
							className="bg-gray-100 p-2 w-full text-gray-950 rounded-md outline-none"
							data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"
							placeholder="Message"
							rows="10"
						></textarea>
						{/* Send Message Button */}
						<div className="mt-4 mx-auto flex justify-center">
							<button
								type="submit"
								className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:button-gradient-custom hover:border-gradient-custom rounded-sm font-semibold"
							>
								Send Message
								<span className="group-hover:translate-x-1 duration-300">
									<IoSendSharp className="ml-4" />
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;