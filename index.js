const express=require("express"),app=express(),cors=require("cors"),mongoose=require("mongoose");app.use(cors({methods:["POST","GET"],origin:["https://tclottery.vercel.app"],credentials:!0})),app.use(express.json());let mongoose_url="mongodb+srv://roniroy2080:am208014@cluster0.ioe2dyo.mongodb.net/Tc_lottery?retryWrites=true&w=majority";mongoose.connect(mongoose_url,{writeConcern:{w:"majority"}}).then((()=>console.log("connection success"))).catch((s=>console.log(`Something Went Wrong : ${s.message}`)));const url="https://9987cw.co/api/webapi/GetNoaverageEmerdList";let timer,Users_Schema=require("./Schema").User_Schema_details,isError_message=null,isStart=!1,Running_time=0;function start(){timer=setInterval((()=>{Running_time+=1;try{fetch(url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({typeId:1,random:"ace40678400a46ddaacdc75a3fc71140",signature:"B4A67B3ED0D3C4A35255B256EC509DA5",timestamp:1710703532,pageSize:10})}).then((s=>s.json())).then((async s=>{let e,t=s.data.list;e=!(t[0].number>4);var a=0,r=!0;if(e?t.map((s=>{if(!(s.number<5&&r))return r=!1;a+=1})):t.map((s=>{if(!(s.number>4&&r))return r=!1;a+=1})),a>5){let s=Users_Schema(),e=await s.findOne();6==a&&await s.updateOne({_id:e._id},{$set:{Number_6:e.Number_6+1}}),7==a&&await s.updateOne({_id:e._id},{$set:{Number_7:e.Number_7+1}}),8==a&&await s.updateOne({_id:e._id},{$set:{Number_8:e.Number_8+1}}),9==a&&await s.updateOne({_id:e._id},{$set:{Number_9:e.Number_9+1}}),10==a&&await s.updateOne({_id:e._id},{$set:{Number_10:e.Number_10+1}})}}))}catch(s){isStart=!1,clearInterval(timer),isError_message=s.message}}),6e4)}setInterval((async()=>{if(!isStart){let s=Users_Schema();(await s.findOne()).Started&&(start(),isStart=!0)}}),1e5),app.get("/data",(async(s,e)=>{let t=Users_Schema();try{t=await t.findOne().select("-admin_password -_id -Started")}catch(s){return e.status(201).json({success:!1,message:"Server Error",isStart:isStart})}e.status(200).json({success:!0,message:"success login",isStart:isStart,data:t,timer:Running_time})})),app.post("/start",(async(s,e)=>{let{password:t}=s.body;if(!t)return e.status(201).json({success:!1,message:"Password Does Not Exist",isStart:isStart});let a=Users_Schema(),r=a;try{a=await a.findOne({_id:"65f8b0585ed4d0872ec426fd"})}catch(s){return e.status(201).json({success:!1,message:"Something Went Wrong On Server"})}if(a.admin_password!=t)return e.status(201).json({isStart:isStart,success:!1,message:"Password Is Wrong"});if(isStart)e.status(200).json({success:!0,message:"Already Started",isStart:isStart});else{try{await r.findOneAndUpdate({_id:a._id},{$set:{Started:!0}})}catch(s){console.log(s)}start(),isStart=!0,e.status(200).json({success:!0,message:"Start Success",isStart:isStart})}})),app.post("/stop",(async(s,e)=>{let{password:t}=s.body;if(!t)return e.status(201).json({success:!1,message:"Password Does Not Exist",isStart:isStart});let a=Users_Schema(),r=a;if(a=await a.findOne({_id:"65f8b0585ed4d0872ec426fd"}),a.admin_password!=t)return e.status(201).json({success:!1,message:"Password Is Wrong",isStart:isStart});clearInterval(timer),isStart=!1;try{await r.findOneAndUpdate({_id:a._id},{$set:{Started:!1}})}catch(s){console.log(s)}e.status(200).json({success:!0,message:"Stop Success",isStart:isStart})})),app.listen(5500,console.log("We Are Live At PORT : 5500"));
