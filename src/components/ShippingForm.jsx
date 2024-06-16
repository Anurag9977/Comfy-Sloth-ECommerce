const ShippingForm = ({
  name,
  address,
  pincode,
  setName,
  setAddress,
  setPincode,
}) => {
  return (
    <div className="bg-base-300 py-4 px-8 grid md:grid-cols-2 gap-4">
      <label>
        <div className="label">
          <span className="label-text font-content text-base">
            Name<sup className="text-red-500 text-base">*</sup>
          </span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-md w-full font-content text-base required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <div className="label">
          <span className="label-text font-content text-base">
            Address<sup className="text-red-500 text-base">*</sup>
          </span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered rounded-md w-full font-content text-base required"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label>
        <div className="label">
          <span className="label-text font-content text-base">
            Pincode<sup className="text-red-500 text-base">*</sup>
          </span>
        </div>
        <input
          type="tel"
          placeholder="Type here"
          className="input input-bordered rounded-md w-full font-content text-base required"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
      </label>
    </div>
  );
};
export default ShippingForm;
