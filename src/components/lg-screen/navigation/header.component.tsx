"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import Link from "next/link";
import Register from "@/components/modal/auth/register.modal";
import Login from "@/components/modal/auth/login.modal";
import GeneralMenu from "@/components/modal/navigation/general.modal";
import ServiceMenu from "@/components/modal/navigation/service.modal";
// import Register from "./modal/auth/register.auth";
// import GeneralMenu from "./modal/general/general.modal";
// import ServiceMenu from "./modal/service/service.modal";

const TopBar = () => {
  // Menu State
  const [modalState, setModalState] = useState<String>("none");
  const [isModalOpen, setModalOpen] = useState(false);

  // Authentication State
  const [isVerified, setVerified] = useState<boolean>(true);
  const [token, setToken] = useState("");

  /**
   * Token
   */
  useEffect(() => {
    if (token) {
      setVerified(true);
    }
  }, [token]);

  const tokenSetter = () => {
    setToken(String(localStorage.getItem("token")));
  };

  /**
   * Auth
   */
  const SignOut = () => {
    setVerified(false);
    setToken("");
    localStorage.removeItem("token");
  };

  const SignIn = () => {
    setModalState("Sign In");
    setModalOpen(true);
  };

  const SignUp = () => {
    setModalState("Sign Up");
    setModalOpen(true);
  };

  const CloseModal = () => {
    setModalState("none");
    setModalOpen(false);
  };

  /**
   * Menu
   */
  const handleMenuClick = (menuType: String) => {
    if (modalState === menuType && isModalOpen) {
      // Close the currently open menu if the same button is clicked
      CloseModal();
    } else {
      setModalState(menuType);
      setModalOpen(true);
    }
  };

  return (
    <div>
      <div className="flex flex-row px-28 py-4 h-[58px] bg-gray-700 justify-between border-b-2 rounded-sm text-white">
        <div className="w-1/5">
          <Link href={"/"} className="text-2xl font-bold">
            SBLink
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-6 w-4/5">
          {isVerified ? (
            <div>
              <p onClick={SignOut} className="cursor-pointer">
                Sign Out
              </p>
            </div>
          ) : (
            <div className="flex flex-row-reverse gap-6">
              <p onClick={SignIn} className="cursor-pointer">
                Sign In
              </p>
              <p onClick={SignUp} className="cursor-pointer">
                Sign Up
              </p>
            </div>
          )}
          <p
            onClick={() => handleMenuClick("ServiceMenu")}
            className="cursor-pointer flex flex-row items-center gap-2"
          >
            Services
            {modalState === "ServiceMenu" ? (
              <IoIosClose size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </p>
          <p
            onClick={() => handleMenuClick("GeneralMenu")}
            className="cursor-pointer flex flex-row items-center gap-2"
          >
            General
            {modalState === "GeneralMenu" ? (
              <IoIosClose size={20} />
            ) : (
              <IoIosArrowDown size={20} />
            )}
          </p>
        </div>
      </div>

      {isModalOpen &&
        (modalState === "Sign Up" ? (
          <Register
            modalSetting={isModalOpen}
            closeFunc={CloseModal}
            tokenSetter={tokenSetter}
          />
        ) : modalState === "Sign In" ? (
          <Login
            modalSetting={isModalOpen}
            closeFunc={CloseModal}
            tokenSetter={tokenSetter}
          />
        ) : modalState === "GeneralMenu" ? (
          <GeneralMenu modalSetting={isModalOpen} closFunc={CloseModal} />
        ) : (
          <ServiceMenu modalSetting={isModalOpen} closFunc={CloseModal} />
        ))}
    </div>
  );
};

export default TopBar;
