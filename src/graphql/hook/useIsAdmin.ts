import { useLazyQuery } from "@apollo/client";
import { IS_ADMIN } from "../queries";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export function useIsValidToken() {
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const token = Cookies.get("admin");

    if (token) {
      validateToken({ variables: { token } });
    }
  }, []);

  const [validateToken] = useLazyQuery(IS_ADMIN, {
    onCompleted: (data) => {
      setIsValidToken(data.verifyToken.user === "admin");
    },
    onError: (error) => {
      setIsValidToken(false);
    },
    context: { clientName: "endpoint4" },
  });

  return isValidToken;
}
