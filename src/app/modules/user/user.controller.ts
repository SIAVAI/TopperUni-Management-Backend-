import { RequestHandler } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createStudentIntoDb(
      password,
      studentData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

export const userController = {
  createStudent,
};
