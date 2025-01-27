import config from '../../config';

import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { UserUtils } from './user.utils';

const createStudentIntoDb = async (password: string, studentData: TStudent) => {
  //if student is already created
  const student = await Student.findOne({ email: studentData.email });
  if (student) {
    throw new Error('Student already exists');
  }
  const userData: Partial<TUser> = {};

  // Assign password
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  // Generate user ID
  const admissionSemester = await AcademicSemesterModel.findById(
    studentData.admissionSemester,
  );
  if (!admissionSemester) {
    throw new Error('Invalid admission semester');
  }

  userData.id = UserUtils.generateStudentId(admissionSemester);

  // Create a user
  const newUser = await User.create(userData);
  if (!newUser) {
    throw new Error('Failed to create user');
  }

  // Link user and create student
  studentData.id = newUser.id;
  studentData.user = newUser._id;

  const newStudent = await Student.create(studentData);
  if (!newStudent) {
    throw new Error('Failed to create student');
  }

  return newStudent;
};

const getAllUsersFromDB = async () => {
  const result = User.find();
  return result;
};
const getSingleUserByIdFromDB = async (id: string) => {
  const result = User.findById(id);
  return result;
};

export const UserServices = {
  createStudentIntoDb,
  getAllUsersFromDB,
  getSingleUserByIdFromDB,
};
