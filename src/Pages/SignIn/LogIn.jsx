// Utils
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppCartContext } from "../../Context";

const LogIn = ({ setRenderLogin }) => {
  const { account, signOut } = useContext(AppCartContext);
  const isAccountExist = Object.keys(account).length > 0;

  return (
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-80 mt-6">
        Hey There!
      </h1>
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email:</span>
          <span>{isAccountExist && account.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <span>{isAccountExist && account.password}</span>
        </p>
        {
          (!isAccountExist) && (
            <>
              <Link to="/">
                <button
                  className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
                  disabled={!isAccountExist}
                >
                  Log in
                </button>
              </Link>
              <div className="text-center">
                <a
                  href="/"
                  className="font-light text-xs underline underline-offset-4"
                >
                  Forgot my password
                </a>
              </div>
              <button
                className="border border-black disabled:text-black/40 disabled:roder-black/40 mt-6 rounded-lg py-3"
                disabled={isAccountExist}
                onClick={() => setRenderLogin(false)}
              >
                Sign up
              </button>
            </>
          )
        }
      </div>
    </>
  );
};

export default LogIn;
