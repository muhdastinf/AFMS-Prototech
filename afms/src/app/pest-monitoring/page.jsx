"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardImage from "../components/CardImage";
import { BlobServiceClient } from "@azure/storage-blob";
import { useState, useEffect } from "react";

export default function PestMonitoring() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerName = "esp32cam";

  const connectionString =
    "BlobEndpoint=https://afmsprototech.blob.core.windows.net/;QueueEndpoint=https://afmsprototech.queue.core.windows.net/;FileEndpoint=https://afmsprototech.file.core.windows.net/;TableEndpoint=https://afmsprototech.table.core.windows.net/;SharedAccessSignature=sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2025-01-27T08:13:08Z&st=2024-02-27T00:13:08Z&spr=https,http&sig=I%2F0jVKKeDWBbLqig1%2BQgSr6NtFBnoAakybbqAq077n4%3D";
  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  useEffect(() => {
    const fetchImages = async () => {
      const blobs = [];
      for await (const blob of containerClient.listBlobsFlat()) {
        blobs.push(blob.name);
      }
      setImages(blobs);
    };
    fetchImages();
    setIsLoading(false);
  }, []);

  const deleteImage = async (imageName) => {
    const blobClient = containerClient.getBlockBlobClient(imageName);
    try {
      await blobClient.delete();
      // Update the state to remove the deleted image
      setImages((prevImages) => prevImages.filter((img) => img !== imageName));
    } catch (error) {
      console.error("Error deleting image:", error.message);
    }
  };

  const formatDate = (datetime) => {
    if (datetime[0] == "n") {
      datetime = datetime.slice(1);
    }
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    const second = datetime.substring(12, 14);
    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  };

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-col justify-center items-center">
        <div>ESP32-CAM Images</div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 sm:grid-cols-2">
            {images.map((image, index) => (
              <CardImage
                containerName={containerName}
                imageName={image}
                handleDelete={() => deleteImage(image)}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
