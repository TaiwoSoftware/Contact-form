'use client'
import FormInput from "@/components/FormInput";
export default function page() {
  const handleClick = () => {
    alert('Are you sure you did not make mistake with the details')
  }
  return (
    <div className=" p-10 bg-white mt-10 mb-10 max-w-3xl m-auto rounded-lg">
      <h1 className="text-center font-bold text-2xl">Send me a message</h1>
      <p className="text-center mt-4 mb-4 text-gray-600">
        Feel free to get in touch with me with anything related to CODINGSPACE{" "}
        <br /> or you can just say hi. I will get back to you as soon as I can.
      </p>
      <form className=" px-24 pb-20">
        <FormInput type="text" placeholder="Your name" />
        <FormInput type="email" placeholder="Email" />
        <FormInput type="text" placeholder="Subject" />
        <textarea
          placeholder="Message"
          className=" active:border-blue-500 visited:border-blue-500 focus:border-blue-500 outline-none border-gray-500 border-2 text-blue-500 border-opacity-10 rounded-lg mt-6 mb-3 p-2 w-full"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" onClick={handleClick} className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full px-5 py-4 text-white rounded-lg">Send</button>
      </form>
    </div>
  );
}
