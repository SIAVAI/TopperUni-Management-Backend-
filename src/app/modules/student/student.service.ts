import { Student } from './student.model';

const getALLStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getStudentByIdFromDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  getALLStudentsFromDb,
  getStudentByIdFromDb,
};
