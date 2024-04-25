"use client";
import FormInput from "@/components/FormInput";
export default function page() {
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "e287982a-6e32-4af0-8564-53b43e01fb79",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            subject: e.target.subject.value
        }),
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}
  
  return (
    <div
      className=" p-10 bg-white mt-10 mb-10 max-w-3xl m-auto rounded-lg
    lg:max-w-2xl
    md:max-w-xl md:p-5 md:px-2 md:mb-10 sm:max-w-sm"
    >
      <h1 className="text-center font-bold text-2xl ">Send me a message</h1>
      <p className="text-center mt-4 mb-4 text-gray-600 ">
        Feel free to get in touch with me with anything related to CODINGSPACE{" "}
        <br /> or you can just say hi. I will get back to you as soon as I can.
      </p>
      <form onSubmit={handleSubmit} className=" px-24 pb-20 md:px-16 md:pb-10 ">
        <FormInput type="text" valid='name' placeholder="Your name" />
        <FormInput type="email" valid='email'  placeholder="Email" />
        <FormInput type="text" valid='subject'  placeholder="Subject" />
        <textarea
          placeholder="Message"
          name="message"
          className=" active:border-blue-500 visited:border-blue-500 focus:border-blue-500 outline-none border-gray-500 border-2 text-blue-500 border-opacity-10 rounded-lg mt-6 mb-3 p-2 w-full"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-400 to-indigo-500 w-full px-5 py-4 text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
