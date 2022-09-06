import Cabin from "../models/Cabin.js";

export const createCabin = async (req,res,next)=>{
    const newCabin = new Cabin(req.body) //req is what we r taking from the user and .body is gonna store all the cabin info


    try {
        const savedCabin = await newCabin.save()
        res.status(200).json(savedCabin) //200 je successful   
    } catch (err) {
        next(err);
    }
};

export const updateCabin = async (req,res,next)=>{
    try {
        const updatedCabin = await Cabin.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new:true } //after updating its gonna return the new version of document
         );
        res.status(200).json(updatedCabin)    
    } catch (err) {
        next(err);
    }
};

export const deleteCabin = async (req,res,next)=>{
    try {
        await Cabin.findByIdAndDelete(
           req.params.id
        );
       res.status(200).json("Hotel has been deleted.")    
   } catch (err) {
        next(err);
    }
};

export const getCabin = async (req,res,next)=>{
    
    try {
        const cabin = await Cabin.findById(
            req.params.id
         );
        res.status(200).json(cabin)    
    } catch (err) {
        next(err);
    }
};

export const getCabins = async (req,res,next)=>{
    try {
        const cabins = await Cabin.find();
        res.status(200).json(cabins)    
    } catch (err) {
        next(err); 
    }
};
