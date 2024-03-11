const Expense = require("../models/Expense");
const income = require("../models/incomeSchema")

exports.addExpense = async(req,res) => {
    try {
        
        const newExpense = await Expense(req.body);
        await newExpense.save();
         return res.status(200).json({success:true,message:'saved successfuly'})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }

}
exports.addIncome = async(req,res) => {
    try {
        
        const newIncome = await income(req.body);
        await newIncome.save();
         return res.status(200).json({success:true,message:'saved successfuly'})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }

}
exports.getExpenses = async(req,res)=>{
    try {
        
        let getExpenses = await Expense.find({}).sort({createdAt:-1});
        if(!getExpenses){
            return res.json({success:false,error:'no expense found'})
        }
    
        return res.status(200).json({success:true,Expense:getExpenses})
    } catch (error) {
        return res.status(404).json({success:false,error:error.message})
    }
}
exports.getIncome = async(req,res)=>{
    try {
        
        let getIncome = await income.find({}).sort({createdAt:-1});
        if(!getIncome){
            return res.json({success:false,error:'no income found'})
        }
    
        return res.status(200).json({success:true,Income:getIncome})
    } catch (error) {
        return res.status(404).json({success:false,error:error.message})
    }
}
exports.deleteExpense = async(req,res)=>{
    console.log(req.params.id)
    try {
      const deleted= await Expense.findByIdAndDelete({_id:req.params.id});
      if(deleted===null){
        return res.status(500).json({success:false,error:"unable to delete"});

      }
    return res.status(200).json({success:true,message:"Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,error:error.message})
    }
}
exports.updateIncome = async(req,res)=>{
    console.log(req.params.id)
    try {
      const deleted= await income.findByIdAndDelete({_id:req.params.id});
      if(deleted===null){
        return res.status(500).json({success:false,error:"unable to delete"});

      }
    return res.status(200).json({success:true,message:"Deleted successfully"});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,error:error.message})
    }
}