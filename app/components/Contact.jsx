import React from "react";
import { TextField, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import { useTheme } from "next-themes";

const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "#914343",
  },
  "& label": {
    fontSize: "13px",
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#914343",
    },
    // "& input[type=number]": {
    //   "-moz-appearance": "textfield",
    //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //     display: "none",
    //     "-webkit-appearance": "none",
    //     margin: 0,
    //   },
    //   "&::placeholder": {
    //     color: "gray",
    //     fontStyle: "italic",
    //   },
    // },
  },
  "& input": {
    // Prevent browser from autofilling
    autoComplete: "off",
  },
});
const InputLight = styled(TextField)({
  "& label.Mui-focused": {
    color: "#914343",
  },
  "& label": {
    fontSize: "13px",
    color: "black",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
      borderRadius: "15px",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#914343",
    },
    // "& input[type=number]": {
    //   "-moz-appearance": "textfield",
    //   "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
    //     display: "none",
    //     "-webkit-appearance": "none",
    //     margin: 0,
    //   },
    //   "&::placeholder": {
    //     color: "gray",
    //     fontStyle: "italic",
    //   },
    // },
  },
  "& input": {
    // Prevent browser from autofilling
    autoComplete: "off",
  },
});

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className="h-[90vh] relative max-w-[1920px] w-[100%] mt-16 md:mt-32 p-2">
      <div
        id="header"
        className="text-[70px] rounded-2xl py-2 px-5 max-w-min md:ms-10 ms-0"
      >
        <div className="flex items-center">
          <span>
            <MarkunreadOutlinedIcon className="me-2 text-[50px]" />
          </span>
          <span className="text-[50px] md:text-[70px]">Contact.</span>
          <span className="text-[20px] md:text-[30px] text-red-600 md:mt-7 mt-6">
            me
          </span>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center mt-24 max-w-[100%]">
        <form
          id="contact"
          className="flex flex-col gap-5 md:w-[50%] p-5 md:p-0"
        >
          <div className="flex gap-4 border-red-900">
            {theme === "dark" ? (
              <Input
                // error={formErrors.staffCodeMeli}
                label="Name"
                type="text"
                className="md:w-[50%] w-[100%]"
                // value={staffCodeMeli}
                // onChange={(e) => {
                //   //limit the input
                //   let inputValue = e.target.value;
                //   const maxLength = 10;
                //   if (inputValue.length > maxLength) {
                //     inputValue = inputValue.slice(0, maxLength);
                //   }
                //   dispatch(RsetStaffCodeMeli(inputValue));
                // }}
              />
            ) : (
              <InputLight
                // error={formErrors.staffCodeMeli}
                label="Name"
                type="text"
                className="md:w-[50%] w-[100%]"
                // value={staffCodeMeli}
                // onChange={(e) => {
                //   //limit the input
                //   let inputValue = e.target.value;
                //   const maxLength = 10;
                //   if (inputValue.length > maxLength) {
                //     inputValue = inputValue.slice(0, maxLength);
                //   }
                //   dispatch(RsetStaffCodeMeli(inputValue));
                // }}
              />
            )}
            {/* make email validation */}
            {theme == "dark" ? (
              <Input
                // error={formErrors.staffCodeMeli}
                label="Email"
                type="text"
                className="md:w-[50%] w-[100%]"
                // value={staffCodeMeli}
                // onChange={(e) => {
                //   //limit the input
                //   let inputValue = e.target.value;
                //   const maxLength = 10;
                //   if (inputValue.length > maxLength) {
                //     inputValue = inputValue.slice(0, maxLength);
                //   }
                //   dispatch(RsetStaffCodeMeli(inputValue));
                // }}
              />
            ) : (
              <InputLight
                // error={formErrors.staffCodeMeli}
                label="Email"
                type="text"
                className="md:w-[50%] w-[100%]"
                // value={staffCodeMeli}
                // onChange={(e) => {
                //   //limit the input
                //   let inputValue = e.target.value;
                //   const maxLength = 10;
                //   if (inputValue.length > maxLength) {
                //     inputValue = inputValue.slice(0, maxLength);
                //   }
                //   dispatch(RsetStaffCodeMeli(inputValue));
                // }}
              />
            )}
          </div>
          {theme === "dark" ? (
            <Input
              // error={formErrors.staffCodeMeli}
              label="Subject..."
              type="text"
              // value={staffCodeMeli}
              // onChange={(e) => {
              //   //limit the input
              //   let inputValue = e.target.value;
              //   const maxLength = 10;
              //   if (inputValue.length > maxLength) {
              //     inputValue = inputValue.slice(0, maxLength);
              //   }
              //   dispatch(RsetStaffCodeMeli(inputValue));
              // }}
            />
          ) : (
            <InputLight
              // error={formErrors.staffCodeMeli}
              label="Subject..."
              type="text"
              // value={staffCodeMeli}
              // onChange={(e) => {
              //   //limit the input
              //   let inputValue = e.target.value;
              //   const maxLength = 10;
              //   if (inputValue.length > maxLength) {
              //     inputValue = inputValue.slice(0, maxLength);
              //   }
              //   dispatch(RsetStaffCodeMeli(inputValue));
              // }}
            />
          )}
          {theme === "dark" ? (
            <Input
              // error={formErrors.staffCodeMeli}
              label="Message..."
              type="text"
              // value={staffCodeMeli}
              multiline
              rows={4}
              // onChange={(e) => {
              //   //limit the input
              //   let inputValue = e.target.value;
              //   const maxLength = 10;
              //   if (inputValue.length > maxLength) {
              //     inputValue = inputValue.slice(0, maxLength);
              //   }
              //   dispatch(RsetStaffCodeMeli(inputValue));
              // }}
            />
          ) : (
            <InputLight
              // error={formErrors.staffCodeMeli}
              label="Message..."
              type="text"
              // value={staffCodeMeli}
              multiline
              rows={4}
              // onChange={(e) => {
              //   //limit the input
              //   let inputValue = e.target.value;
              //   const maxLength = 10;
              //   if (inputValue.length > maxLength) {
              //     inputValue = inputValue.slice(0, maxLength);
              //   }
              //   dispatch(RsetStaffCodeMeli(inputValue));
              // }}
            />
          )}
          <Button
            variant="outlined"
            className="rounded-xl py-2 border border-red-600 dark:text-white text-black hover:border-red-500"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
