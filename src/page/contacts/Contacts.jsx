import { Box} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows ,columns} from "./dataC";
import Header from "../../components/Header";

const Contacts = () => {

 
  return (
    <Box sx={{ height: 800, width: "100%" }}>
       <Header title={"CONTACTS"} subtitle={"Contacts"} />

    <DataGrid
    
     slots={{
       toolbar: GridToolbar,
     }}
      rows={rows}
      // @ts-ignore
      columns={columns}
      pageSizeOptions={[100]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}

export default Contacts
