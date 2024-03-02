const AddCoffee = () => {
  return (
    <div className="bg-[#F4F4F0] p-24">
      <h1 className="text-4xl">Coffee Add</h1>
      <form>
        <div>
          <div className="flex gap-5 mb-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name Enter"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Avalable Quantity</span>
              </div>
              <input
                type="text"
                name="quantity"
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-5 mb-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Supper Name</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name Enter"
                name="supper"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Test</span>
              </div>
              <input
                type="text"
                name="test"
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-5 mb-4">
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Categories</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name Enter"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control md:w-1/2">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                name="details"
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="flex gap-5 mb-4">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">PHOTO URl</span>
              </div>
              <input
                type="text"
                name="photo"
                placeholder="Coffee Name Enter"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input className="btn-block btn" type="submit" value="ADD COFFEE" />
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
