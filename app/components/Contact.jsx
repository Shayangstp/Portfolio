import React from "react";
import { TextField, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "#5a8de0",
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
      borderColor: "#5a8de0",
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
  return (
    <div className="h-[90vh] relative max-w-[1920px] mt-10 p-10 border">
      <div
        id="header"
        className="text-[70px] border border-red-600 rounded-2xl py-2 px-16 max-w-min shadow-headerShadow"
      >
        <span className="text-[70px]">Contact.</span>
        <span className="text-[50px] text-red-600">me</span>
      </div>
      <div className="flex justify-center mt-24 w-[90vw]">
        <form
          id="contact"
          className="flex flex-col gap-5 border w-[50%]"
        >
          <div className="w-[100%] flex gap-4 border">
            <Input
              // error={formErrors.staffCodeMeli}
              label="Name"
              type="text"
              // value={staffCodeMeli}
              id="custom-css-outlined-input"
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
            <Input
              // error={formErrors.staffCodeMeli}
              label="Email"
              type="text"
              // value={staffCodeMeli}
              id="custom-css-outlined-input"
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
          </div>
          <Input
            // error={formErrors.staffCodeMeli}
            label="Subject..."
            type="text"
            // value={staffCodeMeli}
            id="custom-css-outlined-input"
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
          <Input
            // error={formErrors.staffCodeMeli}
            label="Message..."
            type="text"
            // value={staffCodeMeli}
            id="custom-css-outlined-input"
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
