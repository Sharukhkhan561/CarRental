import User from "../models/user";

// API to change role to user
export const changeRoleToOwner=async(req,res)=>{
try {
    const {_id} = req.user;
    await User.findByIdAndUpdate(_id,{role:"owner"})
    res.json({success: true , message: "Now you Can List Cars"})
} catch (error) {
    console.log(error.message);
    res.json({success: false, message: error.message})
}
}

// API to list the cars
export const addCar = async(req,res)=>{
try {
    const {_id} = req.user;
    let car = JSON.parse(req.body.carData)
    const imageFile = req.file;
} catch (error) {
    console.log(error.message);
    res.json({success: false,message:error.message})
}
}

