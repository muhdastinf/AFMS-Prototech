export default function CardImage({ data, handleSave, handleDelete }) {
  return (
    <div class="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="image 16.png" alt="Pest" />
      </a>
      <div class="p-3 md:p-5">
        <h5 class="mb-1 text-lg md:mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Date {/*ganti dengan data.date */}
        </h5>
        <h5 class="mb-1 text-lg md:mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Time {/*ganti dengan data.time */}
        </h5>
        <p class="mb-2 text-sm md:text-md md:mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
          Detected or Not Detected
        </p>
        <div class="flex justify-center space-x-4">
          <a
            href="#"
            class="size-1/2 items-center px-3 py-2 text-sm font-medium font-bold text-center text-white bg-[#274C5B] rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#274C5B] dark:hover:bg-gray-700 dark:focus:ring-blue-800"
          >
            Save
          </a>
          <a
            href="#"
            class="size-1/2 items-center px-3 py-2 text-sm font-medium font-bold text-center text-black bg-white rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
