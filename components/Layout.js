import { useState } from "react";
import React from "react";
import {
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Button,
  Stack,
  // ChakraLink as Link,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  ChevronDownIcon,
  EmailIcon,
  ExternalLinkIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import Link from "next/link";
import Cart from "./Cart";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const menuToggle = useColorModeValue("black", "white");

  return (
    <>
      <Stack
        as="header"
        zIndex="1"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        position="fixed"
        top="0"
        width="100%"
      >
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                  fill="currentColor"
                />
              </svg>
              <span className="mx-1 text-sm">NY</span>
            </div>
            <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
              Jungle to Jungle
            </div>
            <div className="flex items-center justify-end w-full">
              {/* <span className="snipcart-items-count">0</span> */}
              <button
                // onClick={handleOpen}
                className="snipcart-checkout text-gray-600 focus:outline-none mx-4 sm:mx-0"
              >
                {/* <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg> */}
                <svg
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt=""
                  title=""
                  className="snipcart-cart-header__icon snipcart__icon--black-dark snipcart__icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z"
                    fill="#313749"
                  ></path>
                </svg>
              </button>
              {/* <div
                className={`${
                  cartOpen
                    ? "translate-x-0 ease-out"
                    : "translate-x-full ease-in"
                } fixed right-0 top-0 max-w-xs z-10 w-full h-110 px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-gray-700">
                    Your cart
                  </h3>
                  <button
                    onClick={handleOpen}
                    className="text-gray-600 focus:outline-none"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <Cart />
              </div> */}
              <div className="flex sm:hidden">
                <button
                  onClick={handleMenu}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <nav
            className={`${
              menuOpen ? "" : "hidden"
            } sm:flex sm:justify-center sm:items-center mt-4`}
          >
            <div className="flex flex-col sm:flex-row">
              <Link href="/">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Home
                </a>
              </Link>
              <Link href="/products">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  Shop
                </a>
              </Link>
              <Link href="/about">
                <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">
                  About
                </a>
              </Link>
            </div>
          </nav>
          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <input
              className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </Stack>
      <main className="mt-48 mb-8">{children}</main>
      <footer className="bg-gray-200">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#"
            className="text-xl font-bold text-gray-500 hover:text-gray-400"
          >
            Jungle to Jungle
          </a>
          <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
        </div>
      </footer>
    </>
    /* <Stack
          direction="row"
          position="fixed"
          top="1rem"
          left="1rem"
          spacing={1}
          align="center"
        >
          <NextLink href="/" passHref>
            <Button variant="outline" colorScheme="green">
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Button variant="outline" colorScheme="green">
              Blog
            </Button>
          </NextLink>
          <Menu>
            <MenuButton
              colorScheme="green"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              More
            </MenuButton>
            <MenuList color={menuToggle}>
              <MenuGroup title="Social">
                <MenuItem
                  component={Link}
                  as="a"
                  alt="Opens in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={"https://www.linkedin.com/in/gabrieljhicks/"}
                  icon={<ExternalLinkIcon />}
                >
                  LinkedIn
                </MenuItem>
                <MenuItem
                  component={Link}
                  as="a"
                  alt="Opens in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={"https://github.com/gabrielhicks/"}
                  icon={<ExternalLinkIcon />}
                >
                  GitHub
                </MenuItem>
                <MenuItem
                  component={Link}
                  as="a"
                  alt="Opens in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={"https://twitter.com/gabrielhicksdev"}
                  icon={<ExternalLinkIcon />}
                >
                  Twitter
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Contact">
                <MenuItem
                  component={Link}
                  as="a"
                  alt="Opens in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={"https://gabrielhicks.dev/HicksResume.pdf"}
                  icon={<ExternalLinkIcon />}
                >
                  Resume
                </MenuItem>
                <MenuItem
                  component={Link}
                  as="a"
                  alt="Opens in a new window"
                  target="_blank"
                  rel="noreferrer"
                  href={"mailto:me@gabrielhicks.dev"}
                  icon={<EmailIcon />}
                >
                  Email
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <IconButton
            position="fixed"
            top="1rem"
            right="1rem"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Stack>
      </Stack> */
  );
}

export default Layout;
