import { TAcademicFaculty } from './academicFaculty.interface';
import { academicFacultyModel } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await academicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFacultyFromDB = async () => {
  const result = await academicFacultyModel.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await academicFacultyModel.findById(id);
  return result;
};

const updateSingleAcademicFacultyFromDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await academicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  if (!result) {
    throw Error('Something went wrong!!');
  }
  return result;
};

export const academicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromDB,
  updateSingleAcademicFacultyFromDB,
};
