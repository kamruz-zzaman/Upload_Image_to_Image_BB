import axios from 'axios';
import React, { Fragment } from 'react';

const UploadImgBB = () => {
  const [url, setUrl] = React.useState();
  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData();
    // the image shoud be same {image,file direction}
    formData.append('image', e.target.image.files[0]);
    formData.append("key", `${'api key place here'}`)
    axios
      .post('https://api.imgbb.com/1/upload', formData,
    )
      .then(res => {
        alert('success')
        setUrl(res.data.data.url);
      });
  };
  console.log(url);
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" id="" />
        <input type="submit" value="Upload Image" />
      </form>
    </Fragment>
  );
};

export default UploadImgBB;