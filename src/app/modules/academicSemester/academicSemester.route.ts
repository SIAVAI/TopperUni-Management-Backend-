import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidations } from './academicSemester.validation';
import { academicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.academicSemesterValidationSchema),
  academicSemesterControllers.createAcademicSemester,
);

router.get('/', academicSemesterControllers.getAllAcademicSemesters);
router.get('/:id', academicSemesterControllers.getSingleAcademicSemester);
router.patch('/:id', academicSemesterControllers.updateAcademicSemester);

export const AcademicSemesterRoutes = router;
