import { z } from "zod";

export const projectSchema = z.object({
    name: z
        .string()
        .min(5, "Name must be at least 5 characters")
        .max(30, "Name cannot exceed 30 characters"),

    project_key: z
        .string()
        .trim()
        .min(6, "Project key must be exactly 6 characters")
        .max(6, "Project key must be exactly 6 characters")
        .regex(
            /^[A-Z]{3}[0-9]{3}$/,
            "Project key must be in format like WAC236"
        ),

    category: z.enum([
        "web",
        "mobile",
        "backend",
        "devops",
        "other",
    ]),

    description: z
        .string()
        .min(5, "Description must be at least 5 characters")
        .max(100, "Description cannot exceed 60 characters"),

    target_completion_date: z
        .string()
        .min(1, "Target completion date is required"),

    // priority: z.enum(["low", "medium", "high"]),

    // visibility: z.enum(["private", "team"]),
});

export type ProjectFormData = z.infer<typeof projectSchema>;