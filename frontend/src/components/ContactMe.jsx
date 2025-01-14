import { Formik, Field, Form } from "formik";
import { AiOutlineSend } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

const ContactMe = () => {
  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="p-8 pt-10 mt-10 relative bg-gradient-to-t from-[rgba(129,209,255,0.4)] rounded-tr-[60%] max-w-5xl mx-auto overflow-hidden shadow-2xl shadow-blue-800">
        <div className="relative">
          <p className="flex justify-center text-4xl pb-10">
            Contact Me <MdContactMail size={32} className="mt-1 ml-3" />
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="border border-gray-300 rounded p-4 mb-4 flex justify-between w-full ">
                  <div className="flex flex-col w-full pr-4">
                    <label>Your Name:</label>
                    <Field
                      name="name"
                      component="input"
                      className="p-4 border border-gray-300 rounded w-full h-16 box-border"
                    />
                  </div>

                  <div className="flex flex-col w-full pl-4">
                    <label>Your Email:</label>
                    <Field
                      name="email"
                      component="input"
                      className="p-4 mb-3 border border-gray-300 rounded w-full h-16 box-border"
                    />
                  </div>
                </div>

                <div className="pl-10 w-full p-4 border border-gray-300 rounded mt-4 box-border">
                  <label>Subject:</label>
                  <Field
                    name="subject"
                    component="input"
                    className="p-4 border border-gray-300 rounded w-full h-16 box-border"
                  />
                </div>

                <div className="pl-10 w-full p-4 border border-gray-300 rounded mt-4 box-border">
                  <label>Your Message:</label>
                  <Field
                    name="message"
                    component="textarea"
                    className="w-full p-4 border border-gray-300 rounded h-32 box-border"
                  />
                </div>

                <div className="flex justify-center mt-4">
                  <button
                    className="flex justify-center items-center border border-gray-300 rounded p-4 bg-blue-500 text-white hover:bg-blue-600"
                    type="submit"
                  >
                    <span className="pt-3 pr-2">Send Message</span>
                    <AiOutlineSend size={24} className="-rotate-12" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
