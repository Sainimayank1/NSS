import React, { useState, Component } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import PostCreateMethod from "../../Store/AsyncMethods/PostCreateMethod"
import toast, { Toaster } from "react-hot-toast"
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Loading from '../Loader/Loading';
import "./CreatePost.css";


let imgData = {};
let vidData = {};
const cloudName = "dbhvcitik";
const uploadPreset = "nssjmieti";

class CloudinaryUploadVidWidget extends Component {
    componentDidMount() {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                sources: ['local', 'camera', 'google_drive'],
                multiple: false,
                folder: "user_uploaded_video",
                clientAllowedFormats: ["mp4", "ogv", "webm", "mov"],
                maxVideoFileSize:15000000,
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    vidData = result.info;
                    console.log(vidData)
                    document
                        .getElementById("uploadedvideo")
                        .setAttribute("src", result.info.url);
                }
            }
        );
        document.getElementById("upload_widget_vedio").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    }
    render() {
        return (
            <button id="upload_widget_vedio" className="">
                Choose video..
            </button>
        );
    }
}

class CloudinaryUploadImgWidget extends Component {
    componentDidMount() {

        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                sources: ['local', 'camera', 'google_drive'],
                multiple: false,
                folder: "user_uploaded_img",
                clientAllowedFormats: ["png", "jpg", "jpeg"],
                maxImageFileSize: 5000000,
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    imgData = result.info;
                    console.log(imgData)
                    document
                        .getElementById("uploadedimage")
                        .setAttribute("src", result.info.secure_url);

                }
            }
        );
        document.getElementById("upload_widget_Img").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    }
    render() {
        return (
            <button id="upload_widget_Img" className="">
                Choose image..
            </button>
        );
    }
}

function CreatePost(props) {

    const [state, setState] = useState("");
    const [inputValue, setinputValue] = useState({ title: "", description: "", image: {}, video: {} })
    const [slug, setSlug] = useState("");
    const [slugButton, setButton] = useState(false);
    const [imagePreview, setimagepreview] = useState("");
    const { createError, createSucces } = useSelector(state => state.PostReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading } = useSelector(state => state.authReducer);
    const { _id, name } = user;

    const handleInput = (e) => {

        setinputValue({ ...inputValue, title: e.target.value });
        let slugs = e.target.value.trim().split(" ").join("-");
        setSlug(slugs);
    }

    const handleSlug = (e) => {
        setSlug(e.target.value);
        setButton(true);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        setSlug(slug.trim().split(" ").join("-"));
        setButton(false)
    }

    const handleDesc = (e) => {
        setinputValue({ ...inputValue, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (createError.length > 0) {
            createError.map((error) => toast.error(error.msg));
            dispatch({ type: "CLEAR_CREATE_ERROR" });
        }
    }, [createError])

    useEffect(() => {
        if (createSucces.length > 0) {
            navigate("/");
        }
    }, [createSucces])

    const handleformSubmit = (e) => {
        e.preventDefault();
        console.log(imgData)
        if (Object.keys(imgData).length == 0) {
            toast.error("Image must be required")
        }
        else {
            const formdata = new FormData();
            formdata.append("title", inputValue.title);
            formdata.append("description", inputValue.description);
            formdata.append("slug", slug);
            formdata.append("_id", _id);
            formdata.append("name", name);
            formdata.append("image_url", imgData.url);
            formdata.append("image_public", imgData.public_id)
            if (Object.keys(vidData).length != 0) {
                formdata.append("vedio_url", vidData.url);
                formdata.append("vedio_public", vidData.public_id)
                formdata.append("vedio_thumbnail", vidData.thumbnail_url
                );
            }
            else
            {
                formdata.append("vedio_url"," ");
                formdata.append("vedio_public"," ")
                formdata.append("vedio_thumbnail"," ");
            }
            dispatch(PostCreateMethod(formdata));
        }
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Create Post....</title>
            </Helmet>
            {loading ? <Loading /> :
                <div className='create_main'>
                    <div className='main_left'>
                        <div className='create_form'>
                            <h3>Create a new post</h3>
                            <Toaster position="right-top" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
                            <form onSubmit={handleformSubmit}>
                                <div className='input_title'>
                                    <label htmlFor="post_title" >Post Title</label>
                                    <input className="bg-grey" onChange={handleInput} value={inputValue.title} type="text" id='post_title' placeholder="Post Title..."></input>
                                </div>
                                <div className='desc'>
                                    <label htmlFor="description">Meta Description</label>
                                    <textarea name="description" cols='30' rows="10" id="description" className='bg-grey' maxLength="400" placeholder='Meta Description...' onChange={handleDesc}>
                                    </textarea>
                                    <p className='create-post-p'>{inputValue.description ? inputValue.description.length : 0} <span>MAX:400</span></p>
                                </div>
                            </form>
                            <div className='left-input_file'>
                                <CloudinaryUploadImgWidget />
                            </div>
                            <div className='left-input_file'>
                                <CloudinaryUploadVidWidget />
                            </div>
                        </div>
                    </div>
                    <div className='main_right'>
                        <div className='create_slug'>
                            <form>
                                <div className='post_url'>
                                    <label htmlFor="slug">Post URL</label>
                                    <input id="slug" type="test" value={slug} placeholder="Post URL" className='bg-grey' onChange={handleSlug} ></input>
                                </div>
                                {slugButton ? <div className='slug_button'>
                                    <button onClick={handleSumbit}>Update Slug</button>
                                </div> : ""}
                            </form>
                            <div className='imagepreview'>
                                <img name="image" src="" id="uploadedimage" ></img>
                            </div>
                            <div className='imagepreview'>
                            </div>
                            <input type="submit" onClick={handleformSubmit} value={loading ? "..." : "Create Post..."} className='slug-button-submit'></input>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CreatePost