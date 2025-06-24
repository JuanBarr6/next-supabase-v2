"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const usePreventNavigation = (shouldPrevent: boolean) => {
  const router = useRouter();

  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      if (shouldPrevent) {
        e.preventDefault();
        e.returnValue = ""; // Required for confirmation dialog
      }
    };

    const handlePopState = () => {
      if (shouldPrevent) {
        const confirmLeave = window.confirm(
          "¿Seguro que quieres salir? Perderás los cambios no guardados.",
        );
        if (!confirmLeave) {
          history.pushState(null, "", location.href); // Prevent navigation
        }
      }
    };

    window.addEventListener("beforeunload", handleWindowClose);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [shouldPrevent]);
};
