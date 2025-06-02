import axios from "axios";
import React, { useState } from "react";

export default function SignUp() {
  const [data, setData] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  async function submitData(e) {
    e.preventDefault();

    console.log(data);

    try {
      setIsSubmitting(true);
      let response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        data
      );

      if (response.status == 201) {
        setIsSuccessful(true);
      }

      setData({ userId: "", title: "", body: "" });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="form-container">
      <form>
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, userId: e.target.value }))
          }
          type="number"
          name="userId"
          placeholder="enter userId"
          value={data.userId}
        />
        <input
          onChange={(e) =>
            setData((prev) => ({ ...prev, title: e.target.value }))
          }
          type="text"
          name="title"
          placeholder="enter title"
          value={data.title}
        />
        <textarea
          onChange={(e) =>
            setData((prev) => ({ ...prev, body: e.target.value }))
          }
          type="text"
          name="body"
          placeholder="Post Content"
          value={data.value}
        />

        {isSuccessful ? (
          <p style={{ color: "#fff" }}>Data Submitted Successfully</p>
        ) : (
          ""
        )}

        <button disabled={isSubmitting} onClick={(e) => submitData(e)}>
          {" "}
          {isSubmitting ? "Submitting" : "Submit"}{" "}
        </button>
      </form>
    </div>
  );
}
