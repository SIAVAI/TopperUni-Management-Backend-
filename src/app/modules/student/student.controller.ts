/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getALLStudentsFromDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students Fetched Successfully',
    data: result,
  });
});

const getStudentById: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await StudentServices.getStudentByIdFromDb(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Fetched Successfully',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getStudentById,
};
