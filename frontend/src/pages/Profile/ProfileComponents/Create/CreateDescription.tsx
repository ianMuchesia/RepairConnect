import { useFormContext } from "react-hook-form";

const CreateDescription = () => {
  const { register } = useFormContext();

  return (
    <div className="profile-create-form">
      <div className="profile-create-form-group">
        <label htmlFor="itemName">Name Of Your Item</label>
        <input {...register('itemName')} type="text" required />
      </div>
      <div className="profile-create-form-group">
        <label htmlFor="itemDescription">Description of the item?</label>
        <textarea {...register('itemDescription')} cols={50} rows={50} required />
      </div>
    </div>
  );
};

export default CreateDescription;
