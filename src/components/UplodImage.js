import React from "react";


function UploadImage(){
    return(
        <form method="POST" action="/profile-upload-single" enctype="multipart/form-data">
        <div>
            <label>Upload profile picture</label>
            <input type="file" name="profile-file" required/>
        </div>
        <div>
            <input type="submit" value="Upload" />
        </div>
    </form>
    )
}

export default UploadImage;
