// EmailForm.tsx

import { useState, FormEvent } from "react";
import { db } from "../firebase";

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

      console.log("Email added with ID: ", docRef.id);
      alert("Email submitted and stored in Firebase!");
      setEmail(""); // Clear the input field after submission
    } catch (error) {
      console.error("Error adding email: ", error);
      alert("Error submitting email. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          borderBottom: "1px solid #fff",
          marginRight: "10px",
          padding: "5px 0",
          width: "60%",
        }}
        placeholder="Enter your college email"
      />
      <button
        type="submit"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <img
          src="/right-arrow.png"
          alt="Submit"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </form>
  );
};

export default EmailForm;
