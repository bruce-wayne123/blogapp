import react from "react";
import { useState } from "react";
import firestore from "../firebase";
import { useFormInput } from "./Hooks";
import classes from "./Button.module.css";
function CreatePost() {

    const title = useFormInput("");
    const subTitle = useFormInput("");
    const content = useFormInput("");

    function handleSubmit(e) {
        e.preventDefault();
        firestore.collection('posts').add(
            {
                title: title.value,
                subTitle: subTitle.value,
                content: content.value,
                createdAt: new Date()
            }
        ).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    <input {...title}></input>
                </div>
                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle}></input>
                </div>
                <div className="form-field">
                    <label>Content</label>
                    <input {...content}></input>
                </div>
                <button className={classes.createPostBtn}>Create Post</button>
            </form >
        </div >
    );
}

export default CreatePost;