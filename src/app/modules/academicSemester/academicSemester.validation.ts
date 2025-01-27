import { z } from 'zod';

// Define the enums
const AcademicSemesterName = z.enum(['Autumn', 'Summer', 'Fall']);
const AcademicSemesterCode = z.enum(['01', '02', '03']);
const Months = z.enum([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]);

const academicSemesterValidationSchema = z.object({
  body: z.object({
    name: AcademicSemesterName,
    year: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        'Year must be a valid date in YYYY-MM-DD format',
      )
      .nonempty('Year is required'),
    code: AcademicSemesterCode,
    startMonth: Months,
    endMonth: Months,
  }),
});

export const academicSemesterValidations = { academicSemesterValidationSchema };
