//form provider for react hook form it is used to pass the methods to the children
import { FormProvider, useForm } from "react-hook-form";
import CreateDescription from "./CreateDescription";
import CreateImages from "./CreateImages";
import "./create.css";

const Create = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log("Combined Form Data:", data);
  };
  return (
    <FormProvider {...methods}>
      {/* this is the form provider */}
      <form
        className="profile-create"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="profile-create-container">
          <CreateImages />
          <div className="profile-create-form-container">
            <CreateDescription />
            <button type="submit" className="profile-create-form-submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Create;
