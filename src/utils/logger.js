export const logger = (msg, title = "LOG") => {
  if (import.meta.env.VITE_MODE === "PROD") {
    return;
  }

  console.log("-----------------------------");
  console.log(`[${title}]: ${msg}`);
  console.log("-----------------------------");
};
