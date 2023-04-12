import React from "react";
import lab from "../../assets/homem-labs.jpeg";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:pt-0 pt-16">
      <div className="flex flex-col items-start justify-center max-w-screen-lg px-4 md:mx-auto md:flex-row">
        <div className="md:text-left sm:text-center sm:px-8">
          <h2 className="text-sm font-extrabold text-green-500">CONTACT US</h2>
          <p className="mt-4 text-xl font-bold text-gray-700 sm:text-2xl">
            Feel free to give us a call or send us an email with your questions
            or comments.
          </p>
          <p className="mt-4 text-lg text-gray-700 sm:text-xl">
            We would love to hear from you, whether you're interested in working
            with our team or pursuing a career with us.
          </p>
        </div>
        <div className="w-full md:ml-12 pt-16 md:pt-0">
          <form className="md:px-16">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Nome:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Digite aqui"
                className="shadow appearance-none border  border-black  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Digite aqui"
                className="shadow appearance-none border  border-black  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telefone:
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Digite aqui"
                className="shadow appearance-none border  border-black  w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Mensagem:
              </label>
              <textarea
                id="message"
                placeholder="Digite aqui"
                className="shadow appearance -none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                required
              ></textarea>
            </div>
            <div className="flex items-center w-full">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
