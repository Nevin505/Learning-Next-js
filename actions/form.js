"use server";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import fs from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const submitForm = async (prevState, formData) => {
  try {
    console.log("the formData", formData);
    let message = {};
    const title = formData.get("title");
    const content = formData.get("content");
    const image = formData.get("image");
    
    if (!title || title.trim().length === 0) {
      message = { title: "title cant be empty" };
    }
    if (!content || content.trim().length === 0) {
      message = { ...message, content: "Content cant be empty" };
    }
    if (!image || (image instanceof File && image.size === 0)) {
      message = { ...message, imageUrl: "image Should be there" };
    }
    if (Object.keys(message).length !== 0) {
      console.log("messagesss", message);
      return { message };
    }
    const postData = {
      content: content,
      title: title,
      imageUrl: "rtye5t",
      userId: 1,
    };
    console.log("postData", postData);
    const result = await storePost(postData);
    console.log("the result", result);
    if (result.changes == 1) {
      redirect("/feed");
    }
    return { message: { success: "Post created successfully" } };
  } catch (error) {
    console.error("Error in submitForm:", error);
    return { message: { error: "An error occurred while submitting the form" } };
  }
  // fs.writeFile("/images".postData.get('image'))
};

export const togglePostLIkeStatus=async(postID)=>{
  updatePostLikeStatus(postID, 2);
  revalidatePath('feed');
}