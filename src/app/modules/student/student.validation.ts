import { z } from 'zod';

const userNameSchema = z.object({
  firstName: z.string().nonempty('First name is required'),
  middleName: z.string().nonempty('Middle name is required'),
  lastName: z.string().nonempty('Last name is required'),
});

const guardianSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required"),
  fatherOccupation: z.string().nonempty("Father's occupation is required"),
  fatherContactNo: z.string().nonempty("Father's contact number is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  motherOccupation: z.string().nonempty("Mother's occupation is required"),
  motherContactNo: z.string().nonempty("Mother's contact number is required"),
});

const localGuardianSchema = z.object({
  name: z.string().nonempty("Local guardian's name is required"),
  occupation: z.string().nonempty("Local guardian's occupation is required"),
  contactNo: z.string().nonempty("Local guardian's contact number is required"),
  address: z.string().nonempty("Local guardian's address is required"),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).min(6),
    student: z.object({
      name: userNameSchema,
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.string(),
      email: z
        .string()
        .email('Invalid email format')
        .nonempty('Email is required'),
      contactNo: z.string().nonempty('Contact number is required'),
      emergencyContactNo: z
        .string()
        .nonempty('Emergency contact number is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string().nonempty('Present address is required'),
      permanentAddress: z.string().nonempty('Permanent address is required'),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImg: z.string().url('Invalid URL format').optional(),
      admissionSemester: z.string(),
    }),
  }),
});

export const studentValidations = { createStudentValidationSchema };
