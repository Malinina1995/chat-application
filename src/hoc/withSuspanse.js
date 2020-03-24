import React, { Suspense } from "react";
import { Preloader } from "../Components/PreloaderComponent/Preloader";

export const withSuspanse = Component => {
  return props => {
    return <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  };
};
