const components = {
  MuiButton: {
    defaultProps: {
      color: "deGreen",
      variant: "contained",
      size: "medium",
      disableRipple: true,
      disableFocusRipple: true,
    },
    variants: [
      {
        props: { variant: "round" },
        style: () => {
          return {
            borderRadius: "10px",
          };
        },
      },
    ],
    styleOverrides: {
      root: {
        paddingLeft: "18px",
        paddingRight: "18px",
        display: "inline-flex",
        textTransform: "none",
        whiteSpace: "nowrap",
        boxShadow: "none",
        borderRadius: "10px",
        "&:active": {
          boxShadow: "none",
        },
        "&:hover": {
          boxShadow: "none",
        },
        "& .MuiButton-startIcon": { my: "-10%" },
      },
      sizeExtraSmall: {
        height: "32px",
      },
      sizeSmall: {
        height: "44px",
      },
      sizeMedium: {
        height: "56px",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: "10px",
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-root": {
          backgroundColor: "#F2F3F7",
          paddingTop: "10px",
          paddingBottom: "10px",
          color: "#5E6296",
          border: "none",
          "&:first-child": {
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          },
          "&:last-child": {
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
          },
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        "& .MuiTableCell-root": {
          border: "none",
          paddingTop: "17px",
          paddingBottom: "17px",
          color: "#7A7A86",
        },
      },
    },
  },
};

export default components;
