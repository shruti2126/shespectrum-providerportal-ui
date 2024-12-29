
import { useProviderContext } from "@/context/providerContext";

const AddressForm = () => {
  const { state, dispatch } = useProviderContext();
  const { providerDetails } = state;

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_PROVIDER_DETAILS",
      payload: {
        ...providerDetails,
        address: { ...providerDetails.address, [name]: value },
      },
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Address Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="street" className="block text-sm font-medium">
            Street Address
          </label>
          <input
            type="text"
            name="street"
            id="street"
            value={providerDetails?.address?.street || ""}
            onChange={handleInputChange}
            placeholder="123 Main St"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={providerDetails?.address?.city || ""}
            onChange={handleInputChange}
            placeholder="City"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium">
            State/Province
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={providerDetails?.address?.state || ""}
            onChange={handleInputChange}
            placeholder="State/Province"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium">
            ZIP/Postal Code
          </label>
          <input
            type="text"
            name="zip"
            id="zip"
            value={providerDetails?.address?.zip || ""}
            onChange={handleInputChange}
            placeholder="123456"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="country" className="block text-sm font-medium">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={providerDetails?.address?.country || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
