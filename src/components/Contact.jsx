import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#FA8072] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/e51653b6-81e0-44b8-9110-03b7a7fccf3b" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl text-[black] font-bold inline border-b-4 border-black">Contact</p>
        </div>
        <input className="bg-white p-2 text-black" type="text" placeholder='Name' name='name' />
        <input className="my-4 p-2 bg-white" type="email" placeholder='Email' name='email' />
        <textarea className="bg-white p-2" name="message" rows="10" placeholder="Message"></textarea>
        <button className="text-black border-2 border-black hover:bg-[#FFB6C1] px-4 py-3 my-8 mx-auto flex items-center">Lets Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
