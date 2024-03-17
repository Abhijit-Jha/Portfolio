export default function Contact() {
  return (
    <div className="mt-4 mb-10 bg-black p-10" ref={Contact}>
      <div className="text-center font-bold text-4xl text-white"> Contact Me </div>
      <div className="text-center text-white ">Get in touch</div>
      <div className="md:flex mt-10 ">
        <div className=" md:w-1/2 md:space-y-2 space-y-2 w-full text-white ">
          <div className="font-bold text-3xl md:text-center text-center">Get in touch</div>
          <div className="grid grid-cols-2 md:place-items-end space-x-5 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              className="w-20 h-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <div className="md:place-self-start absolute md:static left-44 font-semibold md:text-2xl text-xl p-4 ">
              Name
              <div className="place-self-center col-span-2 font-light text-wrap">
                Abhijit Jha
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:place-items-end space-x-5 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              class="w-20 h-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <div className="md:place-self-start md:static left-44 absolute font-semibold md:text-2xl text-xl p-4 ">
              Address
              <div className="place-self-center col-span-2 font-light text-wrap">
                Mumbai ,India
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:place-items-end space-x-5 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="red"
              class="w-20 h-20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>

            <div className="md:place-self-start md:static w-40 left-44 absolute font-semibold md:text-2xl text-lg p-4 ">
              Email
              <div className="place-self-center col-span-2 font-light text-wrap md:break-normal break-words ">
                abhijeetjha204@gmail.com
              </div> 
            </div>
          </div>
        </div>
        <div className="md:w-1/3  w-full md:ml-10 mt-8 md:mt-0">
            <div className="font-extrabold mb-4 text-3xl text-white">Message me</div>
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Name" className="border-2 h-10 pl-2 font-Ubuntu rounded-lg bg-slate-50 "></input>
            <input type="email" placeholder="Email" className="border-2 h-10 pl-2 rounded-lg font-Ubuntu bg-slate-50"></input>
            </div>
            <input type="text" placeholder="Subject" className="border-2 h-10 w-full pl-2 font-Ubuntu rounded-lg mb-4 bg-slate-50"></input>
            <textarea type="" placeholder="Message" className="border-2 h-28 w-full pl-2 font-Ubuntu rounded-lg bg-slate-50 "></textarea>
            <button className=" bg-red-700 w-40 h-14 mt-4 rounded-lg  font-bold text-white text-center ease-in transition-all duration-300 hover:bg-white hover:text-red-700 border-2 border-red-700">Send Message</button>

          </form>
        </div>
      </div>
    </div>
  );
}
