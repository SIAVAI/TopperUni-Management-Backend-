import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidations } from './academicFaculty.validation';

const router = express.Router();

router.get('/', academicFacultyController.getAllAcademicFaculty);
router.get('/:id', academicFacultyController.getSingleAcademicFacultyById);
router.patch(
  '/update/:id',
  validateRequest(
    academicFacultyValidations.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculty,
);
router.post(
  '/create-academic-faculty',
  validateRequest(
    academicFacultyValidations.createAcademicFacultyValidationSchema,
  ),
  academicFacultyController.createAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
