import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(5, "Description must be at least 5 characters")
    .max(500, "Description cannot exceed 500 characters"),

  project: z
    .string()
    .min(1, "Please select a project"),

//   members: z
//     .array(z.string())
//     .optional(),

  status: z
    .enum(["todo", "in-progress", "in-review", "done"])
    .default("todo"),

  priority: z
    .enum(["low", "medium", "high"])
    .default("medium"),
});

export type TaskFormData = z.input<typeof taskSchema>;