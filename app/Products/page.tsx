import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

type FavoritepageProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
};

async function addDocToFavorites({
  id,
  name,
  image,
  description,
  category,
}: FavoritepageProps) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      id: id,
      name: name,
      image: image,
      category: category,
      description: description,
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error while logging in data to firestore ", error);
    return false;
  }
}

const page = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const added = await addDocToFavorites({
      id,
      image,
      description,
      name,
      category,
    });
    if (added) {
      setId(""), setName(""), setImage(""), setCategory(""), setDescription("");

      alert("Data added to firestore DB!!");
    }
  };

  return (
    <div className="h-screen bg-white text-black">This is the product page</div>
  );
};

export default page;
