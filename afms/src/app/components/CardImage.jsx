export default function CardImage({ containerName, imageName, handleSave, handleDelete }) {

  const formatDate = (datetime) => {
    if (datetime[0] == "n") {
      datetime = datetime.slice(1);
    }
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    return `${day}-${month}-${year}`;
  };

  const formatTime = (datetime) => {
    if (datetime[0] == "n") {
      datetime = datetime.slice(1);
    }
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    const second = datetime.substring(12, 14);
    return `${hour}:${minute}:${second}`;
  };

  return (
    <div class="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={`https://afmsprototech.blob.core.windows.net/${containerName}/${imageName}`} alt="Pest" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Date : {formatDate(imageName)}
          </h5>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Time : {formatTime(imageName)}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">
          {imageName[0] === "n" ? "Not Detected" : "Detected"}
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
