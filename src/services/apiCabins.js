import supabase from "./superbase";
import { supabaseUrl } from "./superbase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin in the database
  let query = supabase.from("cabins");
  // Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit
  if (id) {
    console.log(imagePath);
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  }

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  // 2. Upload image to the storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. If there was an error uploading the image, delete the cabin from the database
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Error uploading image", storageError);
    throw new Error(storageError.message);
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
