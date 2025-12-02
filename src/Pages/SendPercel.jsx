import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const axiosSecure = useAxios();
  const { user } = useAuth();

  const servicesRegions = useLoaderData();
  const serviceDuplicate = servicesRegions.map((c) => c.region);
  const regions = [...new Set(serviceDuplicate)];
  const senderRegions = useWatch({ control, name: "senderRegion" });
  const receiverRegions = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const districtRegion = servicesRegions.filter((c) => c.region === region);
    return districtRegion;
  };

  const handelSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);
    data.cost = cost;

    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be cost ${cost} taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I agree it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
        });
        // Swal.fire({
        // title: "Deleted!",
        // text: "Your file has been deleted.",
        // icon: "success",
        // });
      }
    });
  };
  return (
    <div className="py-10 max-w-11/12 mx-auto">
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <p className="text-2xl font-medium py-3 border-b-2">
        Enter your parcel details
      </p>
      <form onSubmit={handleSubmit(handelSendParcel)} className="mt-12 ">
        <div className="font-medium text-2xl py-2">
          {/* parcel type*/}
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType", { required: true })}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          {/* parcel type*/}
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType", { required: true })}
              value="Non-document"
              className="radio"
              defaultChecked
            />
            Non-document
          </label>
        </div>
        {/* parcel information: name, weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 border-b-2">
          <fieldset className="fieldset mb-5">
            <label className="label text-xl">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              className="input w-full"
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label text-xl">Parcel Weight</label>
            <input
              type="number"
              {...register("parcelWeight", { required: true })}
              className="input w-full"
              placeholder="parcel weight (kg)"
            />
          </fieldset>
        </div>
        {/* Sender and receiver information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {/* sender info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-bold">Sender Details</h4>
            {/* sender name */}
            <label className="label text-xl">Sender Name</label>
            <input
              type="text"
              {...register("senderName", { required: true })}
              className="input w-full"
              defaultValue={user?.displayName}
              placeholder="sender name"
            />
            {/* sender email */}
            <label className="label text-xl">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail", { required: true })}
              className="input w-full"
              defaultValue={user?.email}
              placeholder="sender email"
            />

            {/* sender Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Regions</legend>
              <select
                {...register("senderRegion", { required: true })}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender District */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Districts</legend>
              <select
                {...register("senderDistrict", { required: true })}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(senderRegions).map((r, index) => (
                  <option key={index} value={r.district}>
                    {r.district}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender address */}
            <label className="label text-xl mt-5">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress", { required: true })}
              className="input w-full"
              placeholder="sender address"
            />
            {/* sender phone no */}
            <label className="label text-xl mt-5">Sender phone</label>
            <input
              type="number"
              {...register("senderPhone", { required: true })}
              className="input w-full"
              placeholder="sender phone"
            />
            {/* sender instruction */}
            <label className="label text-xl mt-5">
              Sender pickup instruction
            </label>
            <textarea
              type="text"
              {...register("senderInstruction", { required: true })}
              className="input w-full"
              placeholder="sender pickup instruction"
            ></textarea>
          </fieldset>

          {/* receiver info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-bold">Receiver Details</h4>
            {/* receiver name */}
            <label className="label text-xl">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName", { required: true })}
              className="input w-full"
              placeholder="receiver name"
            />
            {/* receiver Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Regions</legend>
              <select
                {...register("receiverRegion", { required: true })}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver District */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Districts</legend>
              <select
                {...register("receiverDistrict", { required: true })}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(receiverRegions).map((r, index) => (
                  <option key={index} value={r.district}>
                    {r.district}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* receiver address */}
            <label className="label text-xl mt-5">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress", { required: true })}
              className="input w-full"
              placeholder="receiver address"
            />
            {/* receiver phone no */}
            <label className="label text-xl mt-5">Receiver Phone</label>
            <input
              type="number"
              {...register("receiverPhone", { required: true })}
              className="input w-full"
              placeholder="receiver phone"
            />
            <label className="label text-xl mt-5">Delivery Instruction</label>
            <textarea
              type="text"
              {...register("deliveryInstruction", { required: true })}
              className="input w-full"
              placeholder="delivery instruction"
            ></textarea>
          </fieldset>
        </div>
        <input
          type="submit"
          value="send parcel"
          className="btn btn-primary text-black mt-5"
        />
      </form>
    </div>
  );
};

export default SendPercel;
