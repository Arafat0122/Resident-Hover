import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Img from '../../assets/login.png';

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
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div
                style={{ backgroundImage: `url(${Img})` }}
                className="w-full max-w-xl mx-auto p-8 rounded-lg shadow-lg bg-opacity-80 bg-gray-800 text-white animate__animated animate__zoomIn"
            >
                <h2 className="mb-6 text-3xl font-bold text-center">Update Your Account</h2>
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2 mb-4">
                        <img src={user ? `${user.photoURL}` : 'https://cdn-icons-png.flaticon.com/512/3541/3541871.png'} alt="Profile" />
                    </div>
                    <p className="text-xl font-bold bg-[#00000050] py-2 px-4 rounded-full">{user.displayName}</p>
                </div>
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder={user.displayName}
                                defaultValue={user.displayName}
                                required
                                className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-700 text-white focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={user.email}
                                defaultValue={user.email}
                                disabled
                                className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-700 text-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                placeholder={user.photoURL}
                                defaultValue={user.photoURL}
                                required
                                className="w-full px-4 py-2 border rounded-md border-gray-600 bg-gray-700 text-white focus:border-violet-400 focus:ring-1 focus:ring-violet-400"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-blue-500 to-lime-500 text-white hover:bg-gradient-to-l transition duration-300"
                    >
                        Save Updates
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;