import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../../assets';
import { Toggle } from '../../index';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2">
        <NavLink to="/">
          <img className="w-12" src={logo} alt="logo" />
        </NavLink>
        <div onClick={toggler} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav
        className={`${
          !isOpen ? 'hidden' : null
        } text-center md:flex justify-between`}
      >
        <ul className="text-dark-content dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggler}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggler}>
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggler}>
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggler}>
              Projects
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/contact" onClick={toggler}>
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <Toggle />
          <li>
            <a href="https://www.instagram.com/aldimardiansh/" target="_blank" rel="noreferrer noopener">
              <svg
                className="fill-dark-primary dark:fill-light-primary"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 2.7c4 0 4.479.015 6.061.087 1.464.067 2.257.311 2.785.517.7.273 1.2.6 1.725 1.125s.852 1.025 1.125 1.725c.206.528.45 1.321.517 2.785.072 1.582.087 2.061.087 6.061s-.015 4.479-.087 6.061c-.067 1.464-.311 2.257-.517 2.785-.273.7-.6 1.2-1.125 1.725s-1.025.852-1.725 1.125c-.528.206-1.321.45-2.785.517-1.582.072-2.061.087-6.061.087s-4.479-.015-6.061-.087c-1.464-.067-2.257-.311-2.785-.517-.7-.273-1.2-.6-1.725-1.125s-.852-1.025-1.125-1.725c-.206-.528-.45-1.321-.517-2.785-.072-1.582-.087-2.061-.087-6.061s.015-4.479.087-6.061c.067-1.464.311-2.257.517-2.785.273-.7.6-1.2 1.125-1.725s1.025-.852 1.725-1.125c.528-.206 1.321-.45 2.785-.517 1.582-.072 2.061-.087 6.061-.087zm0-2.7c-4.074 0-4.584.017-6.185.09-1.597.073-2.687.326-3.641.697-.986.385-1.823.9-2.657 1.734S1.168 4.195.783 5.181c-.371.954-.624 2.044-.697 3.641-.073 1.601-.09 2.111-.09 6.185s.017 4.584.09 6.185c.073 1.597.326 2.687.697 3.641.385.986.9 1.823 1.734 2.657s1.671 1.349 2.657 1.734c.954.371 2.044.624 3.641.697 1.601.073 2.111.09 6.185.09s4.584-.017 6.185-.09c1.597-.073 2.687-.326 3.641-.697.986-.385 1.823-.9 2.657-1.734s1.349-1.671 1.734-2.657c.371-.954.624-2.044.697-3.641.073-1.601.09-2.111.09-6.185s-.017-4.584-.09-6.185c-.073-1.597-.326-2.687-.697-3.641-.385-.986-.9-1.823-1.734-2.657S25.203.873 24.217.488c-.954-.371-2.044-.624-3.641-.697-1.601-.073-2.111-.09-6.185-.09zm0 7.297c-4.254 0-7.703 3.449-7.703 7.703s3.449 7.703 7.703 7.703 7.703-3.449 7.703-7.703-3.449-7.703-7.703-7.703zm0 12.706c-2.763 0-5.003-2.24-5.003-5.003s2.24-5.003 5.003-5.003 5.003 2.24 5.003 5.003-2.24 5.003-5.003 5.003zm9.81-13.008c0 .994-.806 1.8-1.8 1.8s-1.8-.806-1.8-1.8.806-1.8 1.8-1.8 1.8.806 1.8 1.8z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aldi-mardiansah/" target="_blank" rel="noreferrer noopener">
              <svg
                className="fill-dark-primary dark:fill-light-primary"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25.6055 0H4.3945C1.9695 0 0 1.9695 0 4.3945V25.6054C0 28.0305 1.9695 30 4.3945 30H25.6054C28.0305 30 30 28.0305 30 25.6054V4.3945C30 1.9695 28.0305 0 25.6055 0ZM10.1367 23.5781H6.2109V11.3789H10.1367V23.5781ZM8.1738 9.6211C6.8554 9.6211 5.7891 8.5547 5.7891 7.2363C5.7891 5.918 6.8554 4.8516 8.1738 4.8516C9.4922 4.8516 10.5586 5.918 10.5586 7.2363C10.5586 8.5547 9.4922 9.6211 8.1738 9.6211ZM24.2227 23.5781H20.2969V17.4023C20.2969 15.8789 20.2734 13.9219 18.1758 13.9219C16.0547 13.9219 15.7383 15.5977 15.7383 17.3203V23.5781H11.8125V11.3789H15.5625V13.1367H15.6094C16.1016 12.1406 17.3906 11.0977 19.332 11.0977C23.3086 11.0977 24.2227 13.7812 24.2227 17.2734V23.5781Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/AldiMardiansah" target="_blank" rel="noreferrer noopener">
              <svg
                className="fill-dark-primary dark:fill-light-primary"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
