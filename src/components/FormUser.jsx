import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {


  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(infoUpdate);
  }, [infoUpdate]);

  const submit = (data) => {
    if (infoUpdate) {
      //Update
      updateUser("/users", infoUpdate.id, data);
      setInfoUpdate();
    } else {
      //Create
      createUser("/users", data);
    } 

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });

  };

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  return (
    <div onClick={handleCloseForm} className={`formuser_wrapper ${closeForm && "close_form"}`}>
      <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
        <h1 className="formuser_title">{infoUpdate ? "Udate" : "New user"}</h1>
        <div onClick={handleCloseForm} className="formuser_close">x</div>
        <div className="formuser_container">
          <label className="formuser_label" htmlFor="email">
            Email
          </label>
          <input
            className="formuser_input"
            {...register("email")}
            type="email"
            id="email"
          />
        </div>
        <div className="formuser_container">
          <label className="formuser_label" htmlFor="password">
            Password
          </label>
          <input
            className="formuser_input"
            {...register("password")}
            type="password"
            id="password"
          />
        </div>
        <div className="formuser_container">
          <label className="formuser_label" htmlFor="first_name">
            First name
          </label>
          <input
            className="formuser_input"
            {...register("first_name")}
            type="text"
            id="first_name"
          />
        </div>
        <div className="formuser_container">
          <label className="formuser_label" htmlFor="last_name">
            Last name
          </label>
          <input
            className="formuser_input"
            {...register("last_name")}
            type="text"
            id="last_name"
          />
        </div>
        <div className="formuser_container">
          <label className="formuser_label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="formuser_input"
            {...register("birthday")}
            type="date"
            id="birthday"
          />
        </div>
        <button className="formuser_btn">
          {infoUpdate ? "update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default FormUser;
