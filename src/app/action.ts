"use server";

export async function doWork(input: { name: string; contents: string }) {
  console.log("do work on the server", input);
  return { success: true };
}
