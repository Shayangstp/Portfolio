import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

const PageReLoader = () => {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      ref.current.continuousStart();
    };

    const handleRouteChangeComplete = () => {
      ref.current.complete();
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div>
      <LoadingBar color="#f11946" ref={ref} />
    </div>
  );
};

export default PageReLoader;
