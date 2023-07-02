const Task = require('../models/model')

const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const createTasks = async(req,res)=>{
    try{
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks})

    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const getSingleTask = async (req,res)=>{
    try{
        const{id:taskId} = req.params
        const tasks = await Task.findOne({_id:taskId})
        if(!tasks){
            return  res.status(404).json({msg:`Task with id ${taskId} not available`})
        }
        res.status(201).json({tasks})

    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const updateTask = async (req,res)=>{
    try{
        const{id:taskId} = req.params
        const tasks = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!tasks){
            return  res.status(404).json({msg:`Task with id ${taskId} not available`})
        }
        res.status(201).json({tasks})

    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const deleteTask = async (req,res)=>{
    try{
        const{id:taskId} = req.params
        const tasks = await Task.findOneAndDelete({_id:taskId})
        if(!tasks){
            return  res.status(404).json({msg:`Task with id ${taskId} not available`})
        }
        res.status(201).json({tasks})

    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

module.exports = {
    getTasks, createTasks, updateTask, deleteTask, getSingleTask
}


