import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    description: "Spotify Subscription",
    transactionid: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12.30 AM",
    amount: "-$2,500",
    receipt: "Download",
  },
  {
    description: "Freepik Sales",
    transactionid: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10.40 PM",
    amount: "+$750",
    receipt: "Download",
  },
  {
    description: "Mobile Service",
    transactionid: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10.40 PM",
    amount: "-$150",
    receipt: "Download",
  },
  {
    description: "Wilson",
    transactionid: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03.29 PM",
    amount: "-$1050",
    receipt: "Download",
  },
  {
    description: "Emilly",
    transactionid: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10.40 PM",
    amount: "+$840",
    receipt: "Download",
  },
];

export default function TransactionPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("description", {
        cell: (info) => (
          <div className="flex flex-row justify-center items-start gap-3.5">
            <Button
              color="red_700"
              size="sm"
              variant="outline"
              shape="circle"
              className="w-[30px] mb-[17px] ml-7 sm:ml-5"
            >
              <Img src="images/img_arrow_red_700.svg" />
            </Button>
            <Text as="p" className="mt-1.5 mr-[30px] sm:mr-5">
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2.5 pl-[30px] sm:pl-5 !text-blue_gray-400 !font-medium">
            Description
          </Text>
        ),
        meta: { width: "259px" },
      }),
      tableColumnHelper.accessor("transactionid", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pb-[11px] px-px !text-blue_gray-400 !font-medium">
            Transaction ID
          </Text>
        ),
        meta: { width: "154px" },
      }),
      tableColumnHelper.accessor("type", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-px pb-2.5 px-px !text-blue_gray-400 !font-medium">
            Type
          </Text>
        ),
        meta: { width: "125px" },
      }),
      tableColumnHelper.accessor("card", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-px pb-[11px] px-px !text-blue_gray-400 !font-medium">
            Card
          </Text>
        ),
        meta: { width: "134px" },
      }),
      tableColumnHelper.accessor("date", {
        cell: (info) => <Text as="p">{info?.getValue?.()}</Text>,
        header: (info) => (
          <Text as="p" className="pt-px pb-[11px] px-px !text-blue_gray-400 !font-medium">
            Date
          </Text>
        ),
        meta: { width: "198px" },
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Text as="p" className="!text-red-700 !font-medium">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-[11px] px-px !text-blue_gray-400 !font-medium">
            Amount
          </Text>
        ),
        meta: { width: "110px" },
      }),
      tableColumnHelper.accessor("receipt", {
        cell: (info) => (
          <div className="h-[51px] md:w-full relative">
            <Text
              size="lg"
              as="p"
              className="w-max ml-[15px] left-[12%] bottom-0 top-0 my-auto !text-indigo-600_01 absolute"
            >
              {info?.getValue?.()}
            </Text>
            <div className="h-[35px] w-[77%] left-0 bottom-0 top-0 my-auto border-indigo-600_01 border border-solid absolute rounded-[17px]" />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="pt-px pb-2.5 px-px !text-blue_gray-400 !font-medium">
            Receipt
          </Text>
        ),
        meta: { width: "130px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Leonardo lermen de sousa's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-gray-100">
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[27px]">
          <Header className="flex justify-center items-center w-full sm:w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-6">
            <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
              <div className="flex flex-row justify-start w-[66%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                  <div className="flex flex-row justify-between items-start w-full">
                    <Heading as="h1">My Cards</Heading>
                    <Button size="xs" shape="square" className="text-blue_gray-900 font-semibold min-w-[93px]">
                      + Add Card
                    </Button>
                  </div>
                  <div className="flex flex-row md:flex-col w-full gap-[30px]">
                    <div className="flex flex-col items-center justify-start w-[48%] md:w-full pt-6 gap-[33px] sm:pt-5 bg-indigo-600_01 rounded-[25px]">
                      <div className="flex flex-col items-start justify-start w-[87%] md:w-full gap-[26px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <Text size="xs" as="p" className="!text-white-A700">
                              Balance
                            </Text>
                            <Text size="3xl" as="p" className="!text-white-A700">
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chip_card.png"
                            alt="balance_two"
                            className="w-[34px] md:h-auto object-cover"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2">
                              CARD HOLDER
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700">
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2">
                              VALID THRU
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700">
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                          <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                            <Text size="4xl" as="p" className="!text-white-A700">
                              3778 **** **** 1234
                            </Text>
                            <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[48%] md:w-full pt-6 gap-[33px] sm:pt-5 bg-indigo-500 rounded-[25px]">
                      <div className="flex flex-col items-start justify-start w-[87%] md:w-full gap-[26px]">
                        <div className="flex flex-row justify-between items-start w-full">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <Text size="xs" as="p" className="!text-white-A700">
                              Balance
                            </Text>
                            <Text size="3xl" as="p" className="!text-white-A700">
                              $5,756
                            </Text>
                          </div>
                          <Img
                            src="images/img_chip_card.png"
                            alt="chipcard_one"
                            className="w-[34px] md:h-auto object-cover"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-[76%] md:w-full">
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2">
                              CARD HOLDER
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700">
                              Eddy Cusuma
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start gap-1">
                            <Text size="xs" as="p" className="!text-white-A700_b2">
                              VALID THRU
                            </Text>
                            <Text size="lg" as="p" className="!text-white-A700">
                              12/22
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-row justify-center w-full p-5 rounded-bl-[25px] rounded-br-[25px] bg-gradient">
                          <div className="flex flex-row justify-between items-center w-[98%] mx-1">
                            <Text size="4xl" as="p" className="!text-white-A700">
                              3778 **** **** 1234
                            </Text>
                            <Img src="images/img_group_17.svg" alt="image" className="h-[30px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-[32%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                  <Heading as="h2">My Expense</Heading>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row justify-center items-end w-full p-[22px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <div className="flex flex-col items-center justify-start w-[13%] gap-2.5">
                        <div className="h-[93px] w-full bg-gray-100_04 rounded-[10px]" />
                        <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                          Aug
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[13%] ml-[15px] gap-2.5">
                        <div className="h-[142px] w-full bg-gray-100_04 rounded-[10px]" />
                        <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                          Sep
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[13%] ml-[15px] gap-[9px]">
                        <div className="h-[96px] w-full bg-gray-100_04 rounded-[10px]" />
                        <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                          Oct
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[13%] ml-[15px] gap-[9px]">
                        <div className="h-[49px] w-full bg-gray-100_04 rounded-[10px]" />
                        <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                          Nov
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[18%] mt-0.5 ml-1.5 gap-2">
                        <Text size="md" as="p" className="!text-blue_gray-800 text-center">
                          $12,500
                        </Text>
                        <div className="h-[137px] w-[68%] bg-indigo-600_01 rounded-[10px]" />
                        <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                          Dec
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[13%] gap-[9px] mx-1.5">
                        <div className="h-[88px] w-full bg-gray-100_04 rounded-[10px]" />
                        <Text size="s" as="p" className="!text-blue_gray-400 text-center">
                          Jan
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <Heading as="h3">Recent Transactions</Heading>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row justify-between items-start w-[38%] md:w-full z-[1]">
                  <div className="flex flex-col items-center justify-start w-[35%] gap-[7px]">
                    <Text as="p" className="!text-blue-A700 !font-medium">
                      All Transactions
                    </Text>
                    <div className="h-[3px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-blue-A700" />
                  </div>
                  <Text as="p" className="!text-blue_gray-400 !font-medium">
                    Income
                  </Text>
                  <Text as="p" className="!text-blue_gray-400 !font-medium">
                    Expense
                  </Text>
                </div>
                <div className="h-px w-full mt-[-1px] bg-gray-300" />
              </div>
              <div className="flex flex-row justify-center w-full py-[17px]">
                <ReactTable
                  size="xs"
                  bodyProps={{ className: "md:flex-col" }}
                  headerProps={{ className: "md:flex-col md:gap-5" }}
                  rowDataProps={{ className: "md:flex-col md:gap-5" }}
                  className="w-[1110px] mt-1 bg-white-A700 rounded-[25px]"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
              <div className="flex flex-row justify-end items-center w-[30%] md:w-full">
                <div className="flex flex-row justify-start items-center w-[28%] gap-1">
                  <Img src="images/img_arrow.svg" alt="arrow_eleven" className="h-[24px] w-[24px]" />
                  <Text size="lg" as="p" className="!text-indigo-600_01 !font-medium">
                    Previous
                  </Text>
                </div>
                <Button color="indigo_600_01" size="md" className="ml-3 font-medium min-w-[40px] rounded-[10px]">
                  1
                </Button>
                <Text size="lg" as="p" className="ml-[11px] !text-indigo-600_01 !font-medium">
                  2
                </Text>
                <Text size="lg" as="p" className="ml-[27px] sm:ml-5 !text-indigo-600_01 !font-medium">
                  3
                </Text>
                <Text size="lg" as="p" className="ml-[27px] sm:ml-5 !text-indigo-600_01 !font-medium">
                  4
                </Text>
                <div className="flex flex-row justify-start items-center w-[19%] ml-7 gap-1 sm:ml-5">
                  <Text size="lg" as="p" className="!text-indigo-600_01 !font-medium">
                    Next
                  </Text>
                  <Img src="images/img_arrow_indigo_600_01.svg" alt="arrow_thirteen" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
