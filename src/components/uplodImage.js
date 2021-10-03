import React from "react";


function UplodImage(){
    return(
        <form method="POST" action="https://cube-backend-401.herokuapp.com/profile-upload-single" enctype="multipart/form-data">
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

export default UplodImage;

