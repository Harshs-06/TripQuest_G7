const group = require("../model/model");

const fs = require('fs');
const path = require('path');

const create_group = async (req,res)=>{
    try{
        console.log("Hello")
        const {GroupName,Destination,Cost,Members,Transport} = req.body;
        if(!GroupName || !Destination || !Cost|| !Members|| !Transport){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        const travel_info = await group.create(
            req.body
        );
        console.log(travel_info);
        res.status(200).json({
            success:true,
            message:"Group Created Successfully",
            travel_info
        });
    }catch(err){
        console.error("err");
        res.status(500).json({
            success:false,
            message:"Failed to create group"
        });
    }
};


const see_group = async (req,res)=> {
    try{
        const see = await group.find({});

        if(!see){
            return res.status(404).json({
                success:false,
                message:"Groups Not found!!"
            });
        }

        res.status(200).json({
            success:true,
            message:"Groups fetched successfully!!",
            see
        });
    }catch(err){
        return res.status(500).json({
            success:false,
            message:"Failed to get groups"
        });
    }
};

const delete_group = async (req,res)=>{
    try{
        const {gid} = req.params;
        let grp = await group.findOne({_id:gid});

        if(!grp){
            return res.status(404).json({
                success:false,
                message:"Group not found"
            });
        }

        grp = await group.findByIdAndDelete({_id:gid});

        res.status(200).json({
            success:true,
            message:"Group removed successfully",
            grp

        });
    }catch(err) {
        return res.status(400).json({
            success:false,
            message:"Failed to remove group"
        });
    }
};

const update_group = async (req,res)=>{
    try{
        const gid= req.params.gid;
        const {GroupName,Destination,Cost,Members,Transport} = req.body;

        const modify = await group.findByIdAndUpdate(
            {_id:gid},
            {
                GroupName,
                Destination,
                Cost,
                Members,
                Transport
            },
            {new:true}
        );
        if (!modify){
            return res.status(401).json({
                success:false,
                message:"Group not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Group Updated Successfully",
            club,
        });
    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Failed to update group"
        });
    }
};

module.exports = {create_group,see_group,delete_group,update_group};





































































