import React, { useState } from 'react';
import "./UserProfile.css"
import usuario from "../../Imgs/usuario.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { signout } from "../../redux/actions/userActions";
import Swal from 'sweetalert2'
import legalPopup from "../../Texts/legalPopup.txt"
import EditProfile from '../../Components/EditProfile/EditProfile';
function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };
  

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signout());
    navigate("/")
  };

  const showLegalInfo = () => {
    fetch(legalPopup)
      .then((response) => response.text())
      .then((data) => {
        Swal.fire({
          title: 'Supermarket Purchase Agreement',
          text: data,
          confirmButtonText: 'OK'
        })
      });

  }

  const [userData, setUserData] = useState({
    name: "Juan",
    lastName: "Rodriguez",
    phone: "2456789453",
    email: "juanro@gmail.com",
    address: "los tilos 2234",
    password: "",
  });

  return (
    <div className='userProfile'>
      {!userInfo.isAdmin && (
        <Link to="/">
          <button className="btnHome">BACK TO HOME</button>
        </Link>
      )}
      <div className='profileCard'>
        <div className='left'>
          <img src={usuario} alt="" />
          <p>Id = {userInfo._id}</p>
          <div className='left-btns'>
            <button onClick={showLegalInfo}> Legal information </button>
            <button onClick={signOutHandler} className='singOut-btn'> Sign out</button>
          </div>
        </div>
        <div className='right'>
          <h1>Nombre: {userInfo?.name} </h1>
          <h3><span>Email address: </span> {userInfo.email}</h3>
          {/* <h3><span>Address: </span>{userData.address}</h3> */}
          {/* <h3><span>Phone number: </span> {userData.phone}</h3> */}
          {!isEditing ? (
            <button className='editProfile-btn' onClick={handleEditProfile}>Edit profile</button>
          ) : (
            <>
              <EditProfile />
              <button className='exitEditMode-btn' onClick={() => setIsEditing(false)}>Exit Edit Mode</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
          }

          export default Profile;