import type { ActionFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const action: ActionFunction = async ({ params }) => {
    console.log(params)
  const newTask = await prisma.task.deleteMany()
  console.log(newTask);
  return newTask;
  
};
