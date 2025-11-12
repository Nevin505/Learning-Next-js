'use client'
import { submitForm } from "@/actions/form";
import Button from "./submitButton";
import { useActionState } from "react";

// const Button = ({ children }) => {
//   const status = useFormStatus();
//   console.log("status", status);

//   return <button>{status?.pending ? "SUbmitting" : children}</button>;
// };
export default function NewPostPage() {
  const [state, fromAction, pending] = useActionState(submitForm,null);
  console.log("the state returned", state);
  console.log("the state message", state?.message);
  
  return (
    <>
      <h1>Create a new post</h1>
      
      <form action={fromAction} encType="multipart/form-data">
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <button type="submit">Create Post</button>
          {state?.message && (
        <div style={{ padding: "1rem", marginBottom: "1rem", backgroundColor: "#443f41", borderRadius: "4px",display:"flex",gap:'1rem' }}>
          {state.message.title && <p style={{ color: "#c882a2", margin: "0.5rem 0" }}>{state.message.title}</p>}
          {state.message.content && <p style={{ color: "#c882a2", margin: "0.5rem 0" }}>{state.message.content}</p>}
          {state.message.imageUrl && <p style={{ color: "#c882a2", margin: "0.5rem 0" }}>{state.message.imageUrl}</p>}
          {state.message.success && <p style={{ color: "#4ade80", margin: "0.5rem 0" }}>{state.message.success}</p>}
          {state.message.error && <p style={{ color: "#f87171", margin: "0.5rem 0" }}>{state.message.error}</p>}
        </div>
      )}
          {/* <Button>Submit</Button> */}
        </p>
      </form>
    </>
  );
}
