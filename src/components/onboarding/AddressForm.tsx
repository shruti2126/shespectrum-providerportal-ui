import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProviderContext } from "@/context/providerContext";

const formSchema = z.object({
  street: z.string().min(1, { message: "Street is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zip: z.string().regex(/^\d{5,6}$/, { message: "Enter a valid ZIP code" }),
  country: z.string().min(1, { message: "Country is required" }),
});

const AddressForm = () => {
  const { dispatch } = useProviderContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Dispatch the address to the context
    dispatch({
      type: "SET_PROVIDER_DETAILS",
      payload: {
        address: data,
      },
    });

    console.log("Address submitted successfully", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
      <h2 className="text-lg font-semibold text-gray-700">Address Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Street */}
        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-gray-600"
          >
            Street Address
          </label>
          <input
            type="text"
            id="street"
            placeholder="123 Main St"
            {...register("street")}
            className={`mt-1 block w-full p-2 border ${
              errors.street ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.street && (
            <p className="text-red-500 text-sm">{errors.street.message}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-600"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="City"
            {...register("city")}
            className={`mt-1 block w-full p-2 border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-600"
          >
            State/Province
          </label>
          <input
            type="text"
            id="state"
            placeholder="State/Province"
            {...register("state")}
            className={`mt-1 block w-full p-2 border ${
              errors.state ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>

        {/* ZIP */}
        <div>
          <label
            htmlFor="zip"
            className="block text-sm font-medium text-gray-600"
          >
            ZIP/Postal Code
          </label>
          <input
            type="text"
            id="zip"
            placeholder="123456"
            {...register("zip")}
            className={`mt-1 block w-full p-2 border ${
              errors.zip ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          {errors.zip && (
            <p className="text-red-500 text-sm">{errors.zip.message}</p>
          )}
        </div>

        {/* Country */}
        <div className="sm:col-span-2">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-600"
          >
            Country
          </label>
          <select
            id="country"
            {...register("country")}
            className={`mt-1 block w-full p-2 border ${
              errors.country ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          >
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Address
      </button>
    </form>
  );
};

export default AddressForm;
