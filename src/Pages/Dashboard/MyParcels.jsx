import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  // parcel delete
  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want delete this/",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            // refresh the data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="">
      <h1>this is my parcels {parcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Name</th>
              <th>Sender Name</th>
              <th>Sender Email</th>
              <th>Sender Regions</th>
              <th>Sender District</th>
              <th>Sender Address</th>
              <th>Sender Phone</th>
              <th>Sender Instruction</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.senderName}</td>
                <td>{parcel.senderEmail}</td>
                <td>{parcel.senderRegion}</td>
                <td>{parcel.senderDistrict}</td>
                <td>{parcel.senderAddress}</td>
                <td>{parcel.senderPhone}</td>
                <td>{parcel.senderInstruction}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus?.toLowerCase() === "paid" ? (
                    <span className="text-green-500">Paid</span>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${parcel._id}`}
                      className="btn btn-primary btn-sm text-black font-bold"
                    >
                      Pay
                    </Link>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-square hover:bg-primary relative group rounded mr-2">
                    <FaMagnifyingGlass />
                    <span
                      className="absolute hidden group-hover:block -top-8 left-1/2 -translate-x-1/2
                       bg-black text-white text-xs px-2 py-1 rounded"
                    >
                      show
                    </span>
                  </button>
                  <button className="btn btn-square hover:bg-primary relative group rounded mr-2">
                    <FaEdit />
                    <span
                      className="absolute hidden group-hover:block -top-8 left-1/2 -translate-x-1/2
                       bg-black text-white text-xs px-2 py-1 rounded"
                    >
                      Edit
                    </span>
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary relative group rounded"
                  >
                    <FaRegTrashAlt />
                    <span
                      className="absolute hidden group-hover:block -top-8 left-1/2 -translate-x-1/2
                       bg-black text-white text-xs px-2 py-1 rounded"
                    >
                      Delete
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
