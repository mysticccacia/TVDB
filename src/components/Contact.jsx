import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-gray-900 text-zinc-300 flex flex-col items-center  p-5">
       <div className='h-[8%] w-full px-[5%] flex items-center justify-between'>
             <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] text-xl font-extrabold  mr-4 ri-arrow-left-line"
          ></i>
          
        </div>
      <div className="bg-gray-900 rounded-2xl h-full shadow-xl p-8 w-full ">
       
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

        <div className="text-center space-y-4">
          <p className="text-xl font-medium">Abhishek Kushwaha</p>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/abhishek-kushwaha-ab8908268" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-cyan-400 hover:underline"
          >
            <FaLinkedin className="text-2xl" /> LinkedIn
          </a>

          {/* Instagram */}
          <p className="text-pink-400">
            <a  target="_blank"  href="https://www.instagram.com/mysticccacia">
                <i className="text-2xl cursor-pointer ri-instagram-fill"></i> <span className="font-medium">@mysticccacia</span>
            </a>
          </p>

          {/* GitHub */}
          <a 
            href="https://github.com/mysticccacia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-white hover:text-gray-300"
          >
            <FaGithub className="text-2xl" /> GitHub
          </a>

          {/* Portfolio */}
          <a 
            href="https://portfolida.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-green-400 hover:underline"
          >
            <FiExternalLink className="text-xl" /> Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
