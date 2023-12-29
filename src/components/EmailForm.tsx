// EmailForm.tsx

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addDoc, collection } from "firebase/firestore";
import { FormEvent, useState } from "react";
import { db } from "./firebase";

const EmailForm = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }

    try {
      // Add the email to Firestore
      const docRef = await addDoc(collection(db, "emails"), {
        email: email,
      });
      setEmail("Got it! Thank you for your interest."); // Clear the input field after submission
    } catch (error) {
      console.error("Error adding email: ", error);
      alert("Error submitting email. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-b-[1px] border-b-white md:w-[40%] w-[100%]"
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          marginRight: "10px",
          padding: "5px 0",
          width: "95%",
          outline: "none",
        }}
        placeholder="Enter your college email to indicate interest"
      />
      <button
        type="submit"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </form>
  );
};

export default EmailForm;
