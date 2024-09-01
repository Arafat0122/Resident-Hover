import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

import Img from '../../assets/login.png'

const UpdateProfile = () => {
    const { updateUserProfile, user } = useContext(AuthContext);

    const handleUpdateProfile = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        // const email = form.get('email');
        const photo = form.get('photo');

        updateUserProfile(name, photo)
            .then(() => {
                toast.success('Profile updated successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                toast.error(`${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }
    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div style={{backgroundImage: `url(${Img})`}} className="w-full max-w-xl mx-auto p-4 rounded-md shadow sm:p-8 text-gray-800 animate__animated animate__zoomIn">
                <h2 className="mb-3 text-3xl font-bold text-white text-center">Update your account</h2>
                <div className="avatar flex flex-col items-center my-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-5">
                        <img src={user ? `${user.photoURL}` : 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png'} />
                    </div>
                    <p className="text-xl font-bold text-white bg-[#00000050] py-2 px-5 rounded-full">{user.displayName}</p>
                </div>
                <form onSubmit={handleUpdateProfile} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-white">Name</label>
                            <input type="text" name="name" placeholder={user.displayName} required className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-white">Email address:</label>
                            <input type="email" name="email" placeholder={user.email} disabled className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-white">Photo URL</label>
                            <input type="text" name="photo" placeholder={user.photoURL} required className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                        </div>
                    </div>
                    <button className="btn w-full px-8 py-3 font-semibold rounded-md bg-gradient-to-r from-blue-500 to-lime-500 text-gray-50">Save Updates</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;