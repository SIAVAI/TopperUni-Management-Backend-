import { model, Schema } from 'mongoose';
// import { TStudent, StudentMethod, StudentModel } from './student.interface';
import { TStudent } from './student.interface';

const userNameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

//const studentSchema = new Schema<TStudent, StudentModel, StudentMethod>({
const studentSchema = new Schema<TStudent>({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'User',
  },
  name: userNameSchema,

  gender: { type: String, required: true, enum: ['male', 'female'] },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
});

studentSchema.pre('save', function (next) {
  next();
});

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// export const Student = model<TStudent, StudentModel>('Student', studentSchema);
export const Student = model<TStudent>('Student', studentSchema);
