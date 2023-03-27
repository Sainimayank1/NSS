import React,{Component, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import "./sidebar.css"
import updateImage from "../../Store/AsyncMethods/updateImage.js"
import toast, { Toaster } from "react-hot-toast"
import fetchPosts from '../../Store/AsyncMethods/FetchAllPosts';
<Toaster position="right-top" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />


let imgData = {
    url: "",
    public_id: ""
};
const cloudName = "dbhvcitik";
const uploadPreset = "nssjmieti";


class CloudinaryUploadImgWidget extends Component {
    componentDidMount() {

        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                sources: ['local', 'camera', 'google_drive'],
                multiple: false,
                folder: "user_profile_uploaded_img",
                clientAllowedFormats: ["png", "jpg", "jpeg"],
                maxImageFileSize: 5000000,
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    imgData.url = result.info.url;
                    imgData.public_id = result.info.public_id;
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
            <button id="upload_widget_Img" className="a">
               Change Image
            </button>
        );
    }
}




function Sidebar() {
    const[True,setTrue] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, user} = useSelector((state) => state.authReducer);
    const {updateImageSucces} = useSelector((state) =>state.updateReducer);
    const submitImage = () =>
    {
        let id = user._id
        dispatch(updateImage({id,imgData}))

    }

    useEffect(()=>
    {
        if(updateImageSucces !== "")
        {
            toast.success(updateImageSucces);
            dispatch({type:"RESET_UPDATE_IMAGE_SUCCES"})
            // dispatch(fetchPosts(1))
            navigate('/');
        }
    },[updateImageSucces])

    return (
        <div className='sidebar'>
            <Toaster position="top-right" reverseOrder={false}
            toastOptions={{
              // Define default options
              duration: 5000,
              style: {
                fontsize: '14px'
              },
            }} />
            <div className='sidebar_item'>
                <h3>Setting</h3>
            </div>
            <div className='sidebar_item'>
                <Link to='/updateName' className='a'>Change Name</Link>
            </div>             
            <div className='sidebar_item'>
                <div onClick={setTrue} className="setting-container">
                    <CloudinaryUploadImgWidget/>
                    {True ? <div onClick={submitImage} className='a setting-container-link'>Submit</div> : ""}
                </div>
            </div>
            <div className='sidebar_item'>
                <Link  to='/updatePassword' className='a'>Change Password</Link>
            </div>
        </div>
    )
}

export default Sidebar