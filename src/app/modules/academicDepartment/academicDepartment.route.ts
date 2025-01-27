import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidations } from './academicDepartment.validation';
import { academicDepartmentControllers } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    academicDepartmentValidations.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.createAcademicDepartment,
);

router.get(
  '/:departmentId',
  academicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    academicDepartmentValidations.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentControllers.updateAcademicDepartment,
);

router.get('/', academicDepartmentControllers.getAllAcademicDepartments);

export const AcademicDepartmentRoutes = router;
