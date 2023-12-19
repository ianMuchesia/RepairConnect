import React from "react";
import { useFormContext, useFieldArray } from "react-hook-form";

const CreateImages = () => {
  const { register, control, getValues } = useFormContext();
  const { append } = useFieldArray({
    control,
    name: "images",
  });



  //this function is used to handle the file change
  const handleFileChange = async (
    //eslint-disable-next-line
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      const fileReader = new FileReader();
        //this is used to read the file
      fileReader.onload = () => {
        const blob = new Blob([fileReader.result as ArrayBuffer]);
        append({ file: blob });
      };
      //this is used to read the file as an array buffer
      //an array buffer is a generic fixed-length container for binary data
      fileReader.readAsArrayBuffer(selectedFile);
    }
  };

  return (
    <div className="profile-create-modal">
      <h4 className="profile-create-title">
        You can upload up to 5 images of the same item
      </h4>
      <p className="profile-create-subtitle">
        Note: The first image will be the cover image
      </p>
      <div className="profile-create-image-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="profile-create-content" key={index}>
          <div className="profile-create-actions">
            <label htmlFor={`images.${index}.file`} className="profile-create-button upload-btn">
              File {index + 1}
              <input
                type="file"
                hidden={true}
                id={`images.${index}.file`}
                {...register(`images.${index}.file` as const)}
                onChange={(event) => handleFileChange(index, event)}
              />
            </label>
          </div>
          <div className="profile-create-result">
            <div className="profile-create-file-uploaded">
              {/* Adjust this part based on your logic */}
              <p>
                {getValues(`images.${index}.file`)?.size
                  ? `${getValues(`images.${index}.file`).size} bytes`
                  : 'No file selected'}
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default CreateImages;