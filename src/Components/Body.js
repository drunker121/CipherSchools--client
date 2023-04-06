import React from 'react';
import Heatmap from './Heatmap';

// const paragraph = document.getElementById("edit");
// const edit_button = document.getElementById("edit-button");
// const end_button = document.getElementById("end-editing");

// edit_button.addEventListener("click", function() {
//   paragraph.contentEditable = true;
//   paragraph.style.backgroundColor = "#dddbdb";
// } );

// end_button.addEventListener("click", function() {
//   paragraph.contentEditable = false;
//   paragraph.style.backgroundColor = "#ffe44d";
// } )
const Body = () => {

  return (
    <>
    <div className='new-wrapper '>
        <div id="main">
            <div id="main-contents">

            <div className='strip d-flex justify-content-between'>
                <div className='d-flex'>
                    <div className='m-5'>
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: '150px'}} alt="Avatar" />
                    {/* <img className="profile-user-img img-responsive img-circle" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture"/> */}
                    </div>

                    <div className='m-5'>
                        <h4>Hello,</h4>
                        <h2>User</h2>
                        <h4>User@gmail.com</h4>
                    </div>
                </div>

                <div className='m-5 p-5'>
                    <h4>
                    0 Followers
                    </h4>
                </div>
            </div>

            <div className='about-me mt-3'>
                <div className='d-flex justify-content-around'>
                    <div><h5>About Me</h5></div>
                    <div><button type='submit' id='edit-button' className='btn btn-primary'>Edit</button></div>
                    <div><button type="submit" id="end-editing">Save</button></div>
                </div>

                <p id="edit" className='abt-edit m-3 p-5'><b> Click "Edit" button to edit content. </b></p>
            </div>

            <div className='cipher-map'>
                <div className='m-5'><h5>Cipher Map</h5></div>
                <Heatmap/>
            </div>

            <div className='on-the-web'>
                <div className='d-flex justify-content-around'>
                    <div className='m-5'><h5>On the Web</h5></div>
                    <div><button className='btn btn-primary'>Edit</button></div>
                </div>

                <div className='d-flex justify-content-center gap-5 mb-5'>
                    <div className='d-flex flex-column'>
                        <label>Linkedin</label>
                        <input className='mt-2'></input>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Github</label>
                        <input className='mt-2'></input>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Facebook</label>
                        <input className='mt-2'></input>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Twitter</label>
                        <input className='mt-2'></input>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Instagram</label>
                        <input className='mt-2'></input>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>Website</label>
                        <input className='mt-2'></input>
                    </div>
                </div>
            </div>

            <div className='professional mb-5'>
                <div className='d-flex justify-content-around'>
                    <div className='m-5'><h5>Professional Information</h5></div>
                    <div><button className='btn btn-primary'>Edit</button></div>
                </div>
                <div className='d-flex justify-content-center gap-5'>
                    <div className='d-flex flex-column'>
                        <label>Highest Education</label>
                        <select>
                            <option>Primary</option>
                            <option>Secondary</option>
                            <option>Higher Education</option>
                            <option>Graduation</option>
                            <option>Post Graduation</option>
                        </select>
                    </div>
                    <div className='d-flex flex-column'>
                        <label>What do you currently do ?</label>
                        <select>
                            <option>Scholing</option>
                            <option>College Student</option>
                            <option>Teaching</option>
                            <option>Job</option>
                            <option>Freelancing</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <div className='d-flex justify-content-around'>
                    <div className='m-5'><h5>Interests</h5></div>
                    <div><button className='btn btn-primary'>Edit</button></div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Body