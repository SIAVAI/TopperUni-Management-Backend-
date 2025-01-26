import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
//import { studentValidations } from './student.validation';

const router = express.Router();

router.get(
  '/',

  StudentController.getAllStudents,
);
router.get('/:id', validateRequest, StudentController.getStudentById);

export const StudentRoutes = router;
