// react
import { useRef, useState, Suspense } from "react";
import emailjs from "@emailjs/browser";
// loader
import Loader from "../components/Loader";
// fiber
import { Canvas } from "@react-three/fiber";
// fox
import Fox from "../models/Fox";
// useAlert import
import useAlert from "../hooks/useAlert";
// alert component import
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isLoading, setIsLoading] = useState(false);

  // currentAnimation
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // useAlert initialization
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // focus
  const handleFocus = () => setCurrentAnimation("walk");

  // blur
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // run
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Barry",
          from_email: form.email,
          to_email: "ezeanibarry1@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);
        // success message
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        // setTimer
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        // idle
        setCurrentAnimation("idle");
        console.log(error);
        // error message
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative max-container flex flex-col lg:flex-row">
      {/* alert component */}
      { alert.show && <Alert {...alert} /> }
      <div className="min-w-[50%] flex-1 flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="font-semibold text-black-500">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="font-semibold text-black-500">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="input"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {/* scene */}
      <div className="w-full h-87.5 md:h-137.5 lg:w-1/2 lg:h-auto">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
