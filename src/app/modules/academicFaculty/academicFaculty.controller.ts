/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { academicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res, next) => {
  const result = await academicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty Created Successfully',
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res, next) => {
  const result = await academicFacultyServices.getAllAcademicFacultyFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Faculties are fetched successfully',
    data: result,
  });
});

const getSingleAcademicFacultyById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result =
    await academicFacultyServices.getSingleAcademicFacultyFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The single academic faculty data is fetched successfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;
  const result =
    await academicFacultyServices.updateSingleAcademicFacultyFromDB(
      id,
      payload,
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The academic faculty data is updated successfully',
    data: result,
  });
});

export const academicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFacultyById,
  updateAcademicFaculty,
};
