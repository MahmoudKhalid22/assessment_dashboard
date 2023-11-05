import React from "react";
import classes from "./Form.module.css";

function Form() {
  return (
    <>
      <form className={classes.form}>
        <h2>Add a new account</h2>
        <hr />
        <label htmlFor="n">Country of registration</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <input type="text" placeholder="Search company" />
        <input />
        <hr />
        <input className={classes.submit} type="submit" />
      </form>
    </>
  );
}

export default Form;
