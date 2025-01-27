import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidations } from './academicSemester.validation';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.academicSemesterValidationSchema),
  academicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
