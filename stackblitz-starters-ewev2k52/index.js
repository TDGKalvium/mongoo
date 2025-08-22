const mongoose = required("mongoose");
const studentSchema = new mongoose.schema({
  name:{type:String , required:true},
  Email:{
    type:String,
    unique:true,
    required:true
  },

  enrollmentDate:{
    type:Date,
    default:Date.now
  }
});

const courseSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  
  description :{
    type:String
  },

  durationWeeks: {
    type: Number,
    required: true
  },

  instructor:{
    type:String,
    required:true
  }
});

const Student = mongoose.model("Student" , studentSchema);
const Student = mongoose.model("Course" , courseSchema);




