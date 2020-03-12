export async function registerWorker(url: string) {
  if ("serviceWorker" in navigator) {
    const sw = navigator.serviceWorker;

    try {
      const registration = await sw.register(url, { scope: "/" });

      if (registration.installing) {
        //
      } else if (registration.waiting) {
        //
      } else if (registration.active) {
        await registration.update();

        if (sw.controller) {
          console.log("controller available");
        }
      }
    } catch (error) {
      // registration failed
      // console.log(`Registration failed with ${error}`);
    }
  }
}
