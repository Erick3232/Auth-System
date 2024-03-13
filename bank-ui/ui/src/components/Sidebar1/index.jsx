import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="250px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Img
        src="images/img_logo_40x162.png"
        alt="logo_one"
        className="w-full md:h-auto sm:w-full mt-[30px] mx-auto object-cover max-w-[162px]"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: { color: "#314ca3", fontWeight: "500 !important" },
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[67px] mb-[347px]"
      >
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_vector_blue_gray_400_25x25.svg"
            alt="vector_one"
            className="h-[25px] w-[25px] ml-[22px] sm:ml-5"
          />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Dashboard
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img src="images/defaultNoData.png" alt="glyph_one" className="h-[25px] w-[25px] ml-[22px] sm:ml-5" />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Transactions
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img src="images/defaultNoData.png" alt="user3one_one" className="h-[25px] w-[25px] ml-[22px] sm:ml-5" />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Accounts
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img src="images/img_group.svg" alt="image" className="h-[25px] w-[25px] ml-[22px] sm:ml-5" />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Investments
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img src="images/img_credit_card_1.svg" alt="creditcardone" className="h-[25px] w-[25px] ml-[22px] sm:ml-5" />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Credit Cards
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img src="images/img_loan_1.svg" alt="loanone_one" className="h-[25px] w-[25px] ml-[22px] sm:ml-5" />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Loans
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img src="images/img_service_1.svg" alt="serviceone_one" className="h-[25px] w-[25px] ml-[22px] sm:ml-5" />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Services
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_econometrics_1.svg"
            alt="econometricsone"
            className="h-[25px] w-[25px] ml-[22px] sm:ml-5"
          />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            My Privileges
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[17px]">
          <Img
            src="images/img_vector_blue_gray_400.svg"
            alt="vector_three"
            className="h-[25px] w-[25px] ml-[22px] sm:ml-5"
          />
          <Text size="2xl" as="p" className="!text-blue_gray-400">
            Setting
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}
