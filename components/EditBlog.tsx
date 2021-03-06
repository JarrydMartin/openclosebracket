import { Grid, makeStyles, Paper } from "@material-ui/core";
import dynamic from "next/dynamic";
import React, { useContext } from "react";
import { BlogContext } from "../lib/contexts";
import BlogForm from "./BlogForm";
const Editor = dynamic(() => import("./Editor"), { ssr: false });

const EditBlog = () => {
  const { article: blog, setArticle: setBlog } = useContext(BlogContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <BlogForm />
      </div>
      <div className={classes.editor}>
        <Paper style={{background:"#212121"}} elevation={3} >
          <Editor />
        </Paper>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridTemplateRows: "80px auto",
  },
  form: {
    gridColumn: "2/3",
    padding: "8px",
  },
  editor: {
    gridColumn: "2/3",
  },
});

export default EditBlog;
