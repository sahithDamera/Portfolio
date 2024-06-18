import { useContext, useState, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { context } from "../App"; // Ensure the correct path
import { styles } from "../styles"; // Ensure the correct path
import contact from "../assets/tech/contact.svg";

interface FormData {
  email: string;
  name: string;
  message: string;
}

interface Errors {
  email?: string;
  name?: string;
  message?: string;
}

function useForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    } else {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name as keyof Errors];
        return newErrors;
      });
    }

    const allFieldsFilled = Object.values({ ...formData, [name]: value }).every(
      (field) => field
    );
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setIsFormValid(allFieldsFilled && isEmailValid);
  };

  return { formData, errors, handleInput, isFormValid };
}

const Contact = () => {
  const { isLight } = useContext(context);
  const { formData, errors, handleInput, isFormValid } = useForm();

  return (
    <div
      id="contact"
      className={`z-0 ${
        isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark"
      } bg-cover bg-no-repeat bg-center`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent from-60% ${
          isLight ? "to-white" : "to-black"
        }`}
      ></div>
      <section
        className={`relative shrink-0 w-full h-screen mx-auto ${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex items-start justify-center`}
      >
        <div className="relative w-full h-auto flex flex-col lg:flex-row items-center justify-between mt-10">
          <div className="lg:w-1/2 w-full p-8">
            <h2
              className={`text-3xl font-bold mb-4 ${
                isLight ? "text-black-100" : "text-white-100"
              }`}
            >
              Contact
            </h2>
            <h3
              className={`text-xl font-bold mb-6 ${
                isLight ? "text-black-100" : "text-white-100"
              }`}
            >
              Please feel free to{" "}
              <span className="text-green-500">Message</span>
            </h3>
            <form
              className="bg-white p-8 rounded-lg shadow-md"
              noValidate
              action="https://formspree.io/f/mayrrapd"
              method="POST"
            >
              <label className="block mb-4">
                <span className="text-gray-700">Full Name</span>
                <input
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  onChange={handleInput}
                  value={formData.name}
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">E-Mail Address</span>
                <input
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  onChange={handleInput}
                  value={formData.email}
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </label>
              <label className="block mb-4">
                <span className="text-gray-700">Message</span>
                <textarea
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  onChange={handleInput}
                  value={formData.message}
                  name="message"
                  required
                  placeholder="Hey there!"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm">{errors.message}</span>
                )}
              </label>
              <button
                disabled={!isFormValid}
                className={`mt-4 px-4 py-2 rounded-md bg-green-500 text-white ${
                  !isFormValid
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-700"
                }`}
                type="submit"
                value="send"
              >
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 w-full p-8 flex items-center justify-center">
            <img
              src={contact}
              alt="Contact"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
