import classes from "./AddComment.module.css";

const AddComment = (props) => {
  return (
    <div>
      <form method="post" className={classes.form}>
          <div className={classes.mainDiv}>
            <label htmlFor="name">نام و نام خانوادگی : </label>
            <input type="text" id="name" name="user_name" />
          </div>
          <div className={classes.mainDiv}>
            <label htmlFor="mail">ایمیل : </label>
            <input type="email" id="mail" name="user_email" />
          </div>
          <div className={classes.mainDiv}>
            <label htmlFor="msg">متن پیام : </label>
            <textarea id="msg" name="user_message"></textarea>
          </div>
        <div className="button">
          <button type="submit">{props.name}</button>
        </div>
      </form>
    </div>
  );
};

export default AddComment;
