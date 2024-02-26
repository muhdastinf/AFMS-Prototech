export default function CardImage({ data, handleSave, handleDelete }) {
  return (
    <div class="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="image 16.png" alt="Pest" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Date
          </h5>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Time
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
          Detected or Not Detected
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="#"
            class="inline-flex shadow items-center px-7 py-2 text-sm font-medium text-center text-white bg-[#274C5B] rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Save
          </a>
          <a
            href="#"
            class="inline-flex shadow items-center px-6 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
