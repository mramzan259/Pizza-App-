"use server";

import { cookies } from "next/headers";

export const deleteCookies = async () => {
  (await cookies()).delete("authToken");
  return;
};
