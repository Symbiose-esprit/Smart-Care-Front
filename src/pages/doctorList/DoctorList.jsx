import "./doctorList.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { doctorRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DoctorList() {

    const [data,setData]= useState(doctorRows);

    const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
    };


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "doctor",
          headerName: "Doctor",
          width: 250,
          renderCell: (params) => {
            return (
              <div className="doctorListUser">
                <img className="doctorListImg" src={params.row.Docimg} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "cin", headerName: "CIN", width: 120 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
            field: "transaction",
            headerName: "Transactions Sum",
            width: 200,
          },
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/doctor/" + params.row.id}>
                  <button className="doctorListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="doctorListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
    return (
        <div className="doctorList">
                  <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        />
        </div>
        );
}


