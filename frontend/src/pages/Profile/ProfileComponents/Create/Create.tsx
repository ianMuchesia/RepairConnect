//form provider for react hook form it is used to pass the methods to the children
import { FormProvider, useForm } from "react-hook-form";
import CreateDescription from "./CreateDescription";
import CreateImages from "./CreateImages";
import "./create.css";
import { useCreatePostMutation } from "../../../../store/service/Api";
import { toast } from "react-toastify";
import { useState } from "react";

const Create = () => {
  const methods = useForm();

  const [images, setImages] = useState<string[]>([]);

  const [createPost, { isLoading }] = useCreatePostMutation(); // Use the mutation hook to create a new post

  
  const onSubmit = async (data: any) => {
  
    const submitData = {
      images:images.slice(0, 5),
      item: data.itemName,
      description: data.itemDescription,
    }
    if (images.length === 0) {
      toast.error("Please upload atleast one image");
      return;
    }
    console.log(images)
    try {
      const res = await createPost(submitData).unwrap(); // Use the mutation hook to submit the form data
      console.log(res);
      if (res) {
       toast.success("Post created successfully");
        methods.reset();
      }
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };
  return (
    <FormProvider {...methods}>
      {/* this is the form provider */}
      <form
        className="profile-create"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="profile-create-container">
          <CreateImages images={images} setImages={setImages} />
          <div className="profile-create-form-container">
            <CreateDescription />
            <button type="submit" className="profile-create-form-submit-btn">
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Create;
