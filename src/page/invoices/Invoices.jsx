import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { rows } from "./dataI";
import Header from "../../components/Header";
const Invoices = () => {
  const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID", width: 90, flex: 1 },
    {
      field: "name",
      headerName: " Name",
      width: 150,
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "age",
      headerName: "Age",
      width: 150,
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
      editable: true,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      width: 150,
      editable: true,

      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              mt: "9px",
              alignItems: "center",

              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "Manger"
                  ? theme.palette.secondary.dark
                  : "green",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "admin" ? (
              <AdminPanelSettingsIcon
                sx={{ color: "white" }}
                fontSize="small"
              />
            ) : access === "Manger" ? (
              <AssuredWorkloadIcon sx={{ color: "white" }} fontSize="small" />
            ) : (
              <PersonIcon sx={{ color: "white" }} fontSize="small" />
            )}

            <Typography color={"white"} fontSize={"15px"}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 800, width: "100%" }}>
       <Header title={"INVOICES"} subtitle={"invoices"} />

      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Invoices;
